import React, { useState } from "react";
import { useProducts } from "@/contexts/admin/products_context_provider";

const Add = () => {
  const { addProduct } = useProducts();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    size: [],
    image: "",
    price: "",
    color: "",
    collection: "",
    category: "",
    sub_category: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "size") {
      const sizeArray = value.split(", ");
      setFormData((prevState) => ({ ...prevState, [name]: sizeArray }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      gender,
      size,
      image,
      price,
      color,
      collection,
      category,
      sub_category,
      details,
    } = formData;

    if (
      !name ||
      !gender ||
      !size.length ||
      !image ||
      !price ||
      !color ||
      !collection ||
      !category ||
      !sub_category ||
      !details
    ) {
      alert("Please fill in all fields");
      return;
    }
    addProduct(formData);
    console.log("Product has been added");
    setFormData({
      name: "",
      gender: "",
      size: [],
      image: "",
      price: "",
      color: "",
      collection: "",
      category: "",
      sub_category: "",
      details: "",
    });
  };

  return (
      <div>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='name'
          />
          <input
            type='text'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            placeholder='gender'
          />
          <input
            type='text'
            name='size'
            value={formData.size.join(", ")}
            onChange={handleChange}
            placeholder='size'
          />
          <input
            type='text'
            name='image'
            value={formData.image}
            onChange={handleChange}
            placeholder='image'
          />
          <input
            type='text'
            name='price'
            value={formData.price}
            onChange={handleChange}
            placeholder='price'
          />
          <input
            type='text'
            name='color'
            value={formData.color}
            onChange={handleChange}
            placeholder='color'
          />
          <input
            type='text'
            name='collection'
            value={formData.collection}
            onChange={handleChange}
            placeholder='collection'
          />
          <input
            type='text'
            name='category'
            value={formData.category}
            onChange={handleChange}
            placeholder='category'
          />
          <input
            type='text'
            name='sub_category'
            value={formData.sub_category}
            onChange={handleChange}
            placeholder='sub_category'
          />
          <input
            type='text'
            name='details'
            value={formData.details}
            onChange={handleChange}
            placeholder='details'
          />
          <button type='submit'>ADD PRODUCT</button>
        </form>
      </div>
  );
};

export default Add;
