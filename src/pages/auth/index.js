import { useSelector } from 'react-redux';

import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function RequireAuth() {
  // let auth = useAuth(); 可封装成一个hook
  const username = useSelector(state => state.login.username);
  let location = useLocation();
  if (!username) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
