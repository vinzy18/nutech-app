import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dialog from "../../components/Dialog";
import ProductCard from "../../components/ProductCard";
import ModalAdd from "../../components/ModalAdd";
import { getBarang, deleteBarang } from "../../axios/barangFetch";

const Products = () => {
  const [barang, setBarang] = useState([]);

  useEffect(() => {
    getBarang((result) => {
      setBarang(result);
    });
  }, []);

  const handleDelete = (id, barang) => {
    deleteBarang(id, barang);
  };
  return (
    <React.Fragment>
      <div className="mb-2">
        <nav className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/admin/dashboard" className="breadcrumb-link">
              <span className="breadcrumb-link-icon">
                <i className="bx bx-home-alt"></i>
              </span>
              Dashboard
            </Link>
          </li>
          <li className="breadcrumb-item active">Item</li>
        </nav>
      </div>

      <ModalAdd></ModalAdd>

      <div className="grid-box">
        {barang.map((item, i) => {
          const { id, nama_barang, harga_jual, stok } = item;
          return (
            <>
              <ProductCard
                key={id}
                nama_barang={nama_barang}
                harga_jual={harga_jual}
                stok={stok}
                deleteAction={() => handleDelete(id, item)}
              />
            </>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Products;
