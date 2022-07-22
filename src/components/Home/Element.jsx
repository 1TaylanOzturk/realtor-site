import React from "react";
import Image from "../Image";
import "./style.css";

function Element({ children }) {
  return <div className="element-container">{children}</div>;
}

function Img(props) {
  return <Image {...props} />;
}

function Title({ children }) {
  return <h1 className="element-title">{children}</h1>;
}

function Description({ children }) {
  return <p className="element-description">{children}</p>;
}

Element.Title = Title;
Element.Description = Description;
Element.Image = Img;
export default Element;
