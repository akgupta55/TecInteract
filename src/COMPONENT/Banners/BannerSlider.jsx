import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://github.com/akgupta55/image/blob/main/My%20project-1.png?raw=true",
      title: "Technology On Your Hand",
      button: "https://www.google.com",
    },
    {
      id: 2,
      image: "https://github.com/akgupta55/image/blob/main/b2.jpg?raw=true",
      title: "Technology On Your Hand",
      button: "https://www.google.com",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bannerslider">
      <Slider className="bannerslider" {...settings}>
        {data.map((item) => {
          return (
            <div className="imagecont" key={item.id}>
              <img src={item.image} alt="noimage" />
              <div className="content">
                <h1>{item.title}</h1>
                <button>Shop Now</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
