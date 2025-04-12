import styles from "./page.module.css";
import ScrollFadeIn from "./components/ScrollFadeIn";
import Link from 'next/link';



export default function HomePage() {
  const posts = [
    { id: '1', title: 'My 1 year Journey With Computer Programing 👨‍💻' },
    { id: '2', title: 'Why I’ve Always Been Curious About Psychedelics 🍄' },
  ];
  return (
    <main className={styles.container}>
      <ScrollFadeIn>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <div className="aboutMe">
          <div className="aboutContent">
            <img src="/imgs/img6.png" alt="Twitch" className="aboutImage" />
            <p className="aboutText">
              Hey there I'm BrendanEasten, I'm 24 years old and from Toronto! Your favorite streamer, gaymer, and content creator who's here to slay!
              I'm all about serving up that positive, fun energy and connecting with amazing people who vibe with me!!
              Catch me on Twitch living my best life, and check out my other platforms! I'm out here sharing my experiences and spreading that fabulous energy all over the place.
              Get ready for the ride! 💋
            </p>
          </div>
        </div>
      </ScrollFadeIn>
      <br></br>
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
          <a href="https://x.com/BrendanEasten" target="_blank" title="Twitter">
            <img src="/imgs/XTransparentLogo.webp" alt="X" className="icon" />
          </a>
          <a href="https://www.instagram.com/brendaneasten/" target="_blank" title="Instagram">
            <img src="/imgs/InstagramTransparentLogo.webp" alt="Instagram" className="icon" />
          </a>
          <a href="https://www.tiktok.com/@brendaneasten111" target="_blank" title="TikTok">
            <img src="/imgs/tiktokicon.webp" alt="TikTok" className="icon" />
          </a>
          <a href="https://discord.com/invite/yourdiscord" target="_blank" title="Discord">
            <img src="/imgs/discord.webp" alt="Discord" className="icon" />
          </a>
          <a href="https://open.spotify.com/user/3bbsp8tigzis5nw35uxd1ms8t?si=f6ef70f269cd4bd8" target="_blank" title="Spotify">
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
            src="https://player.twitch.tv/?video=1935174816&parent=localhost"
            height="600"
            width="1000"
            allowFullScreen
            className={styles.embed}
          ></iframe>

        </div>
      </ScrollFadeIn>
      <div id="about"></div>
      {/* Content Boxes */}
      <ScrollFadeIn delay={0.8} glitch={true}>
        <h1 className="content"></h1>
        <div className="contentBoxes">
          {/* YouTube Embed */}
          <div className="contentBox youtubeBox">
            <h2 className="youtube">Click For More Videos @BrendaEasten265</h2>
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
          <div className="contentBox spotifyBox">
  <a
    href="https://open.spotify.com/playlist/0LRPMHQQDZtjhYCXKhbO7h?utm_source=generator"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p className="spotify">Click To Listen To My Playlist @BrendanEasten</p>
    <iframe
      style={{
        borderRadius: '12px',
        width: '100%',
        height: '352px',
        border: 'none',
      }}
      src="https://open.spotify.com/embed/playlist/0LRPMHQQDZtjhYCXKhbO7h?utm_source=generator"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </a>
</div>

          {/* Instagram Embed */}
          <div className="contentBox instagramBox">
            <a href="https://www.instagram.com/brendaneasten" target="_blank" rel="noopener noreferrer">
              <p className="instagram">Click To View Insta Posts @BrendanEasten</p>
              <img
                src="/imgs/instafeed1.png" // Replace with an actual local image or a public URL
                alt="Brendan Easten Instagram Preview"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </a>
          </div>
        </div>

        {/* Spotify Embed */}


      </ScrollFadeIn>

      {/* Community Section */}
      <ScrollFadeIn delay={1.0} glitch={false}>
        <div>
          <h1 className="community">My Community</h1>
          <p className="thankyou">
            Huge love to my amazing community your support means the world to me! 💖 Whether you’ve subbed, donated, followed or simply cheered me on  you’ve helped really validate my feelings!
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
        <div id="community">
          <h2 className="donators">Donators (07)</h2>
          <p className="donator">
            HotMay69: $100 | Monstuh: $60.00 | NoahW: $10.00 | Fizzelo: $5.00 | madebyalexs: $4.20 | vLiquid: $3.00 | 4chan: $1.00
          </p>
        </div>
      </ScrollFadeIn>

    </main>
  );
}