import styles from "./page.module.css";
import ScrollFadeIn from "./components/ScrollFadeIn";


export default function Home() {
  return (
    <main className={styles.container}>

      {/* Socials Section */}
      <ScrollFadeIn delay={0.2} glitch={true}>
        <div className="socials">
          {/* Social Media Links */}
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
      </ScrollFadeIn>

      {/* About Me */}
      <ScrollFadeIn delay={0.4} glitch={false}>
        <div className="aboutMe">
          <h1 className="live">twitch.tv/brendaneasten</h1>
        </div>
      </ScrollFadeIn>

      {/* Embed Twitch & YouTube */}
      <ScrollFadeIn delay={0.6} glitch={true}>
        <div className={`${styles.videos} ${styles.glowWrapper}`}>
          <iframe
            src="https://player.twitch.tv/?channel=brendaneasten&parent=localhost"
            height="500"
            width="700"
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
      </ScrollFadeIn>

      {/* Content Boxes */}
      <ScrollFadeIn delay={0.8} glitch={true}>
      <h1 className="content" id="community">My Content</h1>
        <div className="contentBoxes">
          {/* YouTube Embed */}
          <div className="contentBox youtubeBox">
            <h2>YouTube Videos</h2>
            <iframe
              width="350"
              height="500"
              src="https://www.youtube.com/embed/DNZBb9fAAek?autoplay=1&mute=1&playsinline=1"
              title="YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Twitter Embed */}
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
              width="350"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              allow="encrypted-media"
              title="Instagram Post"
            />
          </div>
        </div>
      </ScrollFadeIn>

      {/* Community Section */}
      <ScrollFadeIn delay={1.0} glitch={false}>
        <div>
          <h1 className="blog" id="community">My Community</h1>
          <p className="thankyou">
Huge love to my amazing community your support means the world to me! 💖 Whether you’ve subbed, donated, followed or simply cheered me on  you’ve helped really validated my feelings! 
Special shoutout to Twitch Subscribers & Donators, every single dollar helps me out! Thank you for being part of this journey. Let’s keep growing together!💫
</p>
        </div>
      </ScrollFadeIn>

      {/* Subscriptions & Donators */}
      <ScrollFadeIn delay={1.2} glitch={true}>
        <div>
          <h2 className="subs">Twitch Subscribers (01)</h2>
          <p className="subscriber">DABEES 2025/04/05 </p>
        </div>
        <div>
          <h2 className="donators">Donators (07)</h2>
          <p className="donator">
            HotMay69: $100 | Monstuh: $60.00 | NoahW: $10.00 | Fizzelo: $5.00 | madebyalexs: $4.20 | vLiquid: $3.00 | 4chan: $1.00
          </p>
        </div>
      </ScrollFadeIn>

    </main>
  );
}