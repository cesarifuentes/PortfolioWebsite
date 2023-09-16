import React from "react";
import { Link } from "react-router-dom";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardText from "../card/CardText";
import { packagingIcons } from "../../constants";

const Footer = () => {
  return (
    <>
      {" "}
      <Card>
        <CardImage></CardImage>
        <CardText>
          <h4 className="normal-case">
            ©2023 Cesar Fuentes <br />
            All Rights Reserved.{" "}
          </h4>
          {/* Logos */}
          <div className="flex justify-center gap-3 pt-1 sm:justify-start">
            {packagingIcons.map((packagingIcon, index) => (
              <div key={packagingIcon.id}>
                <img
                  className="w-[25px] h-[25px] white-filter"
                  src={packagingIcon.icon}
                  alt={`${packagingIcon.name} Icon`}
                />
              </div>
            ))}
          </div>
        </CardText>
      </Card>
    </>
  );
};

export default Footer;
