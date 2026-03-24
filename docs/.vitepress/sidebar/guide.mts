import {DefaultTheme} from "vitepress";
type SidebarItem = DefaultTheme.SidebarItem;
export default [
    {text: "Installation", link: "/guide/installation"},
    {
        text: "Tuning",
        items: [
            { text: "Velocity Tuners", link: "/guide/velocity" },
            { text: "Localization Test", link: "/guide/localization-test" },
            { text: "FeedForward Tuner", link: "/guide/feedforward-tuner" },
            { text: "Current Limiting Test", link: "/guide/current-limiting-test" },
        ]
    }
] satisfies SidebarItem[]