
export default function BottomBar({ selected, onBack, onContinue }) {
  if (!selected) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-800 border-t p-4 flex justify-between items-center text-sm sm:text-base z-50 shadow-lg">
      <div>
        <strong>{selected.size} Yard Skip</strong> &nbsp;– £
        {(selected.price_before_vat * 1.2).toFixed(2)} for{' '}
        {selected.hire_period_days} days
      </div>
      <div className="flex gap-2">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:opacity-80"
        >
          Back
        </button>
        <button
          onClick={onContinue}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90"
        >
          Continue →
        </button>
      </div>
    </div>
  );
} 
