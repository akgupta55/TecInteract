import foot_logo from "../../assets/foot.png";
import "./Footer1.css";
const Footer1 = () => {
  return (
    <div className="footer1">
      <div className="left">
        <img src={foot_logo} alt="footlogo" />
      </div>
      <div className="right">
        <h1>Phones Tablets & laptops at Your Doorstep</h1>
        <p>We Supply the after a proper technical checkup.</p>
      </div>
    </div>
  );
};

export default Footer1;
