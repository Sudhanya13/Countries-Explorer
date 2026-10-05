import React, { use } from "react";
import Countrycard from "./Countrycard";

export default function Country({ countrydata }) {
  const realData = use(countrydata);
  console.log(realData);

  return (
    <>
      <h2>Countries:</h2>
      {/* this will struture only once  */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* parent child props drilling please understand in depth */}
        <Countrycard realData={realData}></Countrycard>
      </div>
    </>
  );
}
