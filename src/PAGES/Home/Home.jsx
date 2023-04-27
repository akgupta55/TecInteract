import BannerSlider from "../../COMPONENT/Banners/BannerSlider.jsx";
import Navbar from "../../COMPONENT/Navbar/Navbar.jsx";
import HomeCategories from "../../COMPONENT/Category/HomeCategories.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      Home
    </div>
  );
};

export default Home;
