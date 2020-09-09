import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="logo">Logo</div>
      <ul>
        <li>
          <Link href="/">
            <a>صفحه اصلی</a>
          </Link>
        </li>
        <li>
          <Link href="/songs">
            <a>آهنگ</a>
          </Link>
        </li>
        <li>
          <Link href="/video">
            <a>موزیک ویدئو</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a>درباره ما</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a>تماس با ما</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .navbar-main {
          width: 100%;
          height: auto;
          pading: 0 20px;
          background: rgba(255, 255, 255, 0.97);
          display: flex;
          justify-content: space-between;
        }

        .logo {
          padding: 15px 0;
        }

        ul {
          list-style: none;
          display: flex;
          flex-flow: row-reverse;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
