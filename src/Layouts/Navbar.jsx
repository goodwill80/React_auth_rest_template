import { Link, useNavigate } from 'react-router-dom';

import { GiBeech } from 'react-icons/gi';
import { RiShoppingCartLine } from 'react-icons/ri';

import { useSignInGlobalContext } from '../Context/SignInContext';

function Navbar() {
  const redirect = useNavigate();
  const { signout } = useSignInGlobalContext();

  const logout = async () => {
    try {
      const response = await signout();
      console.log(response);
      redirect('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <nav className="sticky top-0 z-20 bg-gray-100 shadow-xl w-full py-7 px-10">
      <div className="flex justify-between items-center">
        {/* LOGO and COMPANY NAME */}
        <div className="flex justify-center items-center space-x-3">
          <Link to="/">
            <GiBeech size={37} color={'green'} />
          </Link>
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-wider text-green-900">
              Tree House Market
            </h1>
          </Link>

          <div className="flex justify-center items-center space-x-3 pl-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
          </div>
        </div>
        {/* MENU */}
        <div className="flex justify-center items-center space-x-4 font-medium">
          <Link to="/signup">Sign up</Link>
          <Link to="/account">Account</Link>
          <div onClick={logout}>
            <Link>Log out</Link>
          </div>

          <div className="relative">
            <RiShoppingCartLine size={25} />
            <div className="bg-green-600 absolute rounded-xl px-2 py-1 top-0 left-5">
              <p className="text-white text-xs">0</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
