import React from "react";
import chartData from "./data/data";

const DistrictAdvisorChart = () => {
  const { labels, datasets, xAxisLabels, maxCapacity } = chartData;

  return (
    <div className="w-[738px] h-[514px] border border-gray-300 rounded-lg overflow-hidden relative">
      <div className="flex flex-col h-full p-6">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-700 mb-4">Number of Advisors (District Wise)</h2>

        {/* Chart Content - Fixed Height and Scrollable */}
        <div className="relative flex-1 overflow-y-auto pr-2 scrollbar-none" style={{ paddingBottom: "4rem" }}>
          {labels.map((label, index) => (
            <div
              key={label}
              className={`flex items-center gap-4 mb-4 ${index === labels.length - 1 ? "mb-0" : ""}`} // Remove margin-bottom for the last item
            >
              {/* District Name with dynamic font size */}
              <span className="w-[8rem] text-gray-700 text-sm truncate">{label}</span>

              {/* Bar with Dynamic Fill */}
              <div className="relative w-full h-3 bg-gray-200 rounded-lg"> {/* Height set to half */}
                <div
                  className="absolute top-0 left-0 h-full rounded-lg"
                  style={{
                    backgroundColor: "#0F68AF", // Changed color for the filled part
                    width: `${(datasets[0].data[index] / maxCapacity) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Advisor Count */}
              <span className="ml-2 text-sm text-gray-600">{datasets[0].data[index]}</span>
            </div>
          ))}
        </div>

        {/* Fixed X-axis Labels at Bottom */}
        <div className="flex justify-between mt-6 text-gray-600 text-sm pl-[9rem] pr-4 bg-white">
          {xAxisLabels.map((label) => (
            <span key={label} className="w-[3rem] text-center">
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Custom scrollbar style */}
      <style>
        {`
          .scrollbar-none::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
          }
          .scrollbar-none {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default DistrictAdvisorChart;
