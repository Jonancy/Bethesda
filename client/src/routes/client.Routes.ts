import AddTeamMemberAdmin from "@/pages/Dashboard/addTeamMember.admin";
import AddBlogAdmin from "@/pages/Dashboard/addBlog.admin";
import dashboardAdmin from "@/pages/Dashboard/dashboard.admin";
import Login from "@/pages/Dashboard/login.admin";
import AddServicesAdmin from "@/pages/Dashboard/AddServices.admin";
import ContactUs from "@/pages/home/contactUs";
import { lazy } from "react";
import MemberAdmin from "@/pages/Dashboard/TeamMember.admin";
import AddNewsAdmin from "@/pages/Dashboard/addNews.admin";
import MainDetailsAdmin from "@/pages/Dashboard/mainDetails.admin";
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
    id: "contactus",
    path: "/contact-us",
    element: ContactUs,
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
  },
  {
    id: "dashboard",
    path: "/admin/dashboard",
    element: dashboardAdmin,
    hasAdminLayout:true,
  },
  {
    id: "admin-mainDetails",
    path: "/admin/main-details",
    element: MainDetailsAdmin,
    hasAdminLayout:true,
  },
  {
    id: "admin-services",
    path: "/admin/add-services",
    element: AddServicesAdmin,
    hasAdminLayout:true,
  },
  {
    id: "admin-add-blog",
    path: "/admin/add-blog",
    element: AddBlogAdmin,
    hasAdminLayout:true,
  },
  {
    id: "admin-add-news",
    path: "/admin/add-news",
    element: AddNewsAdmin,
    hasAdminLayout:true,
  },
  {
    id: "admin-member",
    path: "/admin/member",
    element: MemberAdmin,
    hasAdminLayout:true,
  },
  {
    id: "admin-add-member",
    path: "/admin/add-member",
    element: AddTeamMemberAdmin,
    hasAdminLayout:true,
  },

]