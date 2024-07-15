import React, { lazy } from "react";
import Top from "@/pages/Layout/Top";
import Login from "@/pages/Login";
import SkeletonLoading from "@/pages/SkeletonLoading";
import { Navigate } from "react-router-dom";
import { routesType } from "@/types/route";

const Error404 = lazy(() => import("@/pages/Error/404"));
const About = lazy(() => import("@/pages/About"));
const Page = lazy(() => import("@/pages/Page"));
const Menu = lazy(() => import("@/pages/User/Menu"));
const User02 = lazy(() => import("@/pages/User/User02"));
const User03 = lazy(() => import("@/pages/User/User03"));
const Files = lazy(() => import("@/pages/Files"));
const Team01 = lazy(() => import("@/pages/Team/Team01"));
const Team02 = lazy(() => import("@/pages/Team/Team02"));
const Home = lazy(() => import("@/pages/Home"));

const withLoadingComponent = (Comp: JSX.Element) => (
  <React.Suspense fallback={<SkeletonLoading />}>{Comp}</React.Suspense>
);
const routes: routesType[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Top />,
    exact: true,
    name: "menuRoutes",
    children: [
      {
        path: "/home",
        element: withLoadingComponent(<Home />),
      },
      {
        path: "/about",
        element: withLoadingComponent(<About />),
        meta: {
          title: "About",
        },
      },
      {
        path: "/page",
        element: withLoadingComponent(<Page />),
        meta: {
          title: "Page",
        },
      },
      {
        path: "/files",
        element: withLoadingComponent(<Files />),
        meta: {
          title: "Files",
        },
      },
      {
        path: "/user",
        meta: {
          title: "User",
        },
        children: [
          {
            path: "/user/menu",
            element: withLoadingComponent(<Menu />),
            meta: {
              title: "Menu",
            },
          },
          {
            path: "/user/user-02",
            element: withLoadingComponent(<User02 />),
            meta: {
              title: "User02",
            },
          },
          {
            path: "/user/user-03",
            element: withLoadingComponent(<User03 />),
            meta: {
              title: "User03",
            },
          },
        ],
      },
      {
        path: "/team",
        meta: {
          title: "Team",
        },
        children: [
          {
            path: "/team/team-01",
            element: withLoadingComponent(<Team01 />),
            meta: {
              title: "Team01",
            },
          },
          {
            path: "/team/team-02",
            element: withLoadingComponent(<Team02 />),
            meta: {
              title: "Team02",
            },
          },
        ],
      },
    ],
  },
];

export default routes;
