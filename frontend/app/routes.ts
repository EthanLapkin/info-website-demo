import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/welcome.tsx"),
    route("windows", "routes/windows.tsx", [
        route("windows-first", "routes/windowsFirst.tsx"),
        route("windows-close-max-min", "routes/windowsCloseMaxMin.tsx"),
        route("windows-create-file", "routes/windowsCreateFile.tsx"),
        route("windows-save-file", "routes/windowsSaveFile.tsx")
    ]),
    route("mac", "routes/mac.tsx", [
        route("mac-first", "routes/macFirst.tsx"),
        route("mac-close-max-min", "routes/macCloseMaxMin.tsx"),
        route("mac-create-file", "routes/macCreateFile.tsx"),
        route("mac-save-file", "routes/macSaveFile.tsx")
    ]),
    route("linux", "routes/linux.tsx", [
        route("linux-disclaimer", "routes/linuxDisclaimer.tsx"),
        route("linux-first", "routes/linuxFirst.tsx"),
        route("linux-close-max-min", "routes/linuxCloseMaxMin.tsx"),
        route("linux-create-file", "routes/linuxCreateFile.tsx"),
        route("linux-save-file", "routes/linuxSaveFile.tsx")
    ]),

] satisfies RouteConfig;
