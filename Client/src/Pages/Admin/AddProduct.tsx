import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { GetAllCategory } from "../../API/product";
import { useNavigate } from "react-router-dom";
interface formData {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: string;
}
const AddProduct = (props: any) => {
  const [Image, SetImage] = useState("");
  const [Category, setcategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetAllCategory().then(({ data }) => setcategory(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const OnHandSubmit: SubmitHandler<formData> = async (data: formData) => {
    data.image = await SubmitImage();
    props.Onadd(data);
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
      <form onSubmit={handleSubmit(OnHandSubmit)}>
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
            <span className="text-danger">Tên sản phẩm là bắt buộc</span>
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
            Mô Tả Sản Phẩm
          </label>
          <textarea
            className="form-control"
            {...register("description")}
            id="desc_product"
            rows={3}
            defaultValue={""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Danh Mục Sản Phẩm</label>
          <br />
          <select
            className="form-select"
            aria-label="Default select example"
            {...register("categoryId", {
              required: true,
            })}
          >
            <option selected>--Vui lòng chọn danh mục--</option>
            {Category?.data?.map((data: any) => (
              <option key={data._id} value={data._id}>
                {data.name}
              </option>
            ))}
          </select>

          {/* <textarea className="form-control" {...register("description", {
      required : true
    })} id="exampleFormControlTextarea1" rows={3} defaultValue={""} /> */}
        </div>

        <button type="submit" className="btn btn-outline-success">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
