import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Advert() {
  const { t } = useTranslation();
  const style = {
    padding: "5rem",
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center shadow-lg"
      style={style}
    >
      <h1>{t("Size Yardımcı Olmak İçin Sabırsızlanıyorum")}</h1>
      <form action="/contact">
        <Button type="submit" className="btn-lg" variant="dark">
          {t("İletişim")}
        </Button>
      </form>
    </div>
  );
}

export default Advert;
