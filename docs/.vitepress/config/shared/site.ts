import type { HeadConfig } from "vitepress";
import { VITE_BASE_URL } from "./context";

export const head: HeadConfig[] = [
    ["link", { rel: "shortcut icon", href: `${VITE_BASE_URL}logo.svg` }],
    ["link", { rel: "icon", href: `${VITE_BASE_URL}logo.svg`, type: "image/svg+xml" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap",
        rel: "stylesheet",
    }],
    ["meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no",
    }],
    ["meta", {
        name: "keywords",
        content: "为知笔记、UI 设计、界面设计、交互设计、Figma、设计系统",
    }],
    ["meta", { charset: "UTF-8" }],
];

export const siteConfig = {
    rewrites: { "zh/:rest*": ":rest*" },
    ignoreDeadLinks: [/^\/mise(?:\.html)?$/],
    metaChunk: true,
    lang: "zh-CN",
    title: "为知笔记",
    titleTemplate: "Hi，终于等到你",
    description: "为知笔记，系统整理 UI 视觉设计、交互体验、组件规范与设计系统实践",
    head,
    appearance: true,
    base: VITE_BASE_URL,
    lastUpdated: true,
    sitemap: { hostname: `https://ui.weiweixu.cn${VITE_BASE_URL}` },
};

