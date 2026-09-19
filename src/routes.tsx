import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CaseStudyRevampPage } from "./pages/CaseStudyRevampPage";
import { CaseStudyLampuPage } from "./pages/CaseStudyLampuPage";
import { CaseStudyLampuV2Page } from "./pages/CaseStudyLampuV2Page";
import { CaseStudyOctobitsPage } from "./pages/CaseStudyOctobitsPage";
import { CreationPage } from "./pages/CreationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/creation",
    Component: CreationPage,
  },
  {
    path: "/creation-page",
    Component: CreationPage,
  },
  {
    path: "/case-study/lampu-v2-revamp",
    Component: CaseStudyRevampPage,
  },
  {
    path: "/case-study/lampu",
    Component: CaseStudyLampuPage,
  },
  {
    path: "/case-study/lampu-marketplace",
    Component: CaseStudyLampuV2Page,
  },
  {
    path: "/case-study/octobits",
    Component: CaseStudyOctobitsPage,
  },
]);
