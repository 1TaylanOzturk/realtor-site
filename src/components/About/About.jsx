import React from "react";
import Image from "../Image";
import ContactMessage from "../ContactMessage";
import { useTranslation } from "react-i18next";
import "./style.css";

function About() {
  const { t } = useTranslation();
  const realtorImg = require("../../assets/realtor.jpg");
  const aboutText =
    "1981 yılında İzmir'de doğdum. Lise öğrenimim bittikten sonra perakende satış alanında çalışmaya başladım. 1999 yılından 2001 yılına kadar züccaciye ve elektrikli ev aletleri firması Tefal Türkiye'de çalıştım. 2002-2016 yılları arasında yine züccaciye sektöründe Esse Ev Ürünleri A.Ş.de satış, mağaza yöneticiliği ve toptan satış bölge yöneticiliği yaptım. 2017-2018 yılları arasında tütün ürünleri firması Philip Morris'te satış departmanında görev aldım. 2018 yılı eylül ayından itibaren dünya çapında lider firma Keller Williams iş ortaklığıyla gayrimenkul sektöründe danışmanlık hizmeti vermeye başladım. Evliyim ve bir oğlum var.";

  return (
    <main>
      <div className="about-container">
        <div className="outer--about-avatar">
          <Image alt="realtor.jpg" src={realtorImg} />
        </div>
        <div className="outer--about-text">
          <p>
            <span className="d-inline-block">
              {t("Benim adım Serkan Güler.")}
            </span>
            <span className="d-inline-block">{t(aboutText)}</span>
            <span className="d-inline-block">
              {t(
                "Amacım tüm müşterilerime kaliteli, güvenilir, faydalı ve mutlu bir hizmet vermektir."
              )}
            </span>
            <span className="d-block">{t("Saygılarımla...")}</span>
          </p>
        </div>
      </div>
      <ContactMessage />
    </main>
  );
}

export default About;
