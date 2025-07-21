import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/welcome.tsx"),
    route("windows", "routes/windows.tsx", [
        route("windows-first", "routes/windowsFirst.tsx"),
        route("windows-close-max-min", "routes/windowsCloseMaxMin.tsx")
    ]),
    route("mac", "routes/mac.tsx", [
        route("mac-first", "routes/macFirst.tsx"),
        route("mac-close-max-min", "routes/macCloseMaxMin.tsx")
    ]),
    route("linux", "routes/linux.tsx", [
        route("linux-first", "routes/linuxFirst.tsx"),
        route("linux-close-max-min", "routes/linuxCloseMaxMin.tsx")
    ]),

] satisfies RouteConfig;
