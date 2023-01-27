import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>user email</p>
      <button type="button" onClick={handleClick}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
