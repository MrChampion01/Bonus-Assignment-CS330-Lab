import React, { useState } from 'react';
import galleryGif from '../assets/gallery.gif';

function GalleryPage() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      thumbnail: '..assets/computer.png',
      fullImage: './src/assets/build.jpg',
      title: 'My Computer Setup',
      description: 'Check out my awesome computer! It has a Pentium 4 (Ryzen 7) processor and 512MB (32 GB) of RAM!'
    },
    {
      id: 2,
      thumbnail: '/api/placeholder/100/100',
      fullImage: '/api/placeholder/600/400',
      title: 'Family Vacation',
      description: 'This was taken during our trip to Wildwood New Jersey last summer. Such a blast!'
    },
    {
      id: 3,
      thumbnail: '/api/placeholder/100/100',
      fullImage: '/api/placeholder/600/400',
      title: 'My New Car',
      description: 'If only...'
    },
    {
      id: 4,
      thumbnail: '/api/placeholder/100/100',
      fullImage: '/api/placeholder/600/400',
      title: 'Birthday Party',
      description: 'From my 20th birthday party. Can you believe how much cake (beer) we had?'
    },
    {
      id: 5,
      thumbnail: '/api/placeholder/100/100',
      fullImage: '/api/placeholder/600/400',
      title: 'My Dog Sparky',
      description: 'This is my dog Twyla.'
    },
    {
      id: 6,
      thumbnail: '/api/placeholder/100/100',
      fullImage: '/api/placeholder/600/400',
      title: 'Graduation Day',
      description: 'Me on my graduation day.'
    },
    {
      id: 7,
      thumbnail: '/api/placeholder/100/100',
      fullImage: '/api/placeholder/600/400',
      title: 'My Collection',
      description: 'My awesome collection of guitars. I\'ve been collecting since I was 12!'
    },
    {
      id: 8,
      thumbnail: '/api/placeholder/100/100',
      fullImage: '/api/placeholder/600/400',
      title: 'LAN Party',
      description: 'The basement LAN party at my house.'
    },
    {
      id: 9,
      thumbnail: '/api/placeholder/100/100',
      fullImage: '/api/placeholder/600/400',
      title: 'Camping Trip',
      description: 'From our camping trip last fall. The weather was perfect!'
    }
  ];

  const openImage = (image) => {
    setActiveImage(image);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setActiveImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveImage(galleryImages[prevIndex]);
  };

  return (
    <div className="gallery-container">
      <div className="text-center mb-5">
        <h1 className="rainbow-text">My Photo Gallery</h1>
        <h2 className="shadow-text">Check out my pics!</h2>
        <img src={galleryGif} alt="Gallery" className="img-fluid mb-4 pixelated-img" style={{maxWidth: '200px'}} />
      </div>

      <div className="container">
        <div className="card card-2000s mb-4">
          <div className="card-header starry-bg">
            <h5 className="card-title text-center mb-0">My Awesome Photos</h5>
          </div>
          <div className="card-body">
            <p className="text-center" style={{color: '#00ffff'}}>
              Click on any thumbnail to see the full-size image! All photos taken with my new digital camera!
            </p>
            
            <div className="row">
              {galleryImages.map((image) => (
                <div key={image.id} className="col-md-4 col-sm-6 mb-4">
                  <div 
                    className="gallery-thumbnail" 
                    onClick={() => openImage(image)}
                    style={{
                      cursor: 'pointer',
                      border: '3px solid #ff00ff',
                      padding: '5px',
                      backgroundColor: '#000033',
                      textAlign: 'center',
                      transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img 
                      src={image.thumbnail} 
                      alt={image.title} 
                      className="img-fluid pixelated-img" 
                    />
                    <div style={{color: '#00ffff', marginTop: '5px', fontSize: '0.9rem'}}>
                      {image.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeImage && (
        <div 
          className="lightbox-overlay" 
          onClick={closeImage}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div 
            className="lightbox-content card-2000s"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '80%',
              maxHeight: '90%',
              backgroundColor: '#000033',
              border: '5px outset #cc00ff',
              boxShadow: '0 0 25px 10px #ff00ff',
              padding: '20px',
              position: 'relative'
            }}
          >
            <div className="lightbox-header starry-bg" style={{padding: '10px', marginBottom: '15px'}}>
              <h4 style={{color: '#ffff00', textAlign: 'center', margin: 0}}>{activeImage.title}</h4>
            </div>
            
            <img 
              src={activeImage.fullImage} 
              alt={activeImage.title} 
              className="img-fluid pixelated-img" 
              style={{
                display: 'block',
                margin: '0 auto',
                maxHeight: '60vh',
                border: '2px solid #fff'
              }}
            />
            
            <p style={{color: '#00ffff', textAlign: 'center', margin: '15px 0', fontSize: '1.1rem'}}>
              {activeImage.description}
            </p>
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
              <button className="btn btn-primary bevel-button" onClick={prevImage}>
                Previous
              </button>
              <button className="btn btn-danger bevel-button" onClick={closeImage}>
                Close
              </button>
              <button className="btn btn-primary bevel-button" onClick={nextImage}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;