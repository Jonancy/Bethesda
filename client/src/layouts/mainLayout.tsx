import Footer from "@/components/footer/footer";
import Navbar from "@/components/home/navbar";
import { ReactNode, useEffect } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;

