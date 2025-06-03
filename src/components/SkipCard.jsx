import { skipImages } from "../assets";

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
      className={`relative group cursor-pointer transition-all duration-500 ${
        isSelected ? "scale-[1.04] ring-2 ring-blue-500 z-30" : "hover:scale-[1.01]"
      }`}
    >
      <div className="relative w-full h-[420px] overflow-hidden rounded-3xl shadow-lg">
        {/* Image Background */}
        {image && (
          <img
            src={image}
            alt={`${size} Yard Skip`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Overlay Glass Info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-3xl flex flex-col justify-between p-5 transition-all">
          {/* Header Tags */}
          <div className="flex justify-between items-start">
            <div className="bg-white/10 backdrop-blur px-3 py-1 text-xs text-white rounded-full font-semibold uppercase tracking-widest">
              {size} Yards
            </div>
            <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-bold shadow">
              £{price.toFixed(2)}
            </div>
          </div>

          {/* Info Tags */}
          <div className="space-y-2 mt-auto">
            <p className="text-sm text-gray-200">
              {hireDays} day hire period
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase">
              <span
                className={`px-3 py-1 rounded-full ${
                  onRoad
                    ? "bg-green-600/20 text-green-300"
                    : "bg-red-600/20 text-red-300"
                }`}
              >
                {onRoad ? "Road Legal" : "Not Road Legal"}
              </span>
              <span
                className={`px-3 py-1 rounded-full ${
                  heavy
                    ? "bg-blue-600/20 text-blue-300"
                    : "bg-yellow-600/20 text-yellow-300"
                }`}
              >
                {heavy ? "Heavy Waste" : "Light Waste Only"}
              </span>
            </div>
          </div>

          {/* Footer CTA */}
          <button
            disabled={isSelected}
            className={`w-full mt-4 py-2 rounded-md font-bold text-sm transition-all shadow-lg ${
              isSelected
                ? "bg-blue-600 text-white cursor-default"
                : "bg-white/80 text-black hover:bg-white hover:scale-[1.01]"
            }`}
          >
            {isSelected ? "✓ Selected" : "Select This Skip"}
          </button>
        </div>
      </div>
    </div>
  );
}