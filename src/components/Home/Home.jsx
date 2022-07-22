import React from "react";
import { Button } from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import Element from "./Element";
import Image from "../Image";
import { useTranslation } from "react-i18next";
import "./style.css";

function Home() {
  const { t } = useTranslation();
  const realtorImg = require("../../assets/realtor.jpg");
  const keyHouseImg = require("../../assets/keyhouse.png");
  const rentHouseImg = require("../../assets/rent-house.png");
  const consultantImg = require("../../assets/consultant.png");
  const purchaseHouseText =
    "Ev Satın alırken ya da evinizi satarken güvenilir ve kaliteli bir hizmet ile sürecin tamamında yanınızda, sizinleyim.";
  const rentHouseText =
    "Evinizi kiraya vermek ve ev kiralamak için yasalara tam uyumlu kira kontratı ile tüm süreçlerde sizin yanınızdayım.";
  const consultText =
    "Gayrimenkul hukuku, doğru fiyat analizi ve alım/satım ile ilgili tüm teknik sorularınız için iletişime geçebilirsiniz.";

  return (
    <main>
      <Jumbotron>
        <Jumbotron.Title>Güler Gayrimenkul</Jumbotron.Title>
        <Jumbotron.Body>
          {t("Dürüst, Güvenilir ve Kaliteli Hizmet")}
        </Jumbotron.Body>
        <Jumbotron.Footer>
          <form action="/contact">
            <Button type="submit" variant="dark" className="btn-sm">
              {t("İletişim")}
            </Button>
          </form>
        </Jumbotron.Footer>
      </Jumbotron>
      <div className="realtor-container">
        <div className="inner--realtor-container">
          <div className="realtor-img">
            <Image alt="realtor.jpg" src={realtorImg} />
          </div>
          <div className="realtor-content">
            <h1 className="realtor--bio-title">Serkan Güler</h1>
            <h5 className="realtor-bio">
              {t(
                "Güvenilir, dürüst ve kaliteli hizmet anlayışı ile, siz değerli müşterilerimin her zaman yanındayım."
              )}
            </h5>
          </div>
        </div>
      </div>
      <div className="outer--element-container">
        <Element>
          <Element.Image
            className="keyhouse-img"
            src={keyHouseImg}
            alt="keyhouse.png"
          />
          <Element.Title>{t("Ev Satın Alın")}</Element.Title>
          <Element.Description>{t(purchaseHouseText)}</Element.Description>
        </Element>
        <Element>
          <Element.Image
            className="renthouse-img"
            src={rentHouseImg}
            alt="rent-house.png"
          />
          <Element.Title>{t("Ev Kiralayın")}</Element.Title>
          <Element.Description>{t(rentHouseText)}</Element.Description>
        </Element>
        <Element>
          <Element.Image
            className="consultant-img"
            src={consultantImg}
            alt="consultant.png"
          />
          <Element.Title>{t("Danışın")}</Element.Title>
          <Element.Description>{t(consultText)}</Element.Description>
        </Element>
      </div>
    </main>
  );
}

export default Home;
