import { mainPageDetails } from "@/Services/index/page.main.service";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/home/navbar";
import { FooterDetails, NavbarDetails } from "@/types";
import { ReactNode, useEffect, useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [navbarDetails, setNavbarDetails] = useState<NavbarDetails>();
  const [footerDetails, setFooterDetails] = useState<FooterDetails>();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const getCompanyDetails = async () => {
    try {
      const res = await mainPageDetails();
      console.log(res.data);
      setNavbarDetails({
        logo: res.data.logo,
        email: res.data.email,
        phone_number: res.data.phone_number,
      });
      setFooterDetails({
        logo: res.data.logo,
        email: res.data.email,
        phone_number: res.data.phone_number,
        copyRights: res.data.copyRights,
        location: res.data.location,
        about: res.data.about,
      });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(footerDetails);

  useEffect(() => {
    getCompanyDetails();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar navbarDetails={navbarDetails} />
      {children}
      <Footer footerDetails={footerDetails} />
    </div>
  );
};

export default MainLayout;
