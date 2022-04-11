import React from "react";
import { FaGitAlt, FaHtml5 } from "react-icons/fa";
import { CgUserlane, CgFigma } from "react-icons/cg";
import { SiCss3, SiBootstrap, SiJavascript } from "react-icons/si";
import { RiCodeBoxFill } from "react-icons/ri";

export const SIdebarData = [
  {
    title: "Git",
    path: "/",
    icon: <FaGitAlt />,
    cName: "nav-text",
  },
  {
    title: "UI / UX",
    path: "/uiux",
    icon: <CgUserlane />,
    cName: "nav-text",
  },
  {
    title: "Figma",
    path: "/figma",
    icon: <CgFigma />,
    cName: "nav-text",
  },
  {
    title: "HTML",
    path: "/html",
    icon: <FaHtml5 />,
    cName: "nav-text",
  },
  {
    title: "CSS",
    path: "/css",
    icon: <SiCss3 />,
    cName: "nav-text",
  },
  {
    title: "Bootstrap",
    path: "/bootstrap",
    icon: <SiBootstrap />,
    cName: "nav-text",
  },
  {
    title: "Javascript",
    path: "/javascript",
    icon: <SiJavascript />,
    cName: "nav-text",
  },
  {
    title: "Clean Code",
    path: "/cleancode",
    icon: <RiCodeBoxFill />,
    cName: "nav-text",
  },
];
