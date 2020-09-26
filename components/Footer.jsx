import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <h1>
          EMIN<span>RASEN</span>
        </h1>
        <p>TURKMEN RAP İÑ DALISI</p>
      </div>
      <div className="footer-center">
        <ul>
          <li className="links">لینک های کاربردی</li>
          <li className="home-li">
            <Link href="/">
              <a>صفحه اصلی</a>
            </Link>
          </li>
          <li className="songs-li">
            <Link href="/songs">
              <a>آهنگ</a>
            </Link>
          </li>
          <li className="video-li">
            <Link href="/video">
              <a>موزیک ویدئو</a>
            </Link>
          </li>
          <li className="about-us-li">
            <Link href="/about-us">
              <a>درباره ما</a>
            </Link>
          </li>
          <li className="contact-us-li">
            <Link href="/contact-us">
              <a>تماس با ما</a>
            </Link>
          </li>
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
                insta
              </a>
              <a
                href="https://t.me/rasenrap1"
                target="_blank"
                rel="noopener noreferrer"
              >
                telegram
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
          padding: 0px 8vw;
          color: white;
          background-color: #292c2f;
        }

        .footer-left,
        .footer-center,
        .footer-right {
          width: 250px;
        }

        span {
          color: skyblue;
        }

        h1 {
          font-family: "Audiowide", cursive;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .footer-left p {
          padding-top: 0;
          margin-top: 0;
          color: rgba(255, 255, 255, 0.5);
        }

        ul {
          list-style: none;
          margin-top: 25px;
          direction: rtl;
        }

        li {
          padding: 4px 30px 6px 0;
          margin: 0;
        }
        .links {
          padding-bottom: 10px;
          color: skyblue;
          font-weight: bold;
          font-size: 1.1rem;
          background-image: url("/icons/icons8-link-26.png");
          background-repeat: no-repeat;
          background-position: right center;
        }

        .home-li {
          background-image: url("/icons/icons8-home-24.png");
          background-repeat: no-repeat;
          background-position: right center;
        }

        .songs-li {
          background-image: url("/icons/icons8-musical-notes-24.png");
          background-repeat: no-repeat;
          background-position: right center;
        }

        .video-li {
          background-image: url("/icons/icons8-video-call-24.png");
          background-repeat: no-repeat;
          background-position: right center;
        }

        .about-us-li {
          background-image: url("/icons/icons8-about-24.png");
          background-repeat: no-repeat;
          background-position: right center;
        }

        .contact-us-li {
          background-image: url("/icons/icons8-phone-24.png");
          background-repeat: no-repeat;
          background-position: right center;
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
      `}</style>
    </footer>
  );
};

export default Footer;
