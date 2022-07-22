import React from "react";

function Jumbotron({ children }) {
  return <div className="jumbotron-container">{children}</div>;
}

function Title({ children }) {
  return <h1 className="jumbotron-title">{children}</h1>;
}

function Body({ children }) {
  return <h4 className="jumbotron-body">{children}</h4>;
}

function Footer({ children }) {
  return <div className="jumbotron-footer">{children}</div>;
}

Jumbotron.Title = Title;
Jumbotron.Body = Body;
Jumbotron.Footer = Footer;
export default Jumbotron;
