import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./style.css";

export default function NavigationBar() {
  const [buttonInnerText, setButtonInnerText] = useState("TRANSLATE");
  const { t, i18n } = useTranslation();

  const translatePage = () => {
    if (buttonInnerText === "TRANSLATE") {
      i18n.changeLanguage("en");
      setButtonInnerText("ÇEVİR");
    } else {
      i18n.changeLanguage("tr");
      setButtonInnerText("TRANSLATE");
    }
  };

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand translate="no" className="navbar-brand" href="/">
          Güler Gayrimenkul
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-responsivity" />
        <Navbar.Collapse id="navbar-responsivity">
          <Nav className="outer--nav-links ms-auto my-2 my-lg-0">
            <Nav.Link href="/">{t("Anasayfa")}</Nav.Link>
            <Nav.Link href="/about">{t("Hakkımda")}</Nav.Link>
            <Nav.Link href="/contact">{t("İletişim")}</Nav.Link>
            <Nav.Link href="/portfolios">{t("Portföyler")}</Nav.Link>
            <Nav.Link onClick={translatePage}>{buttonInnerText}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
