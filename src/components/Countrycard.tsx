// import React, { useState } from "react";

// export default function Countrycard({ realData }) {
//   const [exploreIndexes, setExploredIndexes] = useState([]);
//   // console.log(useState);

//   const clickMe = (index) => {
//     // alert("i clicked");
//     setExploredIndexes((prev) => [...prev, index]);
//   };
//   //   first return → explicitly returns the JSX from your React component.
//   // Second (...) → implicitly returns JSX from the arrow function passed to map().
//   // This return belongs to your React component."The Countries component should return/render this JSX."
//   return (
//     <>
//       {realData.slice(0, 12).map((singleCountry, index) => (
//         // for every country return the <div> ...</div>

//         // This is an arrow function with implicit return.
//         // The second () is effectively returning JSX, but JavaScript is doing the return implicitly.
//         // understand the return statement and jsx is it jsx written after second return statement ?
//         // how to avoid writing second return -- it creates confusion ..
//         <div
//           key={index}
//           className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
//         >
//           {/* Flag */}
//           <div className="relative h-52 overflow-hidden bg-slate-100">
//             <img
//               src={singleCountry.flags.flags.png}
//               alt={singleCountry.flags.flags.alt}
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//             />

//             {/* Country Badge */}
//             <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
//               Country #{index + 1}
//             </span>
//           </div>

//           {/* Card Body */}
//           <div className="p-6">
//             <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
//               {singleCountry.name.common}
//             </h2>

//             {/* Capital */}
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
//                 <span className="text-xl">📍</span>
//               </div>
//               <div>
//                 <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
//                   Capital
//                 </p>
//                 <p className="text-slate-700 font-semibold">
//                   {singleCountry.capital.capital}
//                 </p>
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-slate-100 my-4"></div>

//             {/* Currency */}
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
//                   Currency
//                 </p>
//                 <p className="text-slate-700 font-semibold">
//                   {singleCountry.currencies.currencies.symbol}
//                 </p>
//               </div>

//               <button
//                 // onClick={clickMe}
//                 onClick={() => clickMe(index)}
//                 className="
//     inline-flex items-center gap-2
//     bg-blue-600 text-white
//     px-5 py-2.5
//     rounded-xl
//     font-semibold text-sm
//     shadow-md
//     hover:bg-blue-700
//     hover:shadow-lg
//     hover:-translate-y-0.5
//     active:translate-y-0
//     transition-all duration-200
//   "
//               >
//                 {exploreIndexes === index ? "Explored" : "Explore"}

//                 <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
//                   →
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// import React from "react";

// export default function Users() {
//   return <div>Users</div>;
// }

// export function Users() {
//   return;
// }

// export interface UsersProps {
//   prop: string;
// }

// export default function Users({ prop }: UsersProps) {
//   return;
// }

import SinglecountryCard from "./SinglecountryCard";

export default function Countrycard({ realData }) {
  return (
    <>
      {realData.slice(0, 12).map((singleCountry, index) => (
        <SinglecountryCard
          key={index}
          singleCountry={singleCountry}
          index={index}
        ></SinglecountryCard>
      ))}
    </>
  );
}
