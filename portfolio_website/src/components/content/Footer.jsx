import React from "react";
import { Link } from "react-router-dom";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";

const Footer = () => {
  return (
    <>
      {" "}
      <Card>
        <CardImage></CardImage>
        <CardText>
          <p> Designed & Developed by Cesar Fuentes.</p>
        </CardText>
      </Card>
    </>
  );
};

export default Footer;
