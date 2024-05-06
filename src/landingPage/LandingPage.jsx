import React from "react";

import { P2 } from "./components/P2";
import { P3 } from "./components/P3";
import { P4 } from "./components/P4";
import { Footer } from "./components/Footer";
import { Utama } from "./components/Utama";

const LandingPage = () => {
  return (
    <div>
      <Utama />
      <P2 />
      <P3 />
      <P4 />
      <Footer />
    </div>
  );
};

export default LandingPage;
