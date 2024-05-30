import { RouteElement } from "./index.types";
import RootLayout from "@layouts/rootLayout";
import ConnectApi from "@pages/connectApi";
import Home from "@pages/home";
import Update from "@pages/update";
import Test from "@test/testcomponents";
import Fourth from "@pages/home/fourthdetail";
import Third from "@pages/home/thirddetail";
import Second from "@pages/home/seconddetail";
import First from "@pages/home/firstdetail";
import Fifth from "@pages/home/fifthdetail";
import OnboardingLayout from "@layouts/onBoardingLayout";
import Login from "@pages/login";
import Register from "@pages/register";

const mainRoutes: RouteElement[] = [

  {
    path: "/",
    element:<OnboardingLayout/>,
  },
    {
      path: "login",
      element:<Login/>,
    },
    {
      path: "register",
      element:<Register/>,
    },
  {
    path: "/home",
    element: <RootLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
        children: [
          {
            element: <First />,
            index: true,
            path: "",
          },
          {
            element: <Second />,
            path: "lagride",
          },
          {
            element: <Third />,
            path: "rida",
          },
          {
            element: <Fourth />,
            path: "shuttler",
          },
          {
            element: <Fifth />,
            path: "uber",
          },
        ],
      },
      { path: "connectApi", element: <ConnectApi /> },
      { path: "update", element: <Update /> },
    ],
  },
  
];

const testRoutes: RouteElement[] = [
  { path: "/testcomponent", element: <Test /> }
];
export { mainRoutes, testRoutes };
