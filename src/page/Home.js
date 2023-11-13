import React from 'react';
import BookItem from '../components/ProductList/ProductList';
import productList from '../data/products.json';

import { MyToastContainer } from '../components/ProductList/ProductList';

import "./styles.css";

export default function Home() {
  return (
    <div className="Container">
      <div className="Row">
        {productList.map((item) => (
          <div className="Col" key={item.id}>
            <BookItem data={item} />
          </div>
        ))}
      </div>
      <MyToastContainer />
    </div>
  );
}
