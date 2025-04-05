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
              <img src="/imgs/spotifylogo2.webp" alt="Instagram" className="icon" />
            </a>
          </div>
<div className="aboutMe">
  </div>
      {/* Embed Twitch & YouTube */}
      <h1 className="live">twitch.tv/brendaneasten</h1>

      <div className={`${styles.videos} ${styles.glowWrapper}`}>
  <iframe
    src="https://player.twitch.tv/?channel=brendaneasten&parent=localhost"
    height="500"
    width="900"
    allowFullScreen
    className={styles.embed}
  ></iframe>

  <iframe
    src="https://www.twitch.tv/embed/brendaneasten/chat?parent=localhost"
    height="500"
    width="350"
    className={styles.embed}
  ></iframe>
</div>
  
    </main>
  );
}