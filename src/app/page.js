import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>

{/* About me */}
<div className="socials">
            <a href="https://www.twitch.tv/brendaneasten" target="_blank">
              <img src="/imgs/TwitchTransparentLogo.webp" alt="Twitch" className="icon" />
            </a>
            <a href="https://www.youtube.com/@brendaneasten265" target="_blank">
              <img src="/imgs/YoutubeLogo.png" alt="Youtube" className="icon" />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank">
              <img src="/imgs/XTransparentLogo.webp" alt="X" className="icon" />
            </a>
            <a href="https://instagram.com/yourinsta" target="_blank">
              <img src="/imgs/InstagramTransparentLogo.webp" alt="Instagram" className="icon" />
            </a>
            <a href="https://instagram.com/yourinsta" target="_blank">
              <img src="/imgs/tiktoktransparent.webp" alt="Instagram" className="icon" />
            </a>
            <a href="https://instagram.com/yourinsta" target="_blank">
              <img src="/imgs/discord.webp" alt="Instagram" className="icon" />
            </a>
            <a href="https://instagram.com/yourinsta" target="_blank">
              <img src="/imgs/spotify.png" alt="Instagram" className="icon" />
            </a>
          </div>
<div className="aboutMe">
  </div>
      {/* Embed Twitch & YouTube */}
      <h1 className="live">Come Chat With Me Live On Twitch!</h1>

      <div className={styles.videos}>
        <iframe
        src="https://player.twitch.tv/?video=v1935174816&parent=localhost"
          height="500"
          width="900"
          allowFullScreen
          className={styles.glow}
        ></iframe>
      </div>

  
    </main>
  );
}