import React from "react";
import { createRoot } from "react-dom/client";

const element = (
  <form>
    <label htmlFor="search-input">Search:</label>
    <input id="search-input" />
    <button aria-label="Submit" className="submit-btn">
      <img
        alt="right-arrow"
        src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
      />
    </button>
  </form>
);


const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);

// output is not visible because jsx cannot be parsed without a bundler.
//so i will have to use vite-Vite gives you a bundler (and a dev server)
