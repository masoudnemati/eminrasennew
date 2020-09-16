import Link from "next/link";

export const RightNav = ({ open }) => {
  return (
    <div>
      <ul open={open}>
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

        <style jsx>{`
          ul {
            list-style: none;
            display: flex;
            flex-flow: row-reverse nowrap;
          }

          li {
            padding: 15px 30px;
            margin: 0;
          }

          @media only screen and (max-width: 780px) {
            ul {
              flex-flow: column;
              direction: rtl;
              background: white;
              position: fixed;
              margin: 0;
              transform:  ${open ? 'translateX(0)' : 'translateX(100%)'};
              top: 0;
              right: 0;
              height: 100vh;
              width: 75vw;
              padding-top: 3rem;
              transition: transform 0.3s ease-in-out;
            }
          }
        `}</style>
      </ul>
    </div>
  )
};
