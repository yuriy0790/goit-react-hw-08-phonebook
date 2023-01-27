import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { selectUser } from 'redux/auth/selectors';
import { GradientButton, UserEmail, UserMenuWpar } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWpar>
      <UserEmail>
        user email
        {/* {user.email} */}
      </UserEmail>

      <GradientButton type="button" onClick={handleClick}>
        LOG OUT
      </GradientButton>
    </UserMenuWpar>
  );
};

export default UserMenu;
