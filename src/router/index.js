import Home from "../pages/Home";
import SignIn from "../pages/signIn";

export const privateRoutes = [{ path: "/home", component: Home, exact: true }];

export const publicRoutes = [
  { path: "/login", component: SignIn, exact: true },
];
