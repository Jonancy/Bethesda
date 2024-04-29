import { Fragment, LazyExoticComponent, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AdminChecker, AuthChecker } from "./AuthChecker.routes";
import { allRoutes } from "./all.Routes";
import MainLayout from "@/layouts/mainLayout";
import AdminLayout from "@/layouts/adminLayout";
import MainLoader from "@/pages/spinner/mainLoader";
import AuthChecker from "./authChecker";

function MainWrapper({
  route,
  children,
}: {
  route: {
    hasHomeLayout: boolean;
    hasAdminLayout: boolean;
    requiredAuth: boolean;
    layout: LazyExoticComponent<>;
  };
  children: React.ReactNode;
}) {
  const PrivateWrapper = route.requiredAuth ? AuthChecker : Fragment;
  const HomeWrapper = route.hasHomeLayout ? MainLayout : Fragment;
  const AdminWrapper = route.hasAdminLayout ? AdminLayout : Fragment;

  return (
    <PrivateWrapper>
      <AdminWrapper>
        <HomeWrapper>{children}</HomeWrapper>
      </AdminWrapper>
    </PrivateWrapper>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<MainLoader />}>
        <Routes>
          {allRoutes.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <MainWrapper route={route}>
                    <route.element />
                  </MainWrapper>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
