import { vendorRoutes } from "./client.Routes";
import { errorRoutes } from "./error.Routes";


export const allRoutes = [...vendorRoutes,...errorRoutes]