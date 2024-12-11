import React from 'react';

import metaLogo from '../assetsDao/logo_meta.webp';

import saleLogo from '../assetsDao/logo.svg';

import heroInfoImage from '../assetsDao/hero_info.webp';
import heroInfo1Image from '../assetsDao/hero_info1.webp';
import heroInfo2Image from '../assetsDao/hero_info2.webp';
import heroInfo3Image from '../assetsDao/hero_info3.webp';
import heroInfo4Image from '../assetsDao/hero_info4.webp';
import heroInfo5Image from '../assetsDao/hero_info5.webp';
import heroInfo6Image from '../assetsDao/hero_info6.webp';

import MainConnect from '../web3/MainConnect';
import { useInfoContext } from '../hook/ContextHook';

export const Dao:React.FC = () => {
    const {selectedCoin} = useInfoContext();

  return (
    <div>
   
    <header>
      <div className="header-content">
        <div className="logo">
          <img src={saleLogo} alt="DAO Maker Logo" />
        </div>

        <div><w3m-button size="md" /></div>
      </div>
    </header>

    <section className="hero-section">
      <div className="live-badge">LIVE</div>
      <div className="hero-overlay">
        <div className="hero-content">
          <img src={metaLogo} alt="MetaVirus Logo" className="hero-logo" />
          <h1>MetaVirus</h1>
          <div className="social-icons">
            <a href="/" target="_self" className="icon">
              <i className="fas fa-home"></i>
            </a>
            <a href="https://twitter.com" target="_blank" className="icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://telegram.org" target="_blank" className="icon">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://discord.com" target="_blank" className="icon">
              <i className="fab fa-discord"></i>
            </a>
            <a href="https://medium.com" target="_blank" className="icon">
              <i className="fab fa-medium"></i>
            </a>
          </div>
          <p>
            MetaVirus is an innovative Web3 game that combines blockchain technology with immersive gameplay,
            offering a decentralized, freely traded mobile pet game.
          </p>
        </div>
      </div>
    </section>

    <section className="project-details">
      <h2>Project Details</h2>
      <div className="separator">
        <div className="blue-line"></div>
        <div className="gray-line"></div>
      </div>
    </section>

  

   
    <MainConnect></MainConnect>
    
    <section className="section-wrapper">
      {/* Left Column */}
      <div className="left-column">
        {/* First Card */}
        <div className="card public-round-card">
          <h3>Public Round</h3>
          <p>Registrations are opened to anyone with more than $500 worth of tokens in their wallet.</p>
          <p className="status">Sale Open</p>
        </div>

        <div className="card second-round-card">
          <h3>Public Round</h3>
          <p>Registrations are opened to anyone with more than $500 worth of tokens in their wallet.</p>
          <p className="status">Sale Open</p>
        </div>
        <div className="card strong-hold-card">
          <h3>Strong Hold Offer</h3>
          <p>Premium round offerings for DAO holders only. Higher winning chances with lower fees.</p>
          <p>Registration ends in:</p>
          <p id="strong-hold-timer">Loading...</p>
          <button className="participate-button">Participate</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* Existing content */}
        <img src={heroInfoImage} alt="MetaVirus Banner" className="content-image" />
        <h2 className="section-title">What is MetaVirus (MVT)?</h2>
        <p className="section-paragraph">
          MetaVirus is an innovative Web3 game that combines blockchain technology with immersive gameplay,
          offering a decentralized, freely traded mobile pet game. Our team has over 17 years of experience in
          game development and operations, and 6 years in the blockchain field.
        </p>
        <p className="section-paragraph">
          MetaVirus is an auto-battle pet RPG with a cute Q-version style, faction battles, union wars, and an
          infinite growth system. The game integrates Free to Play (F2P) and Play to Earn (P2E) models, allowing
          players to earn real value through in-game activities and asset trading.
        </p>

        {/* Game Basics Section */}
        <div className="content-section">
          <img src={heroInfo1Image} alt="Game Basics" className="content-image" />
          <p className="section-paragraph">
            MetaVirus launched Pre-charge in Web3 gaming platform NexGami in June 15, 2024, as its first
            Launchpad Pre-charge product successfully raised $10 million within six hours. This Pre-charge
            adopted an innovative "recharge is fundraising" model, where all users participating in the
            fundraising received two types of project tokens.
          </p>
          <p className="section-paragraph">
            The circulating token, NEXU, will be 100% refunded after the event and can be used for purchasing
            all game products on the NexGami platform in the future. The governance token of the MetaVirus
            project, MTV, will be unlocked linearly over one year and is planned to be listed on exchanges
            within three months after the Pre-charge.
          </p>
          <p className="section-paragraph">
            MetaVirus made beta test in December 2023, attracting over 350,000 user registrations, with 71,308
            participants in the XP event, minting Genesis pet NFTs.
          </p>
        </div>

        {/* What makes MetaVirus (MVT) unique? */}
        <div className="content-section">
          <h2 className="section-title">What makes MetaVirus (MVT) unique?</h2>
          <p className="section-paragraph">
            Our game is similar to traditional games like Pokémon, but it incorporates blockchain technology and
            token economics. The strength of our project lies in its community-based foundation, where we make
            players the core participants in the development and operation of the game. This approach allows us
            to attract a larger and more enduring player base.
          </p>
          <img src={heroInfo2Image} alt="Game Basics" className="content-image" />
        </div>

        {/* Who is MetaVirus (MVT) team? */}
        <div className="content-section">
          <h2 className="section-title">Who is MetaVirus (MVT) team?</h2>
          <ul className="team-list">
            <li>
              <a href="https://example.com/brice-bian" target="_blank" className="team-link">
                <strong>Brice Bian (CEO)</strong>
              </a>
              - 19 years of game production experience. Responsible for online games with millions of revenue.
              His work <em>'Gods Killer Online'</em> had the highest monthly income in the Chinese mobile game
              market.
            </li>
            <li>
              <a href="https://example.com/marco-tuo" target="_blank" className="team-link">
                <strong>Marco Tuo (CTO)</strong>
              </a>
              - 20 years of game development experience. Chief architect of millions of online mobile games.
              Technical director of large-scale travel VR games.
            </li>
            <li>
              <a href="https://example.com/belal-abdullah" target="_blank" className="team-link">
                <strong>Belal Abdullah (CMO)</strong>
              </a>
              - A driven Fintech professional and serial entrepreneur with a demonstrated ability to complete
              tasks with accuracy.
            </li>
          </ul>
        </div>

        {/* What is MetaVirus (MVT) roadmap? */}
        <div className="content-section">
          <h2 className="section-title">What is MetaVirus (MVT) roadmap?</h2>
          <img src={heroInfo3Image} alt="Game Basics" className="content-image" />
        </div>

        {/* MetaVirus (MVT) revenue streams */}
        <div className="content-section">
          <h2 className="section-title">MetaVirus (MVT) revenue streams</h2>
          <img src={heroInfo4Image} alt="Game Basics" className="content-image" />
          <img src={heroInfo5Image} alt="Game Basics" className="content-image" />
        </div>

        {/* What are MetaVirus (MVT) token metrics? */}
        <div className="content-section">
          <h2 className="section-title">What are MetaVirus (MVT) token metrics?</h2>
          <img src={heroInfo6Image} alt="Game Basics" className="content-image" />
        </div>

        {/* Who are the partners of MetaVirus (MVT)? */}
        <div className="content-section">
          <h2 className="section-title">Who are the partners of MetaVirus (MVT)?</h2>
          <p className="section-paragraph">
            NexGami, Assure, Nabox, Gate Web3 Wallet, Tencent, ByteDance, Chainlink Labs, Glaze, QuestN,
            Poolzboost, TaskOn, Alibaba Games, Perfect World Games.
          </p>
        </div>
      </div>
    </section>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <img src={saleLogo} alt="DAO Maker Logo" className="footer-logo" />
          <p>Tokenizing the Future</p>
        </div>
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#">DAO Launchpad</a></li>
            <li><a href="#">Stake DAO</a></li>
            <li><a href="#">Community Voted</a></li>
            <li><a href="#">Farms and Vestings</a></li>
            <li><a href="#">DAO Swap</a></li>
            <li><a href="#">Governance</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Brand assetsDao</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">DAO Bridge</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p className="disclaimer">
          * Past performances do not indicate future success. This web page and any other contents published on
          this website shall not constitute investment advice, financial advice, trading advice, or any other kind of
          advice. You alone assume the sole responsibility of evaluating the merits and risks associated with using any
          information or other content on this website before making any decisions based on such information.
        </p>
        <p>&copy; 2024 DAO Maker. All rights reserved.</p>
        <div className="footer-social-icons">
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-telegram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-discord"></i></a>
        </div>
      </div>
    </footer>
  </div>
  )
}
