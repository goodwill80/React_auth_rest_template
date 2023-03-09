import { Navigate } from 'react-router-dom';
import { useSignInGlobalContext } from '../Context/SignInContext';

function ProtectedRoute({ children }) {
  const { user } = useSignInGlobalContext();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
