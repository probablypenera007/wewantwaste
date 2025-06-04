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
      className={`relative group cursor-pointer transition-all duration-500 animate-float ${
        isSelected 
          ? "scale-[1.02] ring-2 ring-blue-500/50 dark:ring-blue-400/50 z-30" 
          : "hover:scale-[1.01]"
      }`}
    >
      <div className="relative w-full h-[420px] overflow-hidden rounded-2xl shadow-xl">
        {image && (
          <img
            src={image}
            alt={`${size} Yard Skip`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
            <div className="glass-card px-4 py-2 text-sm text-white rounded-full font-medium tracking-wide">
              {size} Yards
            </div>
            <div className="glass-card bg-blue-600/90 text-white text-lg px-4 py-2 rounded-full font-bold">
              £{price.toFixed(2)}
            </div>
          </div>

          <div className="space-y-4 mt-auto">
            <p className="text-lg text-gray-100 font-medium">
              {hireDays} day hire period
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <span
                className={`glass-card px-4 py-2 rounded-full ${
                  onRoad
                    ? "text-emerald-300 border-emerald-400/30"
                    : "text-red-300 border-red-400/30"
                }`}
              >
                {onRoad ? "Road Legal" : "Not Road Legal"}
              </span>
              <span
                className={`glass-card px-4 py-2 rounded-full ${
                  heavy
                    ? "text-blue-300 border-blue-400/30"
                    : "text-amber-300 border-amber-400/30"
                }`}
              >
                {heavy ? "Heavy Waste" : "Light Waste Only"}
              </span>
            </div>
          </div>

          <button
            disabled={isSelected}
            className={`w-full mt-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
              isSelected
                ? "glass-card bg-blue-600/90 text-white cursor-default"
                : "glass-card hover:bg-white/90 dark:hover:bg-white/20 hover:scale-[1.02]"
            }`}
          >
            {isSelected ? "✓ Selected" : "Select This Skip"}
          </button>
        </div>
      </div>
    </div>
  );
}