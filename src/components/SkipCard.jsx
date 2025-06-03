import { skipImages } from '../assets';

export default function SkipCard({
  size,
  price,
  hireDays,
  onRoad,
  heavy,
  isSelected,
  onSelect,
}) {
  const image = skipImages[size];

  return (
    <div
      onClick={onSelect}
      className={`group relative flex flex-col justify-between border rounded-2xl p-4 shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer ${
        isSelected
          ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
      }`}
    >
      {/* Image */}
      {image && (
        <div className="relative w-full h-44 overflow-hidden rounded-xl mb-4">
          <img
            src={image}
            alt={`${size} Yard Skip`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md shadow-sm font-medium">
            {size} Yards
          </span>
        </div>
      )}

      {/* Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {size} Yard Skip
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {hireDays} day hire period
        </p>
        <p className="mt-2 text-xl font-bold text-blue-600">
          £{price.toFixed(2)}
        </p>
      </div>

      {/* Status */}
      <div className="flex justify-between gap-2 text-xs font-medium mb-4">
        <span
          className={`px-3 py-1 rounded-full ${
            onRoad
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {onRoad ? "Road Legal" : "Not Allowed On Road"}
        </span>
        <span
          className={`px-3 py-1 rounded-full ${
            heavy
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {heavy ? "Heavy Waste OK" : "Light Waste Only"}
        </span>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-2 rounded-lg font-semibold transition-all duration-200 ${
          isSelected
            ? "bg-blue-600 text-white cursor-default"
            : "bg-gray-900 text-white dark:bg-gray-700 hover:opacity-90"
        }`}
        disabled={isSelected}
      >
        {isSelected ? "Selected" : "Select This Skip"}
      </button>
    </div>
  );
}