import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ChatBox from "@/src/components/ChatBox";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
      <div className="absolute right-3 bottom-[265px]  lg:right-4 lg:bottom-[164px]">
        <ChatBox />
      </div>
    </div>
  );
};

export default Layout;
