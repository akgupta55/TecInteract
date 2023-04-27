import "./HomeCategories.css";
import img1 from "../../assets/image/img1.png";
import img2 from "../../assets/image/img2.png";
import img3 from "../../assets/image/img3.png";
import img4 from "../../assets/image/img4.png";
const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={img1} alt="" />
        <div className="content">
          <h1>Gadgets at your doorstep</h1>
          <p>Shop Gadgets now</p>
        </div>
      </div>
      <div className="container">
        <img src={img2} alt="" />
        <div className="content">
          <h1>Gadgets at your doorstep</h1>
          <p>Shop Gadgets now</p>
        </div>
      </div>
      <div className="container">
        <img src={img3} alt="" />
        <div className="content">
          <h1>Gadgets at your doorstep</h1>
          <p>Shop Gadgets now</p>
        </div>
      </div>
      <div className="container">
        <img src={img4} alt="" />
        <div className="content">
          <h1>Gadgets at your doorstep</h1>
          <p>Shop Gadgets now</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
