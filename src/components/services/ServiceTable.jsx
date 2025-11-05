import React from "react";
function serviceTable({data}){
  const details = data.details
    return(
         <div className="w-11/12 overflow-x-auto rounded-2xl shadow-md bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gold text-white">
              <tr>
                <th className="p-4 text-lg font-bold">Client Tier</th>
                <th className="p-4 text-lg font-bold">Upfront Payment</th>
                <th className="p-4 text-lg font-bold">Revenue Share (5 years)</th>
                <th className="p-4 text-lg font-bold">Alternative: Full Upfront</th>
              </tr>
            </thead>
          <tbody className="text-gray-800">
            <tr className="border-b border-light-gray">
              <td className="p-4 font-semibold text-lg">{details[0].execTitle}</td>
              <td className="p-4 font-semibold text-gold">{details[0].execPayment}</td>
              <td className="p-4">{details[0].execShares}</td>
              <td className="p-4 font-semibold text-gold">{details[0].execAlternative}</td>
            </tr>
            <tr className="border-b border-light-gray">
              <td className="p-4 font-semibold text-lg">{details[1].profTitle}</td>
              <td className="p-4 font-semibold text-gold">{details[1].profPayment}</td>
              <td className="p-4">{details[1].profShares}</td>
              <td className="p-4 font-semibold text-gold">{details[1].profAlternative}</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-lg">{details[2].emergTitle}</td>
              <td className="p-4 font-semibold text-gold">{details[2].emergPayment}</td>
              <td className="p-4">{details[2].emergShares}</td>
              <td className="p-4 font-semibold text-gold">{details[2].emergAlternative}</td>
            </tr>
          </tbody>
      </table>

      <div className="mt-3 p-4 border-t-25 border-light-grey rounded-b-2xl italic">
        <p><strong className="mr-3">Includes:</strong>{data.includes}</p>
      </div>
    </div>
    )
}
export default serviceTable;