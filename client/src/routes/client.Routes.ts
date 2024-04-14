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
import SpecificNews from "@/pages/home/specificNews";
import BlogAdmin from "@/pages/Dashboard/blogs.admin";
import NewsAdmin from "@/pages/Dashboard/NewsArticle";
import ServiceAdmin from "@/pages/Dashboard/Service.admin";
const MainGallery = lazy(() => import("@/pages/home/mainGallery"));
const EditGallery = lazy(() => import("@/pages/Dashboard/updateGallery.admin"));
const BlogLists = lazy(() => import("@/pages/home/blogLists"));
const Services = lazy(() => import("@/pages/home/services"));
const AboutUs = lazy(() => import("@/pages/home/aboutUs"));
const HomePage = lazy(() => import("@/pages/home/homePage"));
const NewsArticlesLists = lazy(() => import("@/pages/home/newsArticles"));
const SpecificServices = lazy(() => import("@/pages/home/specificServices"));
const SpecificBlogs = lazy(() => import("@/pages/home/specificBlogs"));

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
    id: "articles",
    path: "/news-articles",
    element: NewsArticlesLists,
    hasHomeLayout: true,
  },
  {
    id: "gallery",
    path: "/gallery",
    element: MainGallery,
    hasHomeLayout: true,
  },
  {
    id: "contactus",
    path: "/contact-us",
    element: ContactUs,
    hasHomeLayout: true,
  },
  {
    id: "service",
    path: "/services/specific-service/:service_id",
    element: SpecificServices,
    hasHomeLayout: true,
  },
  {
    id: "blogs",
    path: "/blogs/specific-blogs/:blog_id",
    element: SpecificBlogs,
    hasHomeLayout: true,
  },
  {
    id: "news",
    path: "/news-articles/specific-news/:news_id",
    element: SpecificNews,
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
    hasAdminLayout: true,
  },
  {
    id: "admin-mainDetails",
    path: "/admin/main-details",
    element: MainDetailsAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-services",
    path: "/admin/services",
    element: ServiceAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-add-service",
    path: "/admin/add-services",
    element: AddServicesAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-add-blog",
    path: "/admin/add-blog",
    element: AddBlogAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-blog",
    path: "/admin/blogs",
    element: BlogAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-add-news",
    path: "/admin/add-news",
    element: AddNewsAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-add-news-article",
    path: "/admin/add-news-article",
    element: AddNewsAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-news-article",
    path: "/admin/news-article",
    element: NewsAdmin,
    hasAdminLayout: true,
  },

  {
    id: "admin-member",
    path: "/admin/member",
    element: MemberAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-add-member",
    path: "/admin/add-member",
    element: AddTeamMemberAdmin,
    hasAdminLayout: true,
  },
  {
    id: "admin-add-member",
    path: "/admin/edit-gallery",
    element: EditGallery,
    hasAdminLayout: true,
  },
];
