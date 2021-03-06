import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div>
          <h1>
            EMIN<span>RASEN</span>
          </h1>
          <p>TURKMEN RAP İÑ DALISI</p>
        </div>
        <p className="rights">
          &copy; 2017-{new Date().getFullYear()} eminrasen.ir
          <br />
          Web Design by Atyal.ir
          <br />
          All rights reserved.
        </p>
      </div>
      <div className="footer-center">
        <ul>
          <li className="links">لینک های کاربردی</li>
          <Link href="/">
            <li className="home-li">
              <a>صفحه اصلی</a>
            </li>
          </Link>
          <Link href="/songs">
            <li className="songs-li">
              <a>آهنگ</a>
            </li>
          </Link>
          <Link href="/videos">
            <li className="video-li">
              <a>موزیک ویدئو</a>
            </li>
          </Link>
          <Link href="/about-us">
            <li className="about-us-li">
              <a>درباره ما</a>
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="contact-us-li">
              <a>تماس با ما</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="footer-right">
        <ul>
          <li className="shabake">شبکه های اجتماعی</li>
          <li className="donbal">
            صفحه رسمی امین راسن در شبکه های اجتماعی را دنبال کنید
          </li>
          <li>
            <div className="footer-icons">
              <a
                href="https://www.instagram.com/amin_rasen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/icons8-instagram-old-50.png"
                  alt="emin rasen instagram"
                  width="40px"
                  height="40px"
                />
              </a>
              <a
                href="https://t.me/rasenrap1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/icons8-telegram-app-50.png"
                  alt="emin rasen instagram"
                  width="40px"
                  height="40px"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          align-content: center;
          padding: 0px 4vw;
          color: white;
          background-color: #292c2f;
        }

        .footer-left,
        .footer-center,
        .footer-right {
          width: 250px;
        }

        .footer-left {
          height: 268px;
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: space-between;
        }

        span {
          color: skyblue;
        }

        h1 {
          font-family: "Audiowide", cursive;
          padding-bottom: 0;
          padding-top: 9px;
          margin-bottom: 0;
        }

        .footer-left p {
          padding-top: 0;
          margin-top: 0;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-left .rights {
          color: white;
          font-size: 13px;
        }
        ul {
          list-style: none;
          margin-top: 25px;
          direction: rtl;
        }

        li {
          padding: 6px 30px 6px 0;
          margin: 0;
          cursor: pointer;
        }
        .links {
          padding-bottom: 10px;
          color: skyblue;
          font-size: 1.1rem;
          background-image: url("/icons/icons8-link-26.png");
          background-size: 23px;
          background-repeat: no-repeat;
          background-position: right center;
        }

        .home-li,
        .songs-li,
        .video-li,
        .about-us-li,
        .contact-us-li {
          background-image: url("/icons/icons8-filled-circle-25.png");
          background-size: 20px;
          background-repeat: no-repeat;
          background-position: right center;
        }

        .home-li:hover,
        .songs-li:hover,
        .video-li:hover,
        .about-us-li:hover,
        .contact-us-li:hover {
          color: #74aec7;
        }
        .shabake {
          padding-bottom: 10px;
          color: skyblue;
          background-image: url("/icons/icons8-connect-24.png");
          background-repeat: no-repeat;
          background-position: right center;
        }

        .donbal {
          font-size: 0.9rem;
        }

        img {
          margin-left: 15px;
          padding: 5px;
          background-color: rgba(135, 207, 235, 0.5);
          border: 1px solid black;
          border-radius: 10px;
        }

        img:hover {
          background-color: black;
        }

        @media only screen and (max-width: 900px) {
          footer {
            display: flex;
            flex-direction: column-reverse;
          }

          .footer-left,
          .footer-center,
          .footer-right {
            width: 100vw;
          }

          .footer-left {
            padding: 5vh 8vw;
          }

          .footer-right {
            padding-left: 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
