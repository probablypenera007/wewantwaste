export default function BottomBar({ selected, onBack, onContinue }) {
  if (!selected) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-300/20 dark:border-white/10 rounded-xl shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-50 animate-slide-up">
      <div className="text-sm sm:text-base text-center sm:text-left text-gray-800 dark:text-gray-100 font-medium">
        {selected.size} Yard Skip • £
        {(selected.price_before_vat * 1.2).toFixed(2)} for{" "}
        {selected.hire_period_days} days
      </div>
      <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Back
        </button>
        <button
          onClick={onContinue}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-semibold shadow-md"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}