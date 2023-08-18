import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

interface formData {
  name: string;
}

const AddCategory = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const OnHandSubmit: SubmitHandler<formData> = (data: formData) => {
    props.Onadd(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(OnHandSubmit)}>
        <div className="mb-3">
          <label htmlFor="name_cate" className="form-label">
            Tên danh mục
          </label>
          <input
            type="text"
            className="form-control"
            {...register("name", {
              required: true,
            })}
            id="name_cate"
          />
          {errors.name && (
            <span className="text-danger">*Tên danh mục là bắt buộc</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm danh mục
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
