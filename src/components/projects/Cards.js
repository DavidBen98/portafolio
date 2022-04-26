import CardItem from "./CardItem";
import ecommerce from "../../assets/ecommerce.png";
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
                description="Contiene carrito de compras, registro y login con redes sociales, 
                compra con mercado pago..."
                link="https://github.com/DavidBen98/sitio_web_php_js"
                project="https://mueblesgiannis.000webhostapp.com/"
                tech={[javascript,html,css,php,Mysql]}
            />

            <CardItem
                img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                title="Proyecto con monai"
                description="Web 3 es el futuro y por eso este proyecto soluciona muchos problemas..."
                link="https://github.com/DavidBen98/sitio_web_php_js"
                project="https://buscador-canciones.surge.sh/"
                tech={[javascript,html,css,php,Mysql]}
            />

            <CardItem
                img={buscador}
                title="Buscar canciones"
                description="Busca canciones con su respectivo artista, y guarda en favoritos las deseadas."
                link="https://github.com/DavidBen98/crud-canciones"
                project="https://buscador-canciones.surge.sh/"
                tech={[react,html,css]}
            />
        </section>
    );
}
 
export default Cards;