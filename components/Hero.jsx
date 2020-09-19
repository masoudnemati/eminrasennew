import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="hero">
        <div className="headers">
          <h1 className="hero-header">EMIN RASEN</h1>
          <h4 className="hero-des">TURKMEN RAP İÑ DALISI</h4>
          <div className="icons">
            <div className="instagram-icon">
              <a
                href="https://www.instagram.com/amin_rasen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://t.me/rasenrap1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 150px 0 300px 0;
          background-image: url("/images/eminrasenhero.webp");
          background-size: cover;
          background-position: center;
        }

        .headers {
          background-color: #021c3cee;
        }
        .hero-header {
          margin: 0;
          padding: 0;
          padding-top: 20px;
          color: white;
        }

        .hero-des {
          margin: 0;
          padding-top: 8px;
          padding-bottom: 18px;

          color: rgb(187, 187, 187);
        }
      `}</style>
    </main>
  );
};

export default Hero;
