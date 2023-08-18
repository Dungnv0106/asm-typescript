import { instance } from "./instance";

export const create = (data: any) => {
  return instance.post("/product", data);
};
export const GetAll = () => {
  return instance.get("/product");
};
export const GetOne = (id: any) => {
  return instance.get("/product/" + id);
};
export const Delete = (id: any) => {
  const accessToken = localStorage.getItem("accessTokent");
  return instance.delete("/product/" + id, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const UpdateNewProduct = (data: any) => {
  const accessToken = localStorage.getItem("accessTokent");
  return instance.put("/product/" + data._id, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const GetAllCategory = () => {
  return instance.get("/Category");
};
export const CreatCategory = (data: any) => {
  return instance.post("/Category", data);
};
export const removeCategory = (id: any) => {
  return instance.delete("/Category/" + id);
};
export const RegisterUser = (data: any) => {
  return instance.post("/signup", data);
};
export const loginUser = (data: any) => {
  return instance.post("/Signin", data);
};
