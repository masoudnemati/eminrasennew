import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="hero">
        <div className="headers">
          <h1 className="hero-header">EMIN RASEN</h1>
          <h4 className="hero-des">TURKMEN RAP İÑ DALISI</h4>
          <div className="instagram-icon">
            <a
              href="https://www.instagram.com/amin_rasen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/icons8-instagram-old-50.png"
                alt="emin rasen instagram"
                width="35px"
                height="35px"
              />
            </a>
          </div>
          <div className="telegram-icon">
            <a
              href="https://t.me/rasenrap1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/icons8-telegram-app-50.png"
                alt="emin rasen instagram"
                width="35px"
                height="35px"
              />
            </a>
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
          height: 200px;
        }
        .hero-header {
          font-family: "Audiowide", cursive;
          margin: 0;
          padding: 0;
          padding-top: 20px;
          color: white;
        }

        .hero-des {
          margin: 0;
          padding-top: 8px;
          padding-bottom: 30px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;

          color: rgb(187, 187, 187);
        }

        .instagram-icon {
          display: inline;
        }

        .telegram-icon {
          display: inline;
          margin-left: 10px;
        }
      `}</style>
    </main>
  );
};

export default Hero;
