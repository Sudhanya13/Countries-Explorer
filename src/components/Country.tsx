import React, { use } from "react";

export default function Country({ countrydata }) {
  const realData = use(countrydata);
  console.log(realData);

  return <div></div>;
}
