import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1 className="logo">Brendan Easten's Hub</h1>

          <nav className="navbar">
            <ul className="navList">
            <li className="navItem"><a href="#page.js">Home</a></li>
              <li className="navItem"><a href="#about">My Content</a></li>
              <li className="navItem"><a href="#community">Community</a></li>
              <li className="navItem"><a href="#blogs">Blogs</a></li>
              <li className="navItem"><a href="#shop">Shop</a></li>
              <li className="navItem"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          {/* About Me Section with Image on the Left */}
          <div className="aboutMe">
            <div className="aboutContent">
            <img src="/imgs/img6.png" alt="Twitch" className="aboutImage" />
              <p className="aboutText">
                Hey there I'm BrendanEasten,  I'm 24 years old and from Toronto! Your favorite streamer, gaymer, and content creator who's here to slay! 
                I'm all about serving up that positive, fun energy and connecting with amazing people who vibe with me!!
                Catch me on Twitch living my best life, and checkout my other platforms! I'm out here sharing my experiences and spreading that fabulous energy all over the place. 
                Get ready for the ride! 💋
              </p>
            </div>
          </div>
          
        </header>
        

        {children}

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} BrendanEasten. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}