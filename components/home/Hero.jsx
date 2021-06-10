import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="hero">
        <div className="headers">
          <h1 className="hero-header">EMIN RASEN</h1>
          <h4 className="hero-des">TURKMEN RAP İÑ DALISI</h4>
          <section className="social-icons">
            <div>
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
            <div>
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
          </section>
        </div>
      </div>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 150px 0 280px 0;
          background-image: url("/images/eminrasenhero.webp");
          background-size: cover;
          background-position: center;
        }

        .headers {
          background-color: #021c3cee;
          height: 210px;
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

        .social-icons {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        img {
          background-color: #0c1422;
          height: 35px;
          width: 35px;
          margin: ‌ 100px;
          box-sizing: content-box;
          padding: 15px;
          margin: 0 10px;
          border-radius: 40%;
          transition: all 0.2s ease;
        }

        img:hover {
          box-shadow: 0 3px 3px #8fbfcf;
        }
      `}</style>
    </main>
  );
};

export default Hero;
