import { useAuth0 } from '@auth0/auth0-react';
import { redirect } from 'react-router-dom';
import { Spin } from 'antd';

const PrivateRoute = ({ children }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    redirect(loginWithRedirect());
    return (
      <div>
        <Spin /> Redirect to Login Page...
      </div>
    );
  }

  return children;
};
export default PrivateRoute;
