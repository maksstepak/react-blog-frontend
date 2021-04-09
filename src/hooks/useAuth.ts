import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../store/authSlice';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    user,
  };
};

export default useAuth;
