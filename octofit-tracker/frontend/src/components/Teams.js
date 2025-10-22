import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const codespace = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
        const apiUrl = codespace !== 'localhost' 
          ? `https://${codespace}-8000.app.github.dev/api/teams/`
          : 'http://localhost:8000/api/teams/';
        
        console.log('Fetching teams from:', apiUrl);
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Teams data received:', data);
        
        // Handle both paginated (.results) and plain array responses
        const teamsData = data.results || data;
        setTeams(Array.isArray(teamsData) ? teamsData : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching teams:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-5 fw-bold text-success">
          <i className="bi bi-people me-2"></i>Teams
        </h1>
        <span className="badge bg-secondary fs-6">{teams.length} Total</span>
      </div>

      <div className="row g-4">
        {teams.length > 0 ? (
          teams.map((team) => (
            <div key={team.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 hover-lift">
                <div className="card-header bg-success text-white">
                  <h5 className="card-title mb-0">
                    <i className="bi bi-trophy-fill me-2"></i>
                    {team.name}
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">{team.description}</p>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">
                      <i className="bi bi-person-fill me-1"></i>Members
                    </span>
                    <span className="badge bg-success rounded-pill">
                      {team.members ? team.members.length : 0}
                    </span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <button className="btn btn-outline-success btn-sm w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info text-center py-5" role="alert">
              <i className="bi bi-info-circle fs-1 d-block mb-2"></i>
              <p className="mb-0">No teams found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Teams;
