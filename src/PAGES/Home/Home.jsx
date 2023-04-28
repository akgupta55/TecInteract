import BannerSlider from "../../COMPONENT/Banners/BannerSlider.jsx";
import Navbar from "../../COMPONENT/Navbar/Navbar.jsx";
import HomeCategories from "../../COMPONENT/Category/HomeCategories.jsx";
import ProductSidebar from "../../COMPONENT/Product/ProductSidebar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <ProductSidebar />
      Home
    </div>
  );
};

export default Home;
