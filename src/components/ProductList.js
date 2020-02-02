import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const GET_PRODUCTS = graphql`
  query {
    hasura {
      products {
        brand
        description
        price_amount
        price_currency
      }
    }
  }
`;

const ProductList = () => {
  const { hasura: { products } } = useStaticQuery(GET_PRODUCTS);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <div>{product.brand}</div>
          <div>{product.description}</div>
          <div>
            {product.price_currency} {product.price_amount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
export { GET_PRODUCTS };
