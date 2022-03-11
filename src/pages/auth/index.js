import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";


export default function RequireAuth() {
  // let auth = useAuth(); 待完善存储用户信息
  let auth = {user: null};
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
