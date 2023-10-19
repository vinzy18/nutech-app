import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createBarang } from "../axios/barangFetch";
import Swal from "sweetalert2";

const ModalAdd = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    nama_barang: "",
    harga_jual: 0,
    harga_beli: 0,
    stok: 0,
  });

  const submitHandler = () => {
    createBarang(form);
    Swal.fire(`Barang berhasil ditambahkan`, "Success");
    handleClose().then(() => {
      window.location.reload();
    });
  };
  

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn-add m-2">
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item Name"
                onChange={(e) =>
                  setForm({ ...form, nama_barang: e.target.value })
                }
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Purchase Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Purchase Price"
                onChange={(e) =>
                  setForm({ ...form, harga_beli: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Selling Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Selling Price"
                onChange={(e) =>
                  setForm({ ...form, harga_jual: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Stock"
                onChange={(e) => setForm({ ...form, stok: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            onClick={() => submitHandler()}
            type="button"
            className="btn btn-block btn-primary"
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAdd;
