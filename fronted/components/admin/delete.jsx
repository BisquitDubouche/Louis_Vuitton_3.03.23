import React, { useState } from 'react';
import { useProducts } from '@/contexts/admin/products_context_provider';

const Delete = () => {
  const { deleteProduct } = useProducts();
  const [productId, setProductId] = useState('');

  const handleChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteProduct(productId);
    console.log(`Product with id ${productId} has been deleted`);
    setProductId('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Product ID to Delete:
          <input type="text" value={productId} onChange={handleChange} />
        </label>
        <button type="submit">DELETE PRODUCT</button>
      </form>
    </div>
  );
};

export default Delete;
