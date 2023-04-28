import Allproduct from "./Allproduct";
import CategoriesSidebar from "./CategoriesSidebar";
import "./ProductSidebar.css";

const ProductSidebar = () => {
  return (
    <div className="productsidebar">
      <CategoriesSidebar />
      <Allproduct />
    </div>
  );
};

export default ProductSidebar;
