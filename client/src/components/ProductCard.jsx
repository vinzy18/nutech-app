import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const ProductCard = ({ nama_barang, harga_jual, stok, deleteAction }) => {
  return (
    <div className="card-product">
      <div className="card-product-header">
        <div className="card-product-header-details"></div>
        <Dropdown
          icon="bx bx-dots-vertical-rounded"
          menu={
            <>
              <li className="dropdown-list">
                <Link to="/admin/updateBarang" className="dropdown-link">
                  <i className="bx bx-edit dropdown-link-icon"></i>
                  Edit
                </Link>
              </li>
              <li className="dropdown-list" onClick={() => deleteAction()}>
                <button className="dropdown-link">
                  <i className="bx bx-trash dropdown-link-icon"></i>
                  Delete
                </button>
              </li>
            </>
          }
        />
      </div>
      <div className="card-product-img">
        <img
          // src={require(`../assets/img/${foto_barang}`)}
          alt=""
          className="product-img"
        />
      </div>
      <div className="card-product-body">
        <h1 className="product-name">{nama_barang}</h1>
        <div className="flex-item">
          <p className="product-price">{harga_jual}</p>
          <p className="product-stock">Stock: {stok}</p>
        </div>
        <div className="product-rate">
          <i className="bx bx-star icon-rate"></i>
          {/* <span className="rate">{rate}</span> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
