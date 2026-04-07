import React from "react";
import { IconSun, IconMoon } from "./Icones";

export const Cabecalho = ({ title, subTitle, isDarkMode, setIsDarkMode }) => {
  return (
    <header>
      <div className="header-titles">
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      <div className="header-actions">
        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode((prev) => !prev)}
          title="Trocar Tema"
        >
          {isDarkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};
