import Header from "../../components/Header/Header";
import Banner from "./components/Banner";
import FeaturedHomes from "./components/FeaturedHomes.tsx";
import FindPlace from "./components/FindPlace";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <FindPlace />
      <FeaturedHomes />
      <div className="container mx-auto px-4">
        Home
      </div>
    </>
  )
}

export default Home;