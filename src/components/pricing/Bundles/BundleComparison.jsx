import { FaCheck } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

function BundleComparison(){
    const tableContentClass = "px-4 py-4 text-md";
    const tableRowClass ="border-b border-gray/10 transition-colors hover:bg-[#f9f9f9]";

    return(
        <div className="flex flex-col justify-center items-center gap-8 w-[95%] overflow-x-auto bg-white rounded-lg p-7 max-w-300 shadow-sm">
            <p className="font-bold text-2xl">Package Comparison</p>

            <div className="w-full overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="font-semibold bg-[#f9f7f0] border-b border-gray/10">
                        <tr>
                            <th className={tableContentClass}>Service</th>
                            <th className={tableContentClass}>Complete Publishing Package</th>
                            <th className={tableContentClass}>Author Support Package</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className={tableRowClass}>
                            <td className={tableContentClass}>Ghostwriting</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Included</td>
                            <td className={tableContentClass}><HiMiniXMark className="inline text-[#e74c3c] size-5"/> Not Included</td>
                        </tr>

                        <tr className={tableRowClass}>
                            <td className={tableContentClass}>Editorial Services</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Comprehensive</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Intensive</td>
                        </tr>

                        <tr className={tableRowClass}>
                            <td className={tableContentClass}>Author Coaching</td>
                            <td className={tableContentClass}><HiMiniXMark className="inline text-[#e74c3c] size-5"/> Limited</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Extensive</td>
                        </tr>

                        <tr className={tableRowClass}>
                            <td className={tableContentClass}>Marketing</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Full Campaign</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Strategic Plan</td>
                        </tr>

                        <tr className={tableRowClass}>
                            <td className={tableContentClass}>Publishing</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Complete</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Complete</td>
                        </tr>

                        <tr className={tableRowClass}>
                            <td className={tableContentClass}>Cover Design</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Custom</td>
                            <td className={tableContentClass}><FaCheck className="inline text-[#2ecc71]"/> Custom</td>
                        </tr>

                        <tr className="ease-in-out duration-200 transition-colors hover:bg-[#f9f9f9]">
                            <td className={tableContentClass}>Best For</td>
                            <td className={tableContentClass}>Authors with ideas needing full execution</td>
                            <td className={tableContentClass}>Authors with completed manuscripts</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BundleComparison;