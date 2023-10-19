import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3001";

const token = localStorage.getItem("access_token");

const getBarang = async (callback) => {
  try {
    const barangs = await axios({
      method: "GET",
      url: `${URL}/show`,
      headers: { access_token: token },
    });
    console.log(barangs.data);
    callback(barangs.data);
  } catch (error) {
    console.log(error);
  }
};

const getBarangById = async (id, callback) => {
  try {
    const result = await axios({
      method: "GET",
      url: `${URL}/showbyid/${id}`,
    });

    console.log(id);
    callback(result.data);
  } catch (err) {
    console.log(err);
  }
};

const createBarang = async (barang) => {
  try {
    await axios({
      method: "POST",
      url: `${URL}/create`,
      data: barang,
      headers: { access_token: token },
    });

    // console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};

const updateBarang = async (id, barang) => {
  try {
    await axios({
      method: "PUT",
      url: `${URL}/update/${id}`,
      data: barang,
      headers: { access_token: token },
    });
    Swal.fire(`${barang.nama_barang} berhasil di update`, "Success");
    // console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};

const deleteBarang = async (id, barang) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let result = await axios({
          method: "DELETE",
          data: barang,
          url: `${URL}/delete/${id}`,
          headers: { access_token: token },
        });
        Swal.fire(
          "Terhapus!",
          `${barang.nama_barang} berhasil dihapus`,
          "Success"
        ).then(() => {
          window.location.reload();
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export { getBarang, getBarangById, createBarang, updateBarang, deleteBarang };
