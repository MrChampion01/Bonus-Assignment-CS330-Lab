import React, { useState } from 'react';
import blogGif from '../assets/blog.gif';

function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "My First Blog Post!",
      date: "04/28/2025",
      summary: "Welcome to my awesome blog!",
      content: `
        <p>Hey everyone! Welcome to my brand new blog! I'm so excited to start sharing my thoughts with the world wide web!</p>
        
        <p>I just learned how to create this awesome website using HTML and something called "CSS". It's pretty complicated but I think I'm getting the hang of it. Did you notice the awesome animated GIFs? I spent hours picking out the perfect ones!</p>

        <p>I also added a hit counter to track how many people visit my site. I hope I get at least 1,000 visitors by the end of the month!</p>

        <p>What do you think of my site so far? Make sure to sign my guestbook and let me know!</p>

        <p>TTYL!</p>
      `,
      mood: "excited",
      tags: ["welcome", "website", "first post"],
      views: 127
    },
    {
      id: 2,
      title: "Check Out My New Computer!",
      date: "04/25/2025",
      summary: "Just got a brand new computer and it's super fast!",
      content: `
        <p>OMG you guys, I just got the most amazing new computer! It has a Pentium 4 processor running at 2.4 GHz and a whole 1 GB of RAM! Can you believe it?</p>
        
        <p>The hard drive is 80 GB which means I can store like a million MP3s! And the graphics card can run all the latest games like The Sims and Counter-Strike at full settings!</p>

        <p>I also got a flat screen monitor that's 17 inches. It's so much better than my old CRT monitor and takes up way less space on my desk. Plus the colors are way more vibrant!</p>

        <p>I'm going to post some photos in my gallery soon so you can all see it. It cost me my entire summer savings but it was totally worth it!</p>

        <p>Gotta go, I'm downloading some cool new desktop backgrounds right now!</p>
      `,
      mood: "stoked",
      tags: ["computer", "technology", "Pentium"],
      views: 89
    },
    {
      id: 3,
      title: "My Favorite Music Right Now",
      date: "04/20/2025",
      summary: "Here's what I've been listening to lately!",
      content: `
        <p>Hey everyone! Today I want to talk about my favorite music. I've been downloading tons of songs from Napster lately and my playlist is getting huge!</p>
        
        <p>Here are my top 5 songs right now:</p>
        <ol>
          <li>Britney Spears - "Oops!...I Did It Again"</li>
          <li>Backstreet Boys - "I Want It That Way"</li>
          <li>Eminem - "The Real Slim Shady"</li>
          <li>Destiny's Child - "Say My Name"</li>
          <li>Eiffel 65 - "Blue (Da Ba Dee)"</li>
        </ol>

        <p>I'm also really into NSYNC and Christina Aguilera right now. I spent my allowance on their new CDs last week and I've been playing them non-stop!</p>

        <p>What are you listening to? Leave a comment in my guestbook!</p>

        <p>TTFN!</p>
      `,
      mood: "groovy",
      tags: ["music", "Napster", "playlists"],
      views: 156
    },
    {
      id: 4,
      title: "School's Almost Out!",
      date: "04/15/2025",
      summary: "Can't wait for summer vacation!",
      content: `
        <p>Only 3 more weeks until summer vacation! I can't wait to be done with homework and tests for a few months!</p>
        
        <p>I have so many plans for the summer. First, I'm going to sleep in every day until at least noon. Then I'll probably play video games or hang out at the mall with my friends.</p>

        <p>My family is also planning a trip to Disney World in July! I've never been there before and I'm super excited. I especially want to go on Space Mountain and meet Mickey Mouse!</p>

        <p>But before all that fun can start, I have to pass all my finals. I'm most worried about math class because algebra is really hard. Wish me luck!</p>

        <p>What are your summer plans? Are you as excited as I am?</p>
      `,
      mood: "anxious",
      tags: ["school", "summer", "vacation"],
      views: 72
    }
  ];

  const viewBlogPost = (post) => {
    setSelectedPost(post);
     const updatedPosts = blogPosts.map(p => 
      p.id === post.id ? {...p, views: p.views + 1} : p
    );
  };

  const closeBlogPost = () => {
    setSelectedPost(null);
  };

  const renderMoodIcon = (mood) => {
    switch(mood) {
      case 'excited':
        return '😃';
      case 'stoked':
        return '🤩';
      case 'groovy':
        return '😎';
      case 'anxious':
        return '😬';
      default:
        return '😊';
    }
  };

  return (
    <div className="blog-container">
      <div className="text-center mb-5">
        <h1 className="rainbow-text">My Online Journal</h1>
        <h2 className="shadow-text">Read My Thoughts!</h2>
        <img src={blogGif} alt="Blog" className="img-fluid mb-4 pixelated-img" style={{maxWidth: '200px'}} />
      </div>

      <div className="container">
        {!selectedPost ? (
          <div className="card card-2000s mb-4">
            <div className="card-header starry-bg">
              <h5 className="card-title text-center mb-0">Latest Blog Posts</h5>
            </div>
            <div className="card-body">
              <p className="text-center" style={{color: '#00ffff'}}>
                Welcome to my blog! I update this whenever something cool happens in my life!
              </p>
              
              <div className="blog-posts-list">
                {blogPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="blog-post-item mb-4" 
                    style={{
                      border: '2px solid #cc66ff',
                      padding: '15px', 
                      borderRadius: '5px',
                      backgroundColor: '#000044',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onClick={() => viewBlogPost(post)}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      borderBottom: '1px dashed #cc66ff',
                      paddingBottom: '5px',
                      marginBottom: '10px'
                    }}>
                      <h4 style={{color: '#ffff00', margin: 0}}>
                        {post.title} <span style={{fontSize: '1.2rem'}}>{renderMoodIcon(post.mood)}</span>
                      </h4>
                      <div style={{color: '#ff66ff', fontSize: '0.8rem'}}>
                        {post.date}
                      </div>
                    </div>
                    <p style={{color: '#00ffff'}}>{post.summary}</p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      marginTop: '10px'
                    }}>
                      <div style={{color: '#00ff00'}}>
                        Tags: {post.tags.map((tag, i) => (
                          <span key={i} style={{
                            backgroundColor: '#330066',
                            padding: '2px 5px',
                            borderRadius: '3px',
                            margin: '0 3px'
                          }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div style={{color: '#ff9900'}}>
                        <span role="img" aria-label="views">👁️</span> {post.views} views
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-4">
                <button className="btn btn-primary bevel-button">
                  Older Posts
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="card card-2000s mb-4">
            <div className="card-header starry-bg">
              <h5 className="card-title text-center mb-0">
                {selectedPost.title} <span>{renderMoodIcon(selectedPost.mood)}</span>
              </h5>
            </div>
            <div className="card-body">
              <div className="blog-post-metadata" style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#ff66ff',
                fontSize: '0.9rem',
                borderBottom: '1px dashed #cc66ff',
                paddingBottom: '10px',
                marginBottom: '15px'
              }}>
                <div>Posted on: {selectedPost.date}</div>
                <div>
                  <span role="img" aria-label="views">👁️</span> {selectedPost.views} views
                </div>
              </div>
              
              <div 
                className="blog-post-content"
                style={{color: '#00ffff'}}
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              <div className="blog-post-tags" style={{
                marginTop: '20px',
                color: '#00ff00'
              }}>
                Tags: {selectedPost.tags.map((tag, i) => (
                  <span key={i} style={{
                    backgroundColor: '#330066',
                    padding: '3px 7px',
                    borderRadius: '3px',
                    margin: '0 3px'
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="blog-post-actions text-center mt-4">
                <button 
                  className="btn btn-primary bevel-button"
                  onClick={closeBlogPost}
                >
                  Back to Blog List
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="card card-2000s mb-4">
          <div className="card-header starry-bg">
            <h5 className="card-title text-center mb-0">Blog Stats</h5>
          </div>
          <div className="card-body">
            <div className="hit-counter mb-3">
              <span>Total Posts: {blogPosts.length}</span>
            </div>
            <div className="hit-counter mb-3">
              <span>Total Views: 444</span>
            </div>
            <div className="hit-counter mb-3">
              <span>Comments: 27</span>
            </div>
            
            <h6 style={{color: '#ffff00', marginTop: '20px'}}>Popular Tags:</h6>
            <div style={{color: '#00ff00'}}>
              {['music', 'school', 'computer', 'vacation', 'website'].map((tag, i) => (
                <span key={i} style={{
                  backgroundColor: '#330066',
                  padding: '3px 7px',
                  borderRadius: '3px',
                  margin: '3px',
                  display: 'inline-block'
                }}>
                  #{tag}
                </span>
              ))}
            </div>
            
            <h6 style={{color: '#ffff00', marginTop: '20px'}}>Blog Roll:</h6>
            <ul style={{color: '#00ffff'}}>
              <li><a href="#" style={{color: '#00ffff'}}>CoolDude2000's Blog</a></li>
              <li><a href="#" style={{color: '#00ffff'}}>MySpace Thoughts</a></li>
              <li><a href="#" style={{color: '#00ffff'}}>GeoCities Community</a></li>
              <li><a href="#" style={{color: '#00ffff'}}>Web Design Tips</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;