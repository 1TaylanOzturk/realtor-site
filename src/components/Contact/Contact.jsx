import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import "./style.css";

const env = {
  serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicID: process.env.REACT_APP_EMAILJS_PUBLIC_ID,
};

export default function Contact() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll(".form-control");
    const templateParams = {
      username: inputs[0].value,
      email: inputs[1].value,
      message: inputs[2].value,
    };

    emailjs.send(env.serviceID, env.templateID, templateParams, env.publicID);
    document.querySelector("form").reset();
    setShow(true);
  };

  return (
    <main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{t("Başarılı")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t("Mesajınız başarıyla iletildi.")}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="outer--contact-card">
        <div className="contact-card shadow-lg">
          <div className="contact-card--header">
            <h2>{t("İletişim")}</h2>
            <h6 className="text-muted">
              {t(
                "Bu formu doldurarak benimle email aracılığıyla iletişime geçebilirsiniz."
              )}
            </h6>
            <hr />
          </div>
          <div className="contact-card--body">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="form-fullname">
                <Form.Label className="form-label">
                  {t("Ad Soyad")} <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="fullName"
                  placeholder={t("Adınızı Soyadınızı Giriniz")}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-email">
                <Form.Label className="form-label">
                  Email <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder={t("Emailinizi Giriniz")}
                  required
                />
                <Form.Text className="form-text text-muted">
                  {t("Emailinizi asla başkalarıyla paylaşmayacağız")}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-message">
                <Form.Label className="form-label">
                  {t("Mesaj")} <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder={t("Mesajınızı Giriniz")}
                ></Form.Control>
              </Form.Group>
              <div className="form-submit">
                <Button type="submit">{t("Gönder")}</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
