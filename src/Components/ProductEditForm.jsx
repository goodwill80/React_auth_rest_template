import { useState } from 'react';

function ProductEditForm() {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-4 mb-12"
      >
        <div className="mb-6">
          <label className="font-bold pl-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Product name"
            value={form.name}
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-6">
          <label className="font-bold pl-2" htmlFor="brand">
            Brand
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brand"
            name="brand"
            type="text"
            placeholder="Product brand"
            value={form.brand}
            onChange={handleFormChange}
          />
        </div>

        <div className="mb-6">
          <label className="font-bold pl-2" htmlFor="price">
            Price ($)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
            type="number"
            placeholder="$Price"
            value={form.price}
            onChange={handleFormChange}
          />
        </div>

        <div className="mb-6">
          <label className="font-bold pl-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-success w-full">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ProductEditForm;
