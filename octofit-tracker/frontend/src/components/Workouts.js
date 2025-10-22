import React, { useState, useEffect } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const codespace = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
        const apiUrl = codespace !== 'localhost' 
          ? `https://${codespace}-8000.app.github.dev/api/workouts/`
          : 'http://localhost:8000/api/workouts/';
        
        console.log('Fetching workouts from:', apiUrl);
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Workouts data received:', data);
        
        // Handle both paginated (.results) and plain array responses
        const workoutsData = data.results || data;
        setWorkouts(Array.isArray(workoutsData) ? workoutsData : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching workouts:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <div className="spinner-border text-info" role="status">
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
        <h1 className="display-5 fw-bold text-info">
          <i className="bi bi-lightning-charge-fill me-2"></i>Workout Suggestions
        </h1>
        <span className="badge bg-secondary fs-6">{workouts.length} Available</span>
      </div>

      <div className="row g-4">
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <div key={workout.id} className="col-md-6 col-lg-6">
              <div className="card h-100 shadow-sm border-0 hover-lift">
                <div className="card-header bg-info text-white">
                  <h5 className="card-title mb-0">
                    <i className="bi bi-fire me-2"></i>
                    {workout.name}
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted mb-3">{workout.description}</p>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                        <span className="text-muted small">
                          <i className="bi bi-tag-fill me-1"></i>Type
                        </span>
                        <span className="badge bg-info">{workout.workout_type}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                        <span className="text-muted small">
                          <i className="bi bi-clock-fill me-1"></i>Duration
                        </span>
                        <span className="badge bg-primary">{workout.duration} min</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                        <span className="text-muted small">
                          <i className="bi bi-speedometer2 me-1"></i>Difficulty
                        </span>
                        <span className="badge bg-warning text-dark">{workout.difficulty_level}</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-between align-items-center p-2 bg-light rounded">
                        <span className="text-muted small">
                          <i className="bi bi-fire me-1"></i>Calories
                        </span>
                        <span className="badge bg-danger">{workout.calories_burned}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <button className="btn btn-outline-info btn-sm w-100">
                    <i className="bi bi-play-fill me-1"></i>Start Workout
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info text-center py-5" role="alert">
              <i className="bi bi-info-circle fs-1 d-block mb-2"></i>
              <p className="mb-0">No workouts found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Workouts;
