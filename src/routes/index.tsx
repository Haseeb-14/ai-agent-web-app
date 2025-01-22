import { ReactNode } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import { AboutPage, CaseStudy, Home, Pricing, RequestDemo } from "../pages";

export default function Routes(): ReactNode {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/pricing", element: <Pricing /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/case-study", element: <CaseStudy /> },
        { path: "/request-demo", element: <RequestDemo /> },
      ],
    },
  ]);
}
