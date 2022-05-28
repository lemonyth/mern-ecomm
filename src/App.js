import Announcement from "./components/Announcement";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Announcement />
      <Home />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
