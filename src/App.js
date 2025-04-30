import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './pages/HomePage';
import GuestbookPage from './pages/GuestbookPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="early2000s-container">
        {/* Navbar moved above the headers */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand blink-text" to="/">My Awesome Website</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Me</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My Stuff
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/gallery">Photos</Link></li>
                    <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/guestbook">Guestbook</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <div className="d-flex">
                <marquee className="text-white" scrollamount="3" width="200">Welcome to my site!!!</marquee>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guestbook" element={<GuestbookPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <footer className="footer mt-5 text-center p-3">
          <p>© 2025 My Awesome Site | Best viewed in Internet Explorer 6.0</p>
          <p className="construction">
            <span>🚧</span> Under Construction <span>🚧</span>
          </p>
          <div className="webring">
            <a href="#">← Previous</a> | <a href="#">Web Ring</a> | <a href="#">Next →</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;