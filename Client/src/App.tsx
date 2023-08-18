import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import './App.css'
import Admin from "./Pages/Layout/Admin";
import AddProduct from "./Pages/Admin/AddProduct";
import {
  CreatCategory,
  Delete,
  GetAll,
  GetAllCategory,
  RegisterUser,
  UpdateNewProduct,
  create,
  loginUser,
  removeCategory,
} from "./API/product";
import { useEffect, useState } from "react";
import ShowProduct from "./Pages/Admin/ShowProduct";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategory from "./Pages/Admin/AddCategory";
import ShowCategory from "./Pages/Admin/ShowCategory";
import Register from "./login/register";
import Login from "./login/Login";
import Home from "./Pages/Client/Home";
import Client from "./Pages/Layout/Client";
import DetailProduct from "./Pages/Client/DetailProduct";
import Detail from "./Pages/Layout/detail";

function App() {
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState([]);
  const addProduct = (data: any) => {
    if (data) {
      console.log(data);
      create(data);
      toast.success("Thêm thành công");
    }
  };
  useEffect(() => {
    GetAll().then(({ data }) => setdata(data));
  }, []);
  useEffect(() => {
    GetAllCategory().then(({ data }) => setcategory(data));
  }, []);
  const Remove = (id: any) => {
    if (confirm("Are you sure you want to remove this")) {
      Delete(id).then(() =>
        setdata(data.filter((data: any) => data._id !== id))
      );
      alert("Xóa Thành công!");
    }
  };
  const RemoveCategory = (id: any) => {
    if (confirm("Are you sure you want to remove this")) {
      removeCategory(id).then(() =>
        setcategory(category.filter((data: any) => data._id !== id))
      );
      toast.error("Xóa Thành công!");
    }
  };
  const Update = (data: any) => {
    UpdateNewProduct(data);
    alert("Cập nhật thành công!");
    // Window.prototype.location = "http://localhost:5173/Admin/Show";
  };
  const AddList = async (data1: any) => {
    const { data } = await CreatCategory(data1);
    toast.success(data.message);
  };
  const SignIn = async (user: any) => {
    const { data } = await RegisterUser(user);
    toast.success(data.message);
  };
  const login = async (user: any) => {
    const { data } = await loginUser(user);
    console.log(data);
    toast.success(data.message);
    if (data) {
      const token = data.accessTokent;
      localStorage.setItem("accessTokent", token);
      localStorage.setItem("role", data.user.role);
      if (data.user.role == "admin") {
        window.location.href = "/Admin";
      } else if (data.user.role == "member") {
        window.location.href = "/";
      }
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* admin-router */}
          <Route path="/Admin" element={<Admin />}>
            <Route index element={<AddProduct Onadd={addProduct} />}></Route>
            <Route
              path="Show"
              element={<ShowProduct product={data} OnRemove={Remove} />}
            ></Route>
            <Route
              path="Update/:id"
              element={<UpdateProduct data={data} OnUpdate={Update} />}
            ></Route>
            {/* ShowCategory */}
            <Route
              path="Category"
              element={<AddCategory Onadd={AddList} />}
            ></Route>
            <Route
              path="Show/Category"
              element={
                <ShowCategory data={category} OnRemove={RemoveCategory} />
              }
            ></Route>
          </Route>

          {/* client-router */}
          <Route path="/" element={<Client />}>
            <Route index element={<Home data={data} />} />
            <Route path="SignUp" element={<Register OnAdd={SignIn} />} />
            <Route path="SignIn" element={<Login Onlog={login} />} />
          </Route>
          <Route path="/productDeltail" element={<Detail />}>
            <Route index element={<DetailProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
