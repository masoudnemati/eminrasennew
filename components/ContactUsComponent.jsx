import React from "react";

const ContactUsComponent = () => {
  return (
    <main className="contactus-main">
      <address className="emin">
        <img
          width="125"
          height="125"
          src="/images/contact-us/eminraseninstagram.jpg"
          alt="eminrasen"
          className="contactus-emin-img"
        />
        <h2>EMIN RASEN</h2>
        <p>TURKMEN RAP İÑ DALISI</p>
        <hr />
        <a
          className="insta"
          href="https://www.instagram.com/amin_rasen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          amin_rasen
        </a>
        <a
          className="tel"
          href="https://t.me/rasenrap1"
          target="_blank"
          rel="noopener noreferrer"
        >
          rasenrap1
        </a>
      </address>

      <address className="contactus-atyal">
        <img
          width="125"
          height="125"
          src="/images/contact-us/atyallogo.png"
          alt="atyal"
          className="contactus-atyal-img"
        />
        <h2>Atyal</h2>
        <p>Web Developer</p>
        <hr />
        <a
          className="insta"
          href="https://www.instagram.com/masoudnemati1994/"
          target="_blank"
          rel="noopener noreferrer"
        >
          masoudnemati1994
        </a>
        <a
          className="tel"
          href="https://t.me/atyal"
          target="_blank"
          rel="noopener noreferrer"
        >
          atyal
        </a>
        <a
          className="web"
          href="https://atyal.ir"
          target="_blank"
          rel="noopener noreferrer"
        >
          atyal.ir
        </a>
      </address>

      <address className="contactus-doo">
        <img
          width="125"
          height="125"
          src="/images/contact-us/dali.jpg"
          alt="dali"
          className="contactus-doo-img"
        />
        <h2>Doo Dali</h2>
        <p>Producer</p>
        <hr />
        <a
          className="insta"
          href="https://www.instagram.com/doo_dali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          doo_dali
        </a>
      </address>

      <address className="awill">
        <img
          width="125"
          height="125"
          src="/images/contact-us/awill.jpg"
          alt="awill"
        />
        <h2>Awill Photography</h2>
        <p>Videography &amp; Photography </p>
        <hr />
        <a
          className="insta"
          href="https://www.instagram.com/awill.photography/"
          target="_blank"
          rel="noopener noreferrer"
        >
          awill.photography
        </a>
      </address>

      <style jsx>{`
        .contactus-main {
          background-image: linear-gradient(black, white);
          padding-top: 60px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }

        .contactus-main address {
          background: lightgray;
          border: 1px dashed black;
          border-radius: 5%;
          padding: 30px 50px;
          margin: 50px 50px;
          text-align: center;
          width: 350px;
        }

        .contactus-main img {
          border: 3px solid lightgray;
          padding: 3px;
          border-radius: 50%;
          margin-top: -100px;
        }

        .contactus-main h2 {
          font-style: normal;
          padding: 0;
          margin: 0;
          font-family: "Audiowide", cursive;
        }
        .contactus-main p {
          color: gray;
          font-size: 14px;
          padding: 0;
          margin: 0;
        }

        .contactus-main hr {
          margin-bottom: 15px;
        }

        .contactus-main a {
          color: white;
          text-align: left;
          padding: 12px 20px 12px 50px;
          border-radius: 25px;
          margin-bottom: 20px;
          margin-top: 15px;
          display: block;
          text-decoration: none;
          background: gray;
          background-image: url("/images/contact-us/icons8-download-26.png");
          background-position: 15px center;
          background-repeat: no-repeat;
          background-size: 32px 32px;
          border: 1px solid white;
        }

        .contactus-main a:hover {
          border: 1px solid black;
        }

        .contactus-main .insta {
          background-image: url("/images/contact-us/icons8-instagram-50.png");
        }

        .contactus-main .tel {
          background-image: url("/images/contact-us/icons8-telegram-app-50.png");
        }
        .contactus-main .web {
          background-image: url("/images/contact-us/icons8-website-50.png");
        }

        .contactus-main .contactus-icons p {
          color: white;
          font-size: large;
          display: inline;
        }

        @media (max-width: 1100px) {
          .contactus-main address {
            padding: 30px;
            width: 80vh;
          }
        }
      `}</style>
    </main>
  );
};

export default ContactUsComponent;
