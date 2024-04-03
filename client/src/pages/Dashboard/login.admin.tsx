import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { getUserData, setUserData } from "@/utils/authStorage";
import { loginUser } from "@/Services/user/endPoints.user.services";
import { LoginValidator } from "@/Schema/user.schema";
import { Card } from "@/components/ui/card";

function LoginForm() {
  const token = getUserData().token;

  const authentication = token ? true : false;

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "samir",
        password: "Samir123@",
      },
      validationSchema: LoginValidator,
      onSubmit: async (values) => {
        try {
          const response = await loginUser(values);
          const { user, token } = response.data;
          setUserData({
            username: user.username,
            token: token,
          });
          window.location.replace("/");
        } catch (error) {
          console.error(error);
          // Handle login error
        }
      },
    });

  if (authentication) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <>
      <div className="flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto w-full max-w-md space-y-8 p-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Admin Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your username and password below to login
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-1">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-xl tracking-wide">
                Email
              </Label>
              <Input
                id="username"
                required
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username ? (
                <div className="h-3 text-sm text-red-500">
                  {errors.username}
                </div>
              ) : (
                <div className="h-3"></div>
              )}
            </div>
            <div className="space-y-1">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-xl tracking-wide">
                  Password
                </Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
              />
              {errors.password && touched.password ? (
                <div className="h-3 text-sm text-red-500">
                  {errors.password}
                </div>
              ) : (
                <div className="h-3"></div>
              )}
              <div className="flex">
                <Link
                  className="right-0 ml-auto inline-block text-sm underline"
                  to="#"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
          <div className="text-center text-sm">
            Don't have an account?
            <Link className="underline" to="/register">
              Sign up
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}

export default LoginForm;
