import Link from "next/link";

export interface ChildrenProps {
  children: any;
}

function Layout({ children }: ChildrenProps) {
  return (
    <div>
      <header>
        <Link href="/">
          <a>صفحه اصلی</a>
        </Link>
        <Link href="/songs">
          <a>آهنگ</a>
        </Link>
        <Link href="/music-video">
          <a>موزیک ویدئو</a>
        </Link>
        <Link href="/about-us">
          <a>درباره ما</a>
        </Link>
        <Link href="/contact-us">
          <a>تماس با ما</a>
        </Link>
      </header>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;
