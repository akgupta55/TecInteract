import BannerSlider from "../../COMPONENT/Banners/BannerSlider.jsx";
import Navbar from "../../COMPONENT/Navbar/Navbar.jsx";
import HomeCategories from "../../COMPONENT/Category/HomeCategories.jsx";
import ProductSidebar from "../../COMPONENT/Product/ProductSidebar.jsx";
import Footer1 from "../../COMPONENT/Footer/Footer1.jsx";
import Footer2 from "../../COMPONENT/Footer/Footer2.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <ProductSidebar />
      <Footer1 />
      <Footer2 />
      Home
    </div>
  );
};

export default Home;
