import "./CategoriesSidebar.css";
import img1 from "../../assets/image/img1.png";
import img2 from "../../assets/image/img2.png";
import img3 from "../../assets/image/img3.png";
import img4 from "../../assets/image/img4.png";

const CategoriesSidebar = () => {
  const data = [
    {
      id: 1,
      categoryimg: img1,
      categoryname: "Category1",
    },
    {
      id: 2,
      categoryimg: img2,
      categoryname: "Category2",
    },
    {
      id: 3,
      categoryimg: img3,
      categoryname: "Category3",
    },
    {
      id: 4,
      categoryimg: img4,
      categoryname: "Category4",
    },
    {
      id: 5,
      categoryimg: img1,
      categoryname: "Category5",
    },
    {
      id: 6,
      categoryimg: img2,
      categoryname: "Category6",
    },
    {
      id: 7,
      categoryimg: img3,
      categoryname: "Category7",
    },
    {
      id: 8,
      categoryimg: img4,
      categoryname: "Category8",
    },
  ];
  return (
    <div className="categoriesidebar">
      {data.map((item) => {
        return (
          <div className="category" key={item.id}>
            <img src={item.categoryimg} alt="noimg" />
            <h3>{item.categoryname}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesSidebar;
