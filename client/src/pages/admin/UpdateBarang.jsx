import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { getBarangById, updateBarang } from "../../axios/barangFetch";

const UpdateBarang = () => {
  const [form, setForm] = useState({
    nama_barang: "",
    foto_barang: "",
    harga_jual: 0,
    harga_beli: 0,
    stok: 0,
  });

  const params = useParams();

  useEffect(() => {
    const { id } = params;
    getBarangById(id, (res) => {
      setForm({
        nama_barang: res.nama_barang,
        foto_barang: res.foto_barang,
        harga_jual: res.harga_jual,
        harga_beli: res.harga_beli,
        stok: res.stok,
      });
    });
    console.log(params);
  }, []);

  const submitHandler = () => {
    updateBarang(+params[0].id, form);
    // console.log(form);
  };

  return (
    <>
      <div className="card mx-auto">
        <div className="card-body">
          <h1 className="mb-5">Update Item</h1>
          <form>
            <div className="mb-3">
              <label>Item Name</label>
              <input
                value={form.nama_barang}
                onChange={(e) =>
                  setForm({ ...form, nama_barang: e.target.value })
                }
                type="text"
                className="form-control"
                placeholder="Jack"
              />
            </div>

            <div className="mb-3">
              <label>Purchase Price</label>
              <input
                onChange={(e) =>
                  setForm({ ...form, harga_beli: e.target.value })
                }
                class="form-control"
                name="harga_beli"
                id="harga_beli"
                rows="3"
                value={form.harga_beli}
              ></input>
            </div>

            <div className="mb-3">
              <label>Selling Price</label>
              <input
                value={form.harga_jual}
                onChange={(e) =>
                  setForm({ ...form, harga_jual: e.target.value })
                }
                type="text"
                className="form-control"
                placeholder="Persia"
              />
            </div>

            <div className="mb-3">
              <label>Stock</label>
              <input
                onChange={(e) => setForm({ ...form, stok: e.target.value })}
                type="text"
                className="form-control"
                placeholder="White"
                value={form.stok}
              />
            </div>
            <div className="mb-3">
              <Link className="btn btn-warning" to="/admin/products">
                Cancel
              </Link>
              <button
                onClick={() => submitHandler()}
                type="button"
                className="btn btn-block btn-primary"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBarang;
