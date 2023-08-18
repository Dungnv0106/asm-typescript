import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { GetOne } from "../../API/product";
import { render } from "react-dom";
interface formData {
  name: string;
  price: number;
  description: string;
  image: string;
}
const UpdateProduct = (props: any) => {
  const [Image, SetImage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const CurrentProduct = props?.data?.data?.find(
      (data: any) => data._id == id
    );
    reset(CurrentProduct);
  }, [props]);
  const OnHandleSubmit = async (data: any) => {
    data.image = await SubmitImage();
    // console.log(data);
    // return;
    props.OnUpdate(data);
    navigate("/admin/show");
  };
  const SubmitImage = async () => {
    const CLOUD_NAME = "dgp1nblmq";
    const PRESET_NAME = "asm_ts";
    const FOLDER_NAME = "asm-ts";

    const data = new FormData();

    data.append("file", Image);
    data.append("upload_preset", PRESET_NAME);
    data.append("cloud_name", CLOUD_NAME);
    data.append("folder", FOLDER_NAME);

    const takeData = await axios
      .post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data)
      .then((data: any) => data);
    return takeData.data.secure_url;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(OnHandleSubmit)}>
        <div className="mb-3">
          <label htmlFor="name_product" className="form-label">
            Tên Sản Phẩm
          </label>
          <input
            type="text"
            className="form-control"
            {...register("name", {
              required: true,
            })}
            id="name_product"
          />
          {errors.name && (
            <span className="text-danger">*Tên sản phẩm là bắt buộc</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price_product" className="form-label">
            Giá Sản Phẩm
          </label>
          <input
            type="number"
            className="form-control"
            {...register("price", {
              required: true,
            })}
            id="price_product"
          />
          {errors.price && (
            <span className="text-danger">Giá sản phẩm là bắt buộc</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="image_product" className="form-label">
            Ảnh sản phẩm
          </label>
          <input
            type="file"
            className="form-control"
            {...register("image", {
              required: true,
            })}
            onChange={(e: any) => SetImage(e.target.files[0])}
            name="image"
            id="image_product"
          />
          {errors.image && (
            <span className="text-danger">Ảnh sản phẩm là bắt buộc</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="desc_product" className="form-label">
            Cập nhật Description
          </label>
          <textarea
            className="form-control"
            {...register("description")}
            id="desc_product"
            rows={3}
            defaultValue={""}
          />
        </div>

        <button type="submit" className="btn btn-outline-success">
          Cập nhật sản phẩm
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
