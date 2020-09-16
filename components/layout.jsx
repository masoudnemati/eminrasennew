import Navbar from "./nav/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;
