import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from "react-router-dom";

import BaseLayout from '@/layouts/index';

export default function RequireAuth() {
  // let auth = useAuth(); 可封装成一个hook
  const user = localStorage.getItem("username");
  const username = useSelector(state => state.login.username) || user;
  let location = useLocation();
  if (!username) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}
