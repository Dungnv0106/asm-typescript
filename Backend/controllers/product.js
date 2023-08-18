import ProductChema from "../models/product";
import ChemeCategory from "../models/category";
import joi from "joi";
const Checkvalidate = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  description: joi.string().required(),
  image: joi.string().required(),
  categoryId: joi.string(),
});

export const create = async (req, res, next) => {
  try {
    const { error } = Checkvalidate.validate(req.body);
    if (error) {
      return res.json({
        error: error.details[0].message,
      });
    }
    const data = await ProductChema.create(req.body);
    // console.log(data);
    //todo thêm id của produc vào Product của Category
    await ChemeCategory.findByIdAndUpdate(data.categoryId, {
      $addToSet: {
        Product: data._id,
      },
    });
    return res.json({
      message: "Thêm thanh công",
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
export const GetAll = async (req, res, next) => {
  try {
    const data = await ProductChema.find();
    return res.json({
      message: "Lấy dữ liệu thanh công",
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
export const GetOne = async (req, res, next) => {
  try {
    const data = await ProductChema.findById(req.params.id);
    return res.json({
      message: "Lấy dữ liệu thanh công",
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
export const Delete = async (req, res, next) => {
  try {
    const data = await ProductChema.findByIdAndDelete({ _id: req.params.id });
    return res.json({
      message: "Xóa thành công",
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
export const Update = async (req, res, next) => {
  try {
    const data = await ProductChema.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json({
      message: "Cập nhật thành công",
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
