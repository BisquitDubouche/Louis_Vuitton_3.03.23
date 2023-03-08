import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProducts } from "@/contexts/admin/products_context_provider";

const Update = () => {
  const { updateProduct } = useProducts();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(null);
    if (productId) {
      setLoading(true);
      setError(null);
      axios
        .get(`http://localhost:8000/products/${productId}`)
        .then((response) => {
          setLoading(false);
          setProduct(response.data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    }
  }, [productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(productId, formData);
    console.log(`Product with id ${productId} has been updated`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value !== '' ? value : prevFormData[name],
    }));
  };

  const handleIdChange = (event) => {
    setProductId(event.target.value);
  };

  return (
    <div>
      <h2>Update product</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Product ID:
          <input type='text' value={productId} onChange={handleIdChange} />
        </label>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {product ? (
          <>
            <input
              type='text'
              name='name'
              value={formData.name || product.name}
              onChange={handleChange}
              placeholder='name'
            />
            <input
              type='text'
              name='gender'
              value={formData.gender || product.gender}
              onChange={handleChange}
              placeholder='gender'
            />
            <input
              type='text'
              name='size'
              value={formData.size || product.size}
              onChange={handleChange}
              placeholder='size'
            />
            <input
              type='text'
              name='image'
              value={formData.image || product.image}
              onChange={handleChange}
              placeholder='image'
            />
            <input
              type='text'
              name='price'
              value={formData.price || product.price}
              onChange={handleChange}
              placeholder='price'
            />
            <input
              type='text'
              name='color'
              value={formData.color || product.color}
              onChange={handleChange}
              placeholder='color'
            />
            <input
          type='text'
          name='collection'
          value={formData.collection || product.collection}
          onChange={handleChange}
          placeholder='collection'
            />
        <input
          type='text'
          name='category'
          value={formData.category || product.category}
          onChange={handleChange}
          placeholder='category'
        />
        <input
          type='text'
          name='sub_category'
          value={formData.sub_category || product.sub_category}
          onChange={handleChange}
          placeholder='sub_category'
        />
        <input
          type='text'
          name='details'
          value={formData.details || product.details}
          onChange={handleChange}
          placeholder='details'
        />
        </>
        ): <h4>Hi</h4>}
        <button onClick={handleSubmit}>Save Changes</button> 
      </form>
 </div>
  );
};

export default Update
