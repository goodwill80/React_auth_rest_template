import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from 'react-icons/hi';
import { useSignInGlobalContext } from '../Context/SignInContext';

function CartSummaryItem({ item }) {
  const { addToCart, decrementCart, deleteCart } = useSignInGlobalContext();
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-10 h-12">
                <img
                  src="https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.product.name}</div>
              <span className="badge badge-ghost badge-sm">Product name</span>
            </div>
          </div>
        </td>
        <td>
          <div className="flex justify-start items-center">
            <span className="cursor-pointer">
              <HiOutlineArrowSmUp onClick={() => addToCart(item.product.id)} />
            </span>
            {item.quantity}
            <span className="cursor-pointer">
              <HiOutlineArrowSmDown
                onClick={() => decrementCart(item.product.id)}
              />
            </span>
            <br />
          </div>
        </td>
        <td>${item.product.price}</td>
        <td>${item.product.price * item.quantity}</td>
        <th>
          <div className="space-x-2">
            <button
              onClick={() => deleteCart(item.id)}
              className="btn btn-error text-white btn-xs"
            >
              X
            </button>
          </div>
        </th>
      </tr>
    </>
  );
}

export default CartSummaryItem;
