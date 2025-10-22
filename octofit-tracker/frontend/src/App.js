import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Workouts from './components/Workouts';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-gradient shadow-sm" style={{ backgroundColor: '#2c3e50' }}>
          <div className="container-fluid px-4">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <i className="bi bi-activity fs-3 me-2 text-warning"></i>
              <strong className="fs-4">OctoFit Tracker</strong>
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/users">
                    <i className="bi bi-people-fill me-1"></i>Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/teams">
                    <i className="bi bi-people me-1"></i>Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/activities">
                    <i className="bi bi-activity me-1"></i>Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/workouts">
                    <i className="bi bi-lightning-charge-fill me-1"></i>Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/leaderboard">
                    <i className="bi bi-trophy-fill me-1"></i>Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-vh-100">
          <Routes>
            <Route path="/" element={
              <div className="container mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                      <div className="card-header bg-gradient text-white text-center py-5" style={{ backgroundColor: '#2c3e50' }}>
                        <i className="bi bi-activity display-1 mb-3 d-block text-warning"></i>
                        <h1 className="display-3 fw-bold mb-3">Welcome to OctoFit Tracker</h1>
                        <p className="lead fs-4">Track your fitness activities, join teams, and compete on the leaderboard!</p>
                      </div>
                      <div className="card-body p-5">
                        <div className="row g-4 text-center">
                          <div className="col-md-6 col-lg-3">
                            <Link to="/users" className="text-decoration-none">
                              <div className="feature-card p-4 rounded-3 h-100 border hover-lift">
                                <i className="bi bi-people-fill text-primary fs-1 mb-3 d-block"></i>
                                <h5 className="fw-bold">Users</h5>
                                <p className="text-muted small mb-0">View all registered users</p>
                              </div>
                            </Link>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <Link to="/teams" className="text-decoration-none">
                              <div className="feature-card p-4 rounded-3 h-100 border hover-lift">
                                <i className="bi bi-people text-success fs-1 mb-3 d-block"></i>
                                <h5 className="fw-bold">Teams</h5>
                                <p className="text-muted small mb-0">Explore fitness teams</p>
                              </div>
                            </Link>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <Link to="/activities" className="text-decoration-none">
                              <div className="feature-card p-4 rounded-3 h-100 border hover-lift">
                                <i className="bi bi-activity text-warning fs-1 mb-3 d-block"></i>
                                <h5 className="fw-bold">Activities</h5>
                                <p className="text-muted small mb-0">Track your workouts</p>
                              </div>
                            </Link>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <Link to="/leaderboard" className="text-decoration-none">
                              <div className="feature-card p-4 rounded-3 h-100 border hover-lift">
                                <i className="bi bi-trophy-fill text-danger fs-1 mb-3 d-block"></i>
                                <h5 className="fw-bold">Leaderboard</h5>
                                <p className="text-muted small mb-0">See top performers</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <hr className="my-5" />
                        <div className="text-center">
                          <Link to="/workouts" className="btn btn-lg btn-primary px-5 py-3 rounded-pill shadow">
                            <i className="bi bi-lightning-charge-fill me-2"></i>
                            Explore Workout Suggestions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <div className="container">
            <p className="mb-0">
              <i className="bi bi-heart-fill text-danger me-2"></i>
              OctoFit Tracker © 2025 - Stay Fit, Stay Active!
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
