import React from 'react';
import aboutGif from '../assets/about.gif';
import constructionGif from '../assets/construction.gif';

function AboutPage() {
  return (
    <div className="about-container">
      <div className="text-center mb-5">
        <h1 className="rainbow-text">About Me</h1>
        <h2 className="shadow-text">Get to know me!</h2>
        <img src={aboutGif} alt="About Me" className="img-fluid mb-4 pixelated-img" style={{maxWidth: '200px'}} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card card-2000s mb-4">
              <div className="card-header starry-bg">
                <h5 className="card-title text-center mb-0">All About Charles</h5>
              </div>
              <div className="card-body">
                <div className="about-content" style={{color: '#00ffff'}}>
                  <p><span style={{color: '#ffff00', fontWeight: 'bold'}}>Name:</span> Charles Dunn</p>
                  <p><span style={{color: '#ffff00', fontWeight: 'bold'}}>Age:</span> 20</p>
                  <p><span style={{color: '#ffff00', fontWeight: 'bold'}}>Location:</span> Morgantown, WV</p>
                  <p><span style={{color: '#ffff00', fontWeight: 'bold'}}>School:</span> West Virginia University (WVU)</p>
                  <p><span style={{color: '#ffff00', fontWeight: 'bold'}}>Major:</span> Electrical Engineering</p>
                  <p><span style={{color: '#ffff00', fontWeight: 'bold'}}>WVU ID:</span> 800408626</p>
                  
                  <div className="about-section mt-4 mb-4">
                    <h5 style={{color: '#ff66ff', borderBottom: '1px dashed #cc66ff', paddingBottom: '5px'}}>My Hobbies</h5>
                    <ul>
                      <li>Building and customizing computers</li>
                      <li>Playing video games (Counter-Strike, Team Fortress, Quake)</li>
                      <li>Collecting CDs and MP3s</li>
                      <li>Web design (HTML, CSS, and JavaScript)</li>
                      <li>Hanging out with friends at the mall</li>
                    </ul>
                  </div>
                  
                  <div className="about-section mt-4 mb-4">
                    <h5 style={{color: '#ff66ff', borderBottom: '1px dashed #cc66ff', paddingBottom: '5px'}}>Favorite Things</h5>
                    <p><span style={{color: '#ffff00'}}>Movies:</span> The Matrix, Star Wars, Lord of the Rings</p>
                    <p><span style={{color: '#ffff00'}}>TV Shows:</span> The Simpsons, Seinfeld, Aqua Teen Hunger Force</p>
                    <p><span style={{color: '#ffff00'}}>Books:</span> Harry Potter series, The Hobbit</p>
                    <p><span style={{color: '#ffff00'}}>Food:</span> Pizza, Tacos, Ice Cream</p>
                    <p><span style={{color: '#ffff00'}}>Websites:</span> MySpace, Napster, Newgrounds, eBay</p>
                  </div>
                  
                  <div className="about-section mt-4">
                    <h5 style={{color: '#ff66ff', borderBottom: '1px dashed #cc66ff', paddingBottom: '5px'}}>My Future Plans</h5>
                    <p>I want to travel the world and visit places like Japan (to check out all the cool tech), Australia (because it looks awesome), and Europe (for the history and stuff).</p>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <div className="construction-sign" style={{
                    border: '3px dashed #ffff00',
                    padding: '10px',
                    backgroundColor: '#000033',
                    display: 'inline-block'
                  }}>
                    <div className="blink-text" style={{color: '#ffff00', fontWeight: 'bold'}}>
                      <img src={constructionGif} alt="Under Construction" style={{height: '30px', marginRight: '10px'}} />
                      This page is still under construction!
                      <img src={constructionGif} alt="Under Construction" style={{height: '30px', marginLeft: '10px'}} />
                    </div>
                    <p style={{color: '#00ffff', marginTop: '10px', marginBottom: '0'}}>
                      Check back soon for more updates!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-2000s mb-4">
              <div className="card-header starry-bg">
                <h5 className="card-title text-center mb-0">Quick Links</h5>
              </div>
              <div className="card-body">
                <div className="sidebar-section mb-4">
                  <h6 style={{color: '#ffff00'}}>Contact Me:</h6>
                  <p style={{color: '#00ffff'}}>
                    <span role="img" aria-label="email">📧</span> Email: chuckd4sho@icloud.com
                  </p>
                  <p style={{color: '#00ffff'}}>
                    <span role="img" aria-label="aim">💬</span> AIM: Chuckd4sho
                  </p>
                  <p style={{color: '#00ffff'}}>
                    <span role="img" aria-label="icq">🌻</span> ICQ: 1234567890
                  </p>
                </div>
                
                <div className="sidebar-section mb-4">
                  <h6 style={{color: '#ffff00'}}>My Top Friends:</h6>
                  <ul style={{color: '#00ffff', paddingLeft: '20px'}}>
                    <li>Liam</li>
                    <li>Jack</li>
                    <li>Jason</li>
                    <li>Wesley</li>
                    <li>Jacob</li>
                  </ul>
                </div>
                
                <div className="sidebar-section text-center">
                  <div className="hit-counter mb-3">
                    <span>Profile Views: 1,337</span>
                  </div>
                  <button className="btn btn-primary bevel-button mb-2">
                    Add Me as a Friend!
                  </button>
                  <button className="btn btn-success bevel-button">
                    Send Me a Message!
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card card-2000s">
              <div className="card-header starry-bg">
                <h5 className="card-title text-center mb-0">My Mood Ring</h5>
              </div>
              <div className="card-body text-center">
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  margin: '0 auto 15px auto',
                  background: 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)',
                  boxShadow: '0 0 20px 5px #ff00ff',
                  animation: 'rotate 5s linear infinite'
                }}>
                </div>
                <style>
                  {`
                    @keyframes rotate {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                  `}
                </style>
                <p style={{color: '#00ffff', fontWeight: 'bold'}}>
                  Current Mood: Excited!
                </p>
                <p style={{color: '#ffff00', fontSize: '2rem'}}>
                  😃
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;