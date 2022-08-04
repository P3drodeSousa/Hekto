import LatestProduct from "./Product";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <section className="latest-grid">
      <LatestProduct />
      <LatestProduct />
      <LatestProduct />
      <LatestProduct />
      <LatestProduct />
      <LatestProduct />
    </section>
  );
};

export default ProductList;
