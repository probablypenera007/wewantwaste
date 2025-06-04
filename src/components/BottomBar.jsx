export default function BottomBar({ selected, onBack, onContinue }) {
  if (!selected) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] glass-card rounded-2xl shadow-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 z-50 animate-slide-up">
      <div className="text-lg sm:text-xl text-center sm:text-left font-medium">
        <span className="text-blue-600 dark:text-blue-400">{selected.size} Yard Skip</span>
        <span className="mx-2">•</span>
        <span className="font-bold">£{(selected.price_before_vat * 1.2).toFixed(2)}</span>
        <span className="text-gray-600 dark:text-gray-400"> for {selected.hire_period_days} days</span>
      </div>
      <div className="flex gap-4 w-full sm:w-auto justify-center sm:justify-end">
        <button onClick={onBack} className="btn-secondary">
          Back
        </button>
        <button onClick={onContinue} className="btn-primary">
          Continue →
        </button>
      </div>
    </div>
  );
}