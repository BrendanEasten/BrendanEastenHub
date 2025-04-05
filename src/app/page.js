import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>

{/* About me */}

<div className="socials">
  <a href="https://www.twitch.tv/brendaneasten" target="_blank" title="Twitch">
    <img src="/imgs/TwitchTransparentLogo.webp" alt="Twitch" className="icon" />
  </a>
  <a href="https://www.youtube.com/@brendaneasten265" target="_blank" title="YouTube">
    <img src="/imgs/YoutubeLogo.png" alt="YouTube" className="icon" />
  </a>
  <a href="https://twitter.com/yourhandle" target="_blank" title="Twitter">
    <img src="/imgs/XTransparentLogo.webp" alt="X" className="icon" />
  </a>
  <a href="https://instagram.com/yourinsta" target="_blank" title="Instagram">
    <img src="/imgs/InstagramTransparentLogo.webp" alt="Instagram" className="icon" />
  </a>
  <a href="https://www.tiktok.com/@yourhandle" target="_blank" title="TikTok">
    <img src="/imgs/tiktokicon.webp" alt="TikTok" className="icon" />
  </a>
  <a href="https://discord.com/invite/yourdiscord" target="_blank" title="Discord">
    <img src="/imgs/discord.webp" alt="Discord" className="icon" />
  </a>
  <a href="https://spotify.com/yourprofile" target="_blank" title="Spotify">
    <img src="/imgs/spotifylogo2.webp" alt="Spotify" className="icon" />
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
<div>
  <h1 className="content">My Content</h1>

  {/* Social Media Content Boxes */}
  <div className="contentBoxes">
    {/* YouTube Embed */}
    <div className="contentBox youtubeBox">
      <h2>YouTube Videos</h2>
      <iframe
        width="350"
        height="500"
        src="https://www.youtube.com/embed?listType=user_uploads&list=brendaneasten265"
        title="YouTube"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* X (Twitter) Embed */}
    <div className="contentBox twitterBox">
      <h2>Recent Tweets</h2>
      <a
        className="twitter-timeline"
        href="https://x.com/BrendanEasten"
        data-width="350"
        data-height="500"
        data-theme="dark"
      >
        Tweets by BrendanEasten
      </a>
    </div>

    {/* Instagram Embed */}
    <div className="contentBox instagramBox">
      <h2>Instagram Posts</h2>
      <iframe
        src="https://www.instagram.com/p/CL5JGzwDN7o/embed"
        height="500"
        width="350"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  </div>
</div>
    </main>
  );
}