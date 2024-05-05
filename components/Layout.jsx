import { Footer, Navbar } from "./homepage";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
