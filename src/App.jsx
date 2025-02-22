const App = () => {
  const bars = Array.from({ length: 12 });

  return (
    <div className="w-full h-screen bg-[#C19A6B] flex justify-center items-center">
      <div className="w-120 h-120 bg-white rounded-lg shadow-lg flex justify-center items-center relative">
        {bars.map((_, index) => (
          <div
          key={index}
          className="w-110 h-5 rounded-full bg-[#C19A6B] absolute origin-center flex justify-between items-center"
          style={{ 
            transform: `rotate(${index * 15}deg)`, 
            boxShadow: "inset 0px 3px 6px rgba(0, 0, 0, 0.5), inset 0px -3px 6px rgba(255, 255, 255, 0.2)"
          }}
        >
            <div
  className="w-4 h-4 rounded-full absolute animate-move"
  style={{
    animationDelay: `${index * 0.125}s`,
    background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.7) 10%, rgba(0, 0, 0, 0.9) 80%)",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5), inset 0px -1px 2px rgba(255, 255, 255, 0.3)",
  }}
></div>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes move {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(420px); }
          }

          .animate-move {
            animation: move 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default App;
