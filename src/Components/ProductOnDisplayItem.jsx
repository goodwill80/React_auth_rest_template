import { useSignInGlobalContext } from '../Context/SignInContext';
import { Link } from 'react-router-dom';

function ProductOnDisplayItem({ id, name, price, img, description }) {
  const { user } = useSignInGlobalContext();
  return (
    <div>
      <div>
        <div className="shadow-lg w-[580px] min-h-[360px] h-auto p-8 rounded-lg flex flex-col">
          <div className="flex justify-between">
            <img
              src={img}
              alt={name}
              className="w-[250px] h-[200px] shadow-xl"
            />
            <div className="mr-16 w-[180px]">
              <h1 className="text-2xl font-bold">{name}</h1>

              <div className="flex justify-between items-baseline">
                <p className="mt-2 font-bold">Price: </p>
                <p>${price}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-md font-bold mt-4">Description:</h1>
            <p className="mt-2 text-gray-500">{description}</p>
          </div>
          <div className="flex gap-2 items-baseline mt-3 justify-end">
            {user ? (
              <>
                <button className="btn btn-sm text-white">Add to Cart</button>
                <Link to={`/product/edit/${id}`}>
                  <button className="btn btn-warning btn-sm text-white">
                    Edit
                  </button>
                </Link>
                <button className="btn btn-error btn-sm text-white">
                  Delete
                </button>
              </>
            ) : (
              <button className="btn btn-sm text-white">Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOnDisplayItem;
