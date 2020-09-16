import Navbar from "./nav/Navbar";
export interface ChildrenProps {
  children: any;
}

function Layout({ children }: ChildrenProps) {
  return (
    <div>
      <Navbar />
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
}

export default Layout;
