import { Link } from 'react-router-dom';
import products from '../SeedData';
import { useSignInGlobalContext } from '../Context/SignInContext';

function SingleProduct({ id }) {
  const { user } = useSignInGlobalContext();
  const prod = products.find((p) => p.id === id);

  return (
    <div className="px-20 min-h-[73vh] h-auto">
      <div className="mt-4">
        <Link to="/products">
          <span className="font-sans text-cyan-600">Back to products</span>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 mt-10">
        {/* Occupy 2 columns of the parent */}
        <div className="md:col-span-2 m-auto shadow-2xl rounded-md">
          <img
            className="h-[500px] w-[550px] rounded-md"
            src={prod.img}
            alt={prod.name}
          />
        </div>
        {/* 2nd Column */}
        <div className="mt-[50px]">
          <ul>
            <li>
              <h1 className="text-lg font-bold mb-4">Product Info</h1>
            </li>
            <div className="mb-6">
              <li className="font-bold">Name:</li>
              <span className="pl-2">{prod.name}</span>
            </div>
            <div className="mb-6">
              <li className="font-bold">Price: </li>
              <span className="pl-2">${prod.price}</span>
            </div>
            <div className="mb-6">
              <li className="font-bold">Description: </li>
              <span className="pl-2">{prod.description}</span>
            </div>

            <div className="flex flex-col mb-4 space-x-4">
              <div className="flex space-x-4">
                <label htmlFor="number-dd">
                  <p className="font-bold">Quantity</p>
                </label>
                <select
                  className="w-18 border border-green-300 px-2 text-sm"
                  id="number-dd"
                  name="number"
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
                    <option key={index} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <button className="btn btn-secondary btn-xs w-[50px]">
                  Add
                </button>
              </div>
            </div>
          </ul>
          {user ? (
            <div className="mt-4 w-[400px] py-4">
              <div className="flex space-x-2">
                <button className="btn btn-success btn-sm text-gray-100">
                  Edit
                </button>
                <button className="btn btn-error btn-sm text-gray-100">
                  Remove
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
