import React from 'react';

const Resources = () => {
  return (
    <section id="resources">
      <h2>Resources</h2>
      <h3>Books</h3>
      <section id="books">
        <h2>Recommended Books on Creativity</h2>
        <p>Explore these insightful books to deepen your understanding of creativity and how to harness it.</p>
        
        <div className="book">
          <img src="/images/book.jpg" alt="Creative Confidence" />
          <h3>"Creative Confidence" - Tom Kelley & David Kelley</h3>
          <p>A practical guide from the founders of IDEO on unlocking creativity in work and life.</p>
          <a href="https://www.amazon.com/Creative-Confidence-Unleashing-Potential-within/dp/0008139385" className="btn">Get the Book</a>
        </div>
        
        <div className="book">
          <img src="/images/book1.jpg" alt="The War of Art" />
          <h3>"The War of Art" - Steven Pressfield</h3>
          <p>A motivational book on overcoming creative blocks and resistance.</p>
          <a href="https://www.amazon.com/War-Art-Through-Creative-Battles/dp/1936891026" className="btn">Get the Book</a>
        </div>
        
        <div className="book">
          <img src="/images/book2.jpg" alt="Big Magic" />
          <h3>"Big Magic" - Elizabeth Gilbert</h3>
          <p>An inspiring take on embracing creativity with curiosity and fearlessness.</p>
          <a href="https://www.amazon.com/Big-Magic-Creative-Living-Beyond/dp/1594634726" className="btn">Get the Book</a>
        </div>
        
        <div className="book">
          <img src="/images/book3.jpg" alt="Steal Like an Artist" />
          <h3>"Steal Like an Artist" - Austin Kleon</h3>
          <p>Encourages creative thinkers to embrace influence, remix ideas, and forge their own path.</p>
          <a href="https://www.amazon.com/Steal-Like-Artist-Things-Creative/dp/0761169253" className="btn">Get the Book</a>
        </div>
        
        <div className="book">
          <img src="/images/book4.jpg" alt="The Creative Habit" />
          <h3>"The Creative Habit" - Twyla Tharp</h3>
          <p>A practical book on cultivating creativity as a daily practice.</p>
          <a href="https://www.amazon.com/Creative-Habit-Learn-Use-Life/dp/0743235274" className="btn">Get the Book</a>
        </div>
      </section>
      <section id="videos">
        <h3>Videos</h3>
        <div className="video-grid">
          <div className="video-wrapper">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/pfg9a9diN40" 
              title="Creative Thinking Video 1"
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="video-wrapper">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/i5F8MjVXb7o" 
              title="Creative Thinking Video 2"
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="video-wrapper">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/uTnGHknbu8U" 
              title="Creative Thinking Video 3"
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Resources;