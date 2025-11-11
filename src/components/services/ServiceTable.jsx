function serviceTable({data}){
  const details = data.details
    return(
         <div className="w-[99%] px-4 md:px-8 lg:px-12">
          <section className="block overflow-x-auto rounded-2xl shadow-md bg-white">
            <table className="min-w-[600px] md:min-w-full text-left border-collapse">
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
          </section>
          <section>
            <div className="overflow-x-auto rounded-2xl shadow-md mt-5 p-5 bg-white italic">
              <p><strong className="mr-3">Includes:</strong>{data.includes}</p>
            </div>
          </section>
    </div>
    )
}
export default serviceTable;