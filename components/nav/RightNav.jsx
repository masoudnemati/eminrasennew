import Link from "next/link";

const RightNav = ({ open }) => {
  return (
    <div>
      <ul className="nav-ul" open={open}>
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

        <style jsx>{`
          ul {
            list-style: none;
            display: flex;
            flex-flow: row-reverse nowrap;
            margin-top: 25px;
          }

          li {
            padding: 15px 30px;
            margin: 0;
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

          @media only screen and (max-width: 780px) {
            .nav-ul {
              flex-flow: column;
              direction: rtl;
              background-color: rgba(156, 156, 156, 0.9);
              position: fixed;
              margin: 0;
              transform: ${open ? "translateX(0)" : "translateX(100%)"};
              top: 0;
              right: 0;
              height: 100vh;
              width: 65vw;
              padding-top: 6rem;
              transition: transform 0.3s ease-in-out;
            }

            /* .nav-white {
              background-color: white;
            } */
          }

          /* .ul-scroll {
            background-color: white;
          } */
        `}</style>
      </ul>
    </div>
  );
};

// if (typeof window !== "undefined") {
//    browser code
//   window.addEventListener("scroll", function () {
//     let ul = document.querySelector("ul");
//     ul.classList.toggle("ul-scroll", window.scrollY > 0);
//   });
// }

export default RightNav;
