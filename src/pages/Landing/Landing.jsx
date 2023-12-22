import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Users from "../../components/Users/Users";

const Landing = () => {
    return (
        <div className="max-w-7xl">
            <Navbar></Navbar>
            <Banner></Banner>
            <Users></Users>
            <Footer></Footer>
        </div>
    );
};

export default Landing;