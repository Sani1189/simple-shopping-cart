import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./nav.css";

export default function Nav() {
  const { list } = useSelector((state) => state.cart);

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <h1>Simple Shopping Cart</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart" className="cartIcon">
            <FaCartArrowDown className={list?.length > 0 ? 'myred' : ''} />
            {list?.length > 0 && <span className="myred">{list.length}</span>}
          </Link>

        </div>
      </div>
    </div>
  );
}
