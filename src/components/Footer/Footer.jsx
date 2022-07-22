import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

export default function Footer() {
  const { t } = useTranslation();
  const phoneNum = "+905074484019";
  const aboutText =
    "Benim adım Serkan Güler. 1981 yılında İzmir'de doğdum. Lise öğrenimim bittikten sonra perakende satış alanında çalışmaya başladım. 1999 yılından 2001 yılına kadar züccaciye ve elektrikli ev aletleri firması Tefal Türkiye'de çalıştım. 2002-2016 yılları arasında yine züccaciye sektöründe Esse Ev Ürünleri A.Ş.de satış, mağaza yöneticiliği ve toptan satış bölge yöneticiliği yaptım. 2017-2018 yılları arasında tütün ürünleri firması Philip Morris'te satış departmanında görev aldım. 2018 yılı eylül ayından itibaren dünya çapında lider firma Keller Williams iş ortaklığıyla gayrimenkul sektöründe danışmanlık hizmeti vermeye başladım. Evliyim ve bir oğlum var. Amacım tüm müşterilerime kaliteli, güvenilir, faydalı ve mutlu bir hizmet vermektir. Saygılarımla...";

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>{t("Hakkımda")}</h6>
            <p className="text-justify">{t(aboutText)}</p>
          </div>

          <div className="col-xs-6 col-md-2 footer--contact-column">
            <h6>{t("İletişim")}</h6>
            <ul className="footer-links footer--contact-links">
              <li>
                <i className="fa fa-phone"></i>
                <span className="text-muted">{phoneNum}</span>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span className="text-muted">serkan.guler@kww.com.tr</span>
              </li>
              <li>
                <i className="fa fa-map"></i>
                <span className="text-muted">
                  Ataşehir Mahallesi Nazım Hikmet Ran Bulvarı No: 12A
                  Çiğli/İzmir
                </span>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-2">
            <h6>{t("Hızlı Linkler")}</h6>
            <ul className="footer-links">
              <li>
                <span>
                  <a
                    href="https://github.com/1TaylanOzturk/realtor-site"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted"
                  >
                    {t("Katkıda Bulunun")}
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a
                    href="https://github.com/1TaylanOzturk"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted"
                  >
                    {t("Geliştirici")}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p translate="no" className="copyright-text">
              Güler Gayrimenkul
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/serkan.guler.528"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/serkan________guler/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="whatsapp"
                  href={`https://wa.me/${phoneNum}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
