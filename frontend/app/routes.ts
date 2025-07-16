import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/welcome.tsx"),
    route("windows", "routes/windows.tsx", [
        route("windows-first", "routes/windowsFirst.tsx")
    ]),
    route("mac", "routes/mac.tsx", [
        route("mac-first", "routes/macFirst.tsx")
    ]),
    route("linux", "routes/linux.tsx", [
        route("linux-first", "routes/linuxFirst.tsx")
    ]),

] satisfies RouteConfig;
