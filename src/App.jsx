import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SkipCard from './components/SkipCard';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import { useTheme } from './hooks/useTheme';
import { getSkips } from './utils/api';

function App() {
  const [skips, setSkips] = useState([]);
  const [selected, setSelected] = useState(null);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    getSkips().then(setSkips).catch(console.error);
  }, []);

  const handleContinue = (e) => {
    e.preventDefault()
    navigate("/404"); // Simulate next step
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="p-4">
        <Header toggleTheme={toggleTheme} isDark={isDark} />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              size={skip.size}
              price={skip.price_before_vat * 1.2}
              hireDays={skip.hire_period_days}
              onRoad={skip.allowed_on_road}
              heavy={skip.allows_heavy_waste}
              isSelected={selected?.id === skip.id}
              onSelect={() => setSelected(skip)}
            />
          ))}
        </div>
      </div>

      <BottomBar
        selected={selected}
        onBack={() => setSelected(null)}
        onContinue={handleContinue}
      />
    </div>
  );
}

export default App;