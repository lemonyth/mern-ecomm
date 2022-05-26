import Announcement from "./components/Announcement";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div>
      <Announcement />
      <Home />
      <Slider />
      <Categories />
    </div>
  );
};

export default App;
