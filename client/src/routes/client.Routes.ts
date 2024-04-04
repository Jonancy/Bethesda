import dashboardAdmin from "@/pages/Dashboard/dashboard.admin";
import Login from "@/pages/Dashboard/login.admin";
import { lazy } from "react";
const BlogLists = lazy(() => import("@/pages/home/blogLists"));
const Services = lazy(() => import("@/pages/home/services"));
const AboutUs = lazy(() => import("@/pages/home/aboutUs"));
const HomePage = lazy(() => import("@/pages/home/homePage"));
const NewsArticlesLists = lazy(() => import("@/pages/home/newsArticles"));
const SpeciicServices = lazy(()=> import("@/pages/home/speciicServices")) ;
const  SpecificBlogs =lazy(()=> import("@/pages/home/specificBlogs")) ;


export const vendorRoutes = [
  //!Need to put the id of the vendors on to the url

  {
    id: "home",
    path: "/",
    element: HomePage,
    hasHomeLayout: true,
  },
  {
    id: "aboutUs",
    path: "/about-us",
    element: AboutUs,
    hasHomeLayout: true,
  },
  {
    id: "services",
    path: "/services",
    element: Services,
    hasHomeLayout: true,
  },
  {
    id: "blogs",
    path: "/blogs",
    element: BlogLists,
    hasHomeLayout: true,
  },
  {
    id: "blogs",
    path: "/newsArticles",
    element: NewsArticlesLists,
    hasHomeLayout: true,
  },
  {
    id: "blogs",
    path: "/services/specific-service",
    element: SpeciicServices,
    hasHomeLayout: true,
  },
  {
    id: "blogs",
    path: "/services/specific-blogs",
    element: SpecificBlogs,
    hasHomeLayout: true,
  },
  {
    id: "login",
    path: "/admin/login",
    element: Login,
    hasAdminLayout: true,
  },
  {
    id: "dashboard",
    path: "/admin/dashboard",
    element: dashboardAdmin,
    hasAdminLayout:true,
  },
]