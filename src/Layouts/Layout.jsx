import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen h-auto flex flex-col bg-zinc relative">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
