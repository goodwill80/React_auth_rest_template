import CartSummaryItem from './CartSummaryItem';
import { useSignInGlobalContext } from '../Context/SignInContext';
import { useNavigate } from 'react-router-dom';

function CartSummaryContainer() {
  const redirect = useNavigate();
  const { cart, clearAllcartsByUser } = useSignInGlobalContext();

  const items = cart?.cartItems;

  const deleteAllCartItems = (userid) => {
    clearAllcartsByUser(userid);
    redirect('/products');
  };

  if (items?.length <= 0 || items == null) {
    return (
      <div className="overflow-x-auto w-auto md:w-full mt-10">
        <p>There are no cart items</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto w-auto md:w-[80%] flex flex-col">
      <div className="flex flex-col justify-center items-start py-6 pl-2">
        <h1 className="text-2xl font-bold">My List</h1>
        <p>{items?.length} items</p>
      </div>

      <table className="table w-full">
        {/* head */}
        <thead>
          <tr className="bg-green-500">
            <th className="bg-gray-700 text-white">Item</th>
            <th className="bg-gray-700 text-white">Quantity</th>
            <th className="bg-gray-700 text-white">Price</th>
            <th className="bg-gray-700 text-white">Total</th>
            <th className="bg-gray-700 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <CartSummaryItem key={index} item={item} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th className="bg-gray-700 text-white"></th>
            <th className="bg-gray-700 text-white"></th>
            <th className="bg-gray-700 text-white text-md">Subtotal: </th>
            <th className="bg-gray-700 text-white text-md">${cart.cost}</th>
            <th className="bg-gray-700 text-white text-md">
              Qty: {cart.quantity}
            </th>
          </tr>
        </tfoot>
      </table>
      <div className="flex justify-center items-center py-10 px-4 space-x-4">
        <button onClick={deleteAllCartItems} className="btn btn-warning btn-sm">
          Clear
        </button>
        <button className="btn btn-primary btn-sm">Checkout</button>
      </div>
    </div>
  );
}

export default CartSummaryContainer;
