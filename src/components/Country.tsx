import React, { use } from "react";

export default function Country({ countrydata }) {
  const realData = use(countrydata);
  console.log(realData);

  return (
    <div>
      <h2>Countries:</h2>
      {/* <div className="grid-cols-3 "> */}
      {/* {realData.map((singleCountry, index) => {
        return (
          <div key={index}>
            <div className="card bg-base-100 w-96 shadow-sm">
              <div>
                <img
                  src={singleCountry.flags.flags.png}
                  alt={singleCountry.flags.flags.alt}
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{singleCountry.name.common}</h2>
                <p>{singleCountry.capital.capital}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    {singleCountry.currencies.currencies.symbol}
                  </button>
                </div>
              </div>
            </div>
          </div> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {realData.slice(0, 20).map((singleCountry, index) => {
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              {/* Flag */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={singleCountry.flags.flags.png}
                  alt={singleCountry.flags.flags.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Country Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  Country #{index + 1}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {singleCountry.name.common}
                </h2>

                {/* Capital */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      Capital
                    </p>
                    <p className="text-slate-700 font-semibold">
                      {singleCountry.capital.capital}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 my-4"></div>

                {/* Currency */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      Currency
                    </p>
                    <p className="text-slate-700 font-semibold">
                      {singleCountry.currencies.currencies.symbol}
                    </p>
                  </div>

                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl group-hover:bg-blue-700 transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      // ?{" "}
    </div>
  );
}
