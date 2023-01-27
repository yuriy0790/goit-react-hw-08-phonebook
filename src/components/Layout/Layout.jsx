import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { Header, NavList, NavListItem } from './Layout.styled';
const routes = [
  { label: 'Home', path: '/', privatePath: false },
  { label: 'Register', path: '/register', privatePath: false },
  { label: 'Login', path: '/login', privatePath: false },
  { label: 'Contacts', path: '/contacts', privatePath: true },
];

const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoading = useSelector(state => state.auth.isLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <div>
              <nav>
                <NavList>
                  {routes.map(({ label, path, privatePath }) => {
                    return privatePath === isLoggedIn || path === '/' ? (
                      <NavListItem key={path}>
                        <Link to={path}>{label}</Link>
                      </NavListItem>
                    ) : null;
                  })}
                </NavList>
              </nav>
            </div>
            {isLoggedIn && <UserMenu />}
          </Header>
          <main>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};

export default Layout;
