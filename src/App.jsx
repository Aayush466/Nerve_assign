import React, { useState } from 'react';

// Data from resources
const dateArray = ['24-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'];
const strategyArray = [
  {
    View: 'Bullish',
    Value: {
      '24-Apr-2024': [
        'Bull Call Spread',
        'Bull Put Spread',
        'Bull Put Spread',
        'Long Call',
        'Bull Put Spread',
        'Bull Call Spread',
        'Strategy1',
        'Bull Call Spread',
        'Strategy1',
        'Strategy1',
        'SpreadStrategy',
        'Bull Call Spread',
      ],
      '02-May-2024': [
        'Bull Call Spread',
        'Bull Call Spread',
        'Bull Put Spread',
        'Long Call',
        'Long Call',
        'Long Call',
        'Bull Put Spread',
        'Bull Call Spread',
        'Strategy1',
        'Bull Call Spread',
        'Strategy2',
        'Strategy1',
        'Strategy2',
        'Bull Call Spread',
      ],
      '09-May-2024': ['Strategy Put', 'Strategy Call', 'Strategy Call', 'Strategy Call', 'Strategy Put'],
    },
  },
  {
    View: 'Bearish',
    Value: {
      '24-Apr-2024': [
        'Bear Call Spread',
        'Bear Call Spread',
        'Bear Call Spread',
        'Long Put',
        'Long Put',
        'Long Put',
        'Bear Call Spread',
      ],
      '31-May-2024': ['Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
      '21-Jun-2024': ['Strategy3', 'Strategy3', 'Bear Put Spread', 'Strategy3', 'Long Put', 'Long Put'],
    },
  },
  {
    View: 'RangeBound',
    Value: {
      '24-Apr-2024': [
        'Short Straddle',
        'Short Strangle',
        'Short Strangle',
        'Iron Butterfly',
        'Short Strangle',
        'Short Straddle',
        'Strategy1',
        'Short Straddle',
        'Strategy1',
        'Strategy1',
        'SpreadStrategy',
        'Short Straddle',
      ],
      '02-May-2024': [
        'Short Straddle',
        'Short Straddle',
        'Short Strangle',
        'Iron Butterfly',
        'Iron Butterfly',
        'Iron Butterfly',
        'Short Strangle',
        'Short Straddle',
        'Strategy1',
        'Short Straddle',
        'Strategy2',
        'Strategy1',
        'Strategy2',
        'Short Straddle',
      ],
      '21-Jun-2024': ['Iron Condor', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Iron Condor'],
    },
  },
  {
    View: 'Volatile',
    Value: {
      '02-May-2024': [
        'Long Straddle',
        'Long Strangle',
        'Long Strangle',
        'Long Strangle',
        'Long Straddle',
        'Strategy1',
        'Long Straddle',
        'Strategy1',
        'Strategy1',
        'Spread-Strategy',
        'Long Straddle',
      ],
      '09-May-2024': [
        'Long Straddle',
        'Long Straddle',
        'Long Strangle',
        'Long Strangle',
        'Long Straddle',
        'Strategy1',
        'Long Straddle',
        'Strategy2',
        'Strategy1',
        'Strategy2',
        'Long Straddle',
      ],
      '31-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle'],
    },
  },
];

const StrategyDashboard = () => {
  const [selectedView, setSelectedView] = useState('Bullish'); // Default View
  const [selectedDate, setSelectedDate] = useState(dateArray[0]); // Default Date

  // Filter strategies based on selected view and date
  const strategies = strategyArray.find((view) => view.View === selectedView)?.Value[selectedDate] || [];

  // Group and count strategies
  const strategyCounts = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Toggle for Views */}
      <div style={{ display: 'flex', justifyContent:'center', gap: '10px', marginBottom: '20px' }}>
        {['Bullish', 'Bearish', 'RangeBound', 'Volatile'].map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            style={{
              padding: '10px 20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              background: selectedView === view ? '#007bff' : '#fff',
              color: selectedView === view ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            {view}
          </button>
        ))}
      </div>

      {/* Date Dropdown */}
      <div style={{ display: 'flex', justifyContent:'center'}}>
      <select
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc',width: '400px' }}
      >
        {dateArray.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      </div>

      {/* Strategy Cards */}
      <div style={{ marginTop: '20px', display:'flex' ,flexDirection: 'column', justifyContent:'center' }}>
        {strategies.length > 0 ? (
          Object.entries(strategyCounts).map(([strategy, count]) => (
            <div
              key={strategy}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px 20px',
                marginBottom: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <h4 style={{ margin: 0 }}>{strategy}</h4>
              <p style={{ margin: 0 }}>
                {count} {count === 1 ? 'Strategy' : 'Strategies'}
              </p>
              </div>
            </div>
          ))
        ) : (
          <p>No strategies available for {selectedDate}.</p>
        )}
      </div>
    </div>
  );
};

export default StrategyDashboard;
