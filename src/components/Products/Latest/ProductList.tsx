import LatestProduct from "./Product";

import { faker } from "@faker-js/faker";
//TODO DELETE FAKER
type Props = {};

const ProductList = (props: Props) => {
  return (
    <section className="latest-grid">
      <LatestProduct product={faker.commerce.product()} />
      <LatestProduct product={faker.commerce.product()} />
      <LatestProduct product={faker.commerce.product()} />
      <LatestProduct product={faker.commerce.product()} />
      <LatestProduct product={faker.commerce.product()} />
      <LatestProduct product={faker.commerce.product()} />
    </section>
  );
};

export default ProductList;
