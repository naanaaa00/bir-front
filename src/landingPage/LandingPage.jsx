import React from "react";

import { P2 } from "./components/P2";
import { P3 } from "./components/P3";
import { Utama } from "./components/Utama";

const LandingPage = () => {
  return (
    <div className="bg-white-A700">
      <Utama />
      <P2 />
      <P3 />

    </div>
  );
};

export default LandingPage;
