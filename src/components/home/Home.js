import Header from "../header/Header";
import Video from "./Video";
import Contact from "../contact/Contact";
import Cards from "../projects/Cards";

const Home = () => {
    return ( 
        <section className="home">
            <Header/>
            <Video />
        </section>
    );
}
 
export default Home;