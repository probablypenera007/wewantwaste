export default function SkipCard({ size, price, hireDays, onRoad, heavy, isSelected, onSelect }) {
  return (
    <div
      className={`border rounded-xl p-4 shadow-sm transition hover:shadow-md cursor-pointer ${
        isSelected
          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
      }`}
      onClick={onSelect}
    >
      <h3 className="text-xl font-semibold">{size} Yard Skip</h3>
      <p className="text-sm text-gray-500">{hireDays} day hire</p>
      <p className="text-lg font-bold mt-2 text-blue-600">£{price.toFixed(2)}</p>
      <div className="flex justify-between mt-2 text-sm">
        <span className={onRoad ? "text-green-500" : "text-red-500"}>
          {onRoad ? "✅ Road Legal" : "🚫 No Road"}
        </span>
        <span className={heavy ? "text-blue-500" : "text-yellow-500"}>
          {heavy ? "🏋️ Heavy Waste OK" : "⚠️ Light Waste Only"}
        </span>
      </div>
      <button
        className={`mt-4 w-full py-2 rounded font-medium ${
          isSelected
            ? 'bg-blue-600 text-white cursor-default'
            : 'bg-gray-800 dark:bg-gray-700 text-white hover:opacity-90'
        }`}
        disabled={isSelected}
      >
        {isSelected ? 'Selected' : 'Select This Skip →'}
      </button>
    </div>
  );
}