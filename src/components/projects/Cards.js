import CardItem from "./CardItem";
import ecommerce from "../../assets/ecommerce.png";
import watchlist from "../../assets/watchlist.png";
import buscador from "../../assets/buscador.png";
import react from "../../assets/logo-react.svg";
import javascript from "../../assets/logo-javascript.png";
import html from "../../assets/logo-html.svg";
import css from "../../assets/logo-css.svg";
import php from "../../assets/logo-php.svg";
import Mysql from "../../assets/logo-mysql.svg";

const Cards = () => {
    return (
        <section className="projects">
            <CardItem
                img={ecommerce}
                title="E-commerce"
                description="Contiene carrito de compras, registro de usuarios, 
                compra con mercado pago..."
                link="https://github.com/DavidBen98/sitio_web_php_js"
                project="https://mueblesgiannis.000webhostapp.com/"
                tech={[javascript,html,css,php,Mysql]}
            />

            <CardItem
                img={watchlist}
                title="WatchList"
                description="Organizar películas en una lista para ver, y mantener el catálogo de las ya visualizadas."
                link="https://github.com/DavidBen98/watchlist"
                project="https://watch-list-movie.vercel.app/"
                tech={[react,html,css]}
            />

            <CardItem
                img={buscador}
                title="Buscar canciones"
                description="Busca canciones con su respectivo artista, y guarda en favoritos las deseadas."
                link="https://github.com/DavidBen98/crud-canciones"
                project="https://buscador-canciones.surge.sh/"
                tech={[react,html,css]}
                fade={"animate__fadeInRight"}
            />
        </section>
    );
}
 
export default Cards;