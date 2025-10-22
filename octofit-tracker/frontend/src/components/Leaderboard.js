import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const codespace = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
        const apiUrl = codespace !== 'localhost' 
          ? `https://${codespace}-8000.app.github.dev/api/leaderboard/`
          : 'http://localhost:8000/api/leaderboard/';
        
        console.log('Fetching leaderboard from:', apiUrl);
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Leaderboard data received:', data);
        
        // Handle both paginated (.results) and plain array responses
        const leaderboardData = data.results || data;
        setLeaderboard(Array.isArray(leaderboardData) ? leaderboardData : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <div className="spinner-border text-danger" role="status">
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

  // Medal colors for top 3
  const getMedalIcon = (rank) => {
    if (rank === 1) return <i className="bi bi-trophy-fill text-warning fs-4"></i>;
    if (rank === 2) return <i className="bi bi-trophy-fill text-secondary fs-5"></i>;
    if (rank === 3) return <i className="bi bi-trophy-fill text-danger fs-6"></i>;
    return <span className="fw-bold">#{rank}</span>;
  };

  const getRowClass = (rank) => {
    if (rank === 1) return 'table-warning';
    if (rank === 2) return 'table-light';
    if (rank === 3) return 'table-danger bg-opacity-25';
    return '';
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-5 fw-bold text-danger">
          <i className="bi bi-trophy-fill me-2"></i>Leaderboard
        </h1>
        <span className="badge bg-secondary fs-6">{leaderboard.length} Entries</span>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped mb-0">
              <thead className="table-dark">
                <tr>
                  <th scope="col" className="text-center" style={{ width: '100px' }}>Rank</th>
                  <th scope="col">User/Team</th>
                  <th scope="col" className="text-center">Total Points</th>
                  <th scope="col" className="text-center">Total Activities</th>
                  <th scope="col" className="text-center">Total Calories</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.length > 0 ? (
                  leaderboard.map((entry, index) => {
                    const rank = index + 1;
                    return (
                      <tr key={entry.id} className={getRowClass(rank)}>
                        <td className="text-center">
                          {getMedalIcon(rank)}
                        </td>
                        <td className="fw-bold">
                          <i className="bi bi-person-circle me-2"></i>
                          {entry.user || entry.team || 'Unknown'}
                        </td>
                        <td className="text-center">
                          <span className="badge bg-primary fs-6 px-3 py-2">
                            {entry.total_points}
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="badge bg-info text-dark">
                            {entry.total_activities}
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="badge bg-danger">
                            {entry.total_calories}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-5 text-muted">
                      <i className="bi bi-inbox fs-1 d-block mb-2"></i>
                      No leaderboard data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
