import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import RecipeDetail from "./pages/RecipeDetail";
import About from "./pages/About";

const App = ()=>{
  return(
    <>
    <Navbar/>
    <Landing/>
    {/* <Categories/> */}
    <RecipeDetail/>
    <About/>
    </>
  )
}

export default App;