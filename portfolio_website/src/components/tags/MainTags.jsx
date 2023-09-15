import React from "react";
import { Helmet } from "react-helmet";

const MainTags = () => {
  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Cesar Fuentes</title>
        <meta name="title" content="Cesar Fuentes" />
        <meta
          name="description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cesarfuentes.com/" />
        <meta property="og:title" content="Cesar Fuentes" />
        <meta
          property="og:description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/HssSPpV7/raytracer.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cesarfuentes.com/" />
        <meta property="twitter:title" content="Cesar Fuentes" />
        <meta
          property="twitter:description"
          content="Cesar Fuentes is a software developer who creates engaging, user-friendly online experiences."
        />
        <meta
          property="twitter:image"
          content="https://i.postimg.cc/HssSPpV7/raytracer.png"
        />
      </Helmet>
    </>
  );
};

export default MainTags;
