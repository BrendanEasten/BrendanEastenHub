import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1 className="logo">Brendan Easten's Hub 🌃</h1>

          {/* About Me Section with Image on the Left */}
          <div className="aboutMe">
            <div className="aboutContent">
            <img src="/imgs/img6.png" alt="Twitch" className="aboutImage" />
              <p className="aboutText">
                Hey there I'm BrendanEasten! Your favorite streamer, gamer, and content creator who's here to slay! 
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