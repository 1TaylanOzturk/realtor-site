import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./style.css";

const API = process.env.REACT_APP_API;

function Portfolios() {
  const [adverts, setAdverts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(API).then((res) => setAdverts(res.data));
  }, []);

  return (
    <main>
      <div className="adverts-container">
        {adverts.map((data) => {
          return (
            <Card className="advert" key={data.title}>
              <Card.Header className="advert-header">
                <Card.Img src={data.image} alt={"advert.png"} />
              </Card.Header>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Subtitle className="advert-price mb-2">
                  {data.price}₺
                </Card.Subtitle>
                <Card.Text>{data.description}</Card.Text>
                <Button className="advert-btn" href={data.link} target="_blank">
                  {t("Satın Al")}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </main>
  );
}

export default Portfolios;
