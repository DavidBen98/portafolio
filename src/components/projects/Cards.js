import "./cards.css";
import CardItem from "./CardItem";
import ecommerce from "../../assets/ecommerce.png";

const Cards = () => {
    return (
        <section className="wrapper">
            <CardItem
                img={ecommerce}
                title="E-commerce"
                description="Contiene carrito de compras, registro y login con redes sociales, 
                compra con mercado pago..."
                link="https://github.com/DavidBen98/sitio_web_php_js"
                project=""
            />

            <CardItem
                img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                title="Daviflix"
                description="Fear Risotto no more! This simple recipe is perfect for family dinners."
                link="https://github.com/DavidBen98/sitio_web_php_js"
            />

            <CardItem
                img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                title="CRUD Api"
                description="Baked Cod with Vegetables. 30 minute meal!"
            />
        </section>
    );
}
 
export default Cards;