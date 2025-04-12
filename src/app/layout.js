import "./globals.css";
import ScrollFadeIn from "./components/ScrollFadeIn";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1 className="logo">Brendan Easten's Hub</h1>

          <nav className="navbar">
            <ul className="navList">
              <li className="navItem"><a href="http://localhost:3000/">Home</a></li>
              <li className="navItem"><a href="/blogs">Blogs</a></li>
              <li className="navItem"><a href="/shop">Shop</a></li>
              <li className="navItem"><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} BrendanEasten. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}