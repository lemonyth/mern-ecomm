import Announcement from "./components/Announcement";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Announcement />
      <Home />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default App;
