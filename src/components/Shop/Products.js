import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "First Book Wrote"
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "Second Book Wrote"
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              title={product.title}
              price={product.price}
              id={product.id}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
