import React, { useState } from 'react';
import welcomeGif from '../assets/welcome.gif';
import internetGif from '../assets/internet.gif';
import computerGif from '../assets/computer.gif';
import emailGif from '../assets/email.gif';
import faceGif from '../assets/face.gif';
import balloonsGif from '../assets/balloons.gif';

function HomePage() {
  const [openCards, setOpenCards] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false
  });

  const toggleCard = (cardId) => {
    setOpenCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const cardData = [
    {
      id: 'card1',
      title: 'Welcome to My Site',
      shortText: 'Click to see more about my awesome website!',
      fullText: 'This website was made with HTML and JavaScript! It\'s totally radical and represents the coolest web design of the early 2000s era!',
      imageUrl: welcomeGif,
      buttonText: 'Enter Site'
    },
    {
      id: 'card2',
      title: 'My Favorite Links',
      shortText: 'Check out my favorite websites and bookmarks!',
      fullText: 'These are some of my favorite sites: GeoCities, Myspace, Napster, Limewire, and AIM. That new Newgrounds site is dope isnt it?',
      imageUrl: internetGif,
      buttonText: 'View Links'
    },
    {
      id: 'card3',
      title: 'My Photo Gallery',
      shortText: 'See my awesome collection of photos!',
      fullText: 'Welcome to my photo gallery! These pictures were taken with my new digital camera (my iphone XR) that has 3 megapixels! Amazing quality!',
      imageUrl: computerGif,
      buttonText: 'View Photos'
    },
    {
      id: 'card4',
      title: 'Guestbook',
      shortText: 'Sign my guestbook and leave a message!',
      fullText: 'Thanks for visiting my website! Please sign my guestbook before you leave. Tell me what you think of my shitty gifs and design!',
      imageUrl: emailGif,
      buttonText: 'Sign Now'
    },
    {
      id: 'card5',
      title: 'My Blog',
      shortText: 'Read my thoughts and daily updates!',
      fullText: 'Welcome to my blog! Unfortunately a good bit of ai was used to make up some fake blog posts cause Im lazy.',
      imageUrl: faceGif,
      buttonText: 'Read Blog'
    },
    {
      id: 'card6',
      title: 'Downloads',
      shortText: 'Free wallpapers and midi files!',
      fullText: 'Check out my collection of free wallpapers and midi music files! Just right-click and select "Save As" to download them to your computer! (ITS A WORK IN PROGRESS!!!)',
      imageUrl: balloonsGif,
      buttonText: 'Get Files'
    }
  ];

  return (
    <>
      <div className="App text-center mb-5">
        <h1 className="rainbow-text">CS 330L</h1>
        <h2 className="shadow-text">Section 011</h2>
        <p className="animated-text">WVU ID: 800408626</p>
        <p style={{color: '#FFFFFF', fontWeight: 'bold'}}>Hi I am Charles Dunn</p>
        <div className="hit-counter mb-4">
          <span>Visitors: 000738</span>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {cardData.map((card) => (
            <div className="col-md-4 mb-4" key={card.id}>
              <div className={`card card-2000s ${openCards[card.id] ? 'expanded' : ''}`}>
                <div className="card-header starry-bg">
                  <h5 className="card-title text-center mb-0">{card.title}</h5>
                </div>
                <div className="card-body">
                  {!openCards[card.id] ? (
                    <p className="card-text">{card.shortText}</p>
                  ) : (
                    <>
                      <img src={card.imageUrl} alt={card.title} className="img-fluid mb-3 pixelated-img" />
                      <p className="card-text">{card.fullText}</p>
                    </>
                  )}
                  <div className="text-center">
                    <button 
                      className="btn btn-primary bevel-button" 
                      onClick={() => toggleCard(card.id)}
                    >
                      {openCards[card.id] ? 'Close' : card.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;