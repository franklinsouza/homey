import Header from "../../components/Header/Header";
import Banner from "./components/Banner";
import FindPlace from "./sections/FindPlace/FindPlace";
import FeaturedHomes from "./sections/FeaturedHomes/FeaturedHomes.tsx";
import ModernApartament from "./sections/ModernApartament/ModernApartament";
import TrendingDestinations from "./sections/TrendingDestinations/TrendingDestinations";
import FromOurBlog from "./sections/FromOurBlog/FromOurBlog";
import HeaderOurHosts from "./sections/HearOurHosts/HearOurHosts";
import OurPartners from "./sections/OurPartners/OurPartners";
import Footer from "../../components/Footer/Footer";



const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <FindPlace />
      <FeaturedHomes />
      <ModernApartament />
      <TrendingDestinations />
      <FromOurBlog />
      <HeaderOurHosts />
      <OurPartners />
      <Footer />
    </>
  )
}

export default Home;