import React from "react";
import { FaJsSquare, FaReact, FaGitSquare, FaHtml5 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMui,
  SiCss3,
  SiRedux,
  SiPwa,
  SiWordpress,
} from "react-icons/si";

const icons = {
  html: (
    <FaHtml5
      style={{
        color: "#e34c26",
        height: "25",
        width: "25",
        backgroundColor: "#fff",
      }}
    />
  ),
  css: (
    <SiCss3
      style={{
        color: "#264de4",
        height: "25",
        width: "25",
        backgroundColor: "#fff",
      }}
    />
  ),
  redux: (
    <SiRedux
      style={{
        color: "#764ABC",
        height: "25",
        width: "25",
      }}
    />
  ),
  pwa: (
    <SiPwa
      style={{
        color: "#fff",
        height: "25",
        width: "25",
      }}
    />
  ),
  wordpress: (
    <SiWordpress
      style={{
        color: "#00749C",
        height: "25",
        width: "25",
      }}
    />
  ),
  js: (
    <FaJsSquare
      style={{
        color: "#f7df1e",
        height: "25",
        width: "25",
      }}
    />
  ),
  react: (
    <FaReact
      style={{
        color: "#61DBFB",
        height: "25",
        width: "25",
      }}
    />
  ),
  next: (
    <SiNextdotjs
      style={{
        color: "#fff",
        height: "25",
        width: "25",
      }}
    />
  ),
  git: (
    <FaGitSquare
      style={{
        color: "#fff",
        height: "25",
        width: "25",
      }}
    />
  ),
  mui: (
    <SiMui
      style={{
        color: "#007FFF",
        height: "25",
        width: "25",
      }}
    />
  ),
};
function Skill({ title, progress, icon }) {
  return (
    <div className="skill">
      <div className="skill-lable">
        <span className="skill-icon">{icons[icon]}</span>
        <span className="skill-title">{title}</span>
      </div>
      <div className="skill-progress">
        <div className="skill-progress-outer">
          <span
            className="skill-progress-inner"
            style={{ width: progress }}
          ></span>
        </div>
        <span className="skill-progress-value"> {progress}</span>
      </div>
    </div>
  );
}

export default Skill;
