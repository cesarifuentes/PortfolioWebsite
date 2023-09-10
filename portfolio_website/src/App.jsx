import React from "react";
import styles from "./styles";
import Navigation from "./navigation";

// FIXME: missing frontend in title
// FIXME: make images not blur
// FIXME: add animation?
// FIXME: font colors?
// FIXME: background >>> bg-[url(./assets/background.jpg)] bg-cover

// TODO: make new page for clicked things
// TODO: make sidebar for sm,md,lg screens take up entire page height and flex justify

const App = () => (
  // <HelmetProvider context={helmetContext}>
  <>
    {/* <h1>hellor</h1> */}
    <Navigation />
  </>
  // </HelmetProvider>
);

export default App;
