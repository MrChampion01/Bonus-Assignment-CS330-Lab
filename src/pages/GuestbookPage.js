import React, { useState } from 'react';
import guestbookGif from '../assets/guestbook.gif';

function GuestbookPage() {
  const [comments, setComments] = useState([
    {
      name: 'CoolDude2000',
      email: 'cooldude@hotmail.com',
      message: 'Awesome site! Love the GIFs!',
      date: '04/28/2025'
    },
    {
      name: 'THe Ghoul',
      email: 'damnedsoul69@geocities.com',
      message: 'Im trapped here HELP!',
      date: '04/27/2025'
    },
    {
      name: 'Billy',
      email: 'explorer@msn.com',
      message: 'Where are the games?',
      date: '04/26/2025'
    }
  ]);

  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    message: '',
    date: new Date().toLocaleDateString()
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.message) {
      setComments([newComment, ...comments]);
      setNewComment({
        name: '',
        email: '',
        message: '',
        date: new Date().toLocaleDateString()
      });
      alert('Thanks for signing my guestbook!');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="guestbook-container">
      <div className="text-center mb-5">
        <h1 className="rainbow-text">My Guestbook</h1>
        <h2 className="shadow-text">Leave your mark!</h2>
        <img src={guestbookGif} alt="Guestbook" className="img-fluid mb-4 pixelated-img" style={{maxWidth: '200px'}} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-2000s mb-4">
              <div className="card-header starry-bg">
                <h5 className="card-title text-center mb-0">Sign My Guestbook</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={newComment.name}
                      onChange={handleInputChange}
                      style={{backgroundColor: '#000033', color: '#00ffff', border: '2px inset #cc66ff'}}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={newComment.email}
                      onChange={handleInputChange}
                      style={{backgroundColor: '#000033', color: '#00ffff', border: '2px inset #cc66ff'}}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message:</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={newComment.message}
                      onChange={handleInputChange}
                      style={{backgroundColor: '#000033', color: '#00ffff', border: '2px inset #cc66ff'}}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary bevel-button">Sign Guestbook</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-2000s">
              <div className="card-header starry-bg">
                <h5 className="card-title text-center mb-0">Recent Visitors</h5>
              </div>
              <div className="card-body">
                <div className="visitor-comments" style={{maxHeight: '400px', overflowY: 'auto'}}>
                  {comments.map((comment, index) => (
                    <div key={index} className="comment-box mb-3" style={{border: '1px solid #cc66ff', padding: '10px', borderRadius: '5px'}}>
                      <div className="comment-header" style={{borderBottom: '1px dashed #cc66ff', marginBottom: '5px', paddingBottom: '5px'}}>
                        <strong style={{color: '#ffff00'}}>{comment.name}</strong> 
                        <span style={{color: '#00ff00', fontSize: '0.8rem'}}> ({comment.email})</span>
                        <div style={{color: '#ff66ff', fontSize: '0.8rem', fontStyle: 'italic'}}>Posted on: {comment.date}</div>
                      </div>
                      <div className="comment-body" style={{color: '#00ffff'}}>
                        {comment.message}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="visitor-counter text-center mt-3">
                  <div className="hit-counter">
                    <span>Total Signatures: {comments.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestbookPage;