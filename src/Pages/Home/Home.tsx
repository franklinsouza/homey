import Header from "../../components/Header/Header";
import Banner from "./components/Banner";
import FindPlace from "./components/FindPlace";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <FindPlace />
      <div className="container mx-auto px-4">
        Home
      </div>
    </>
  )
}

export default Home;