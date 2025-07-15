import React from "react";
import useCounterStore from "../store/useCounterStore";

function Counter() {
  const { count, resetCount, incrementCount, decrementCount } = useCounterStore();

  console.log(useCounterStore());

  const handleIncrement = () => {
    incrementCount(5);
  };

  const handleReset = () => {
    resetCount();
  };

  const handleDecrement = () => {
    decrementCount(2);
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Counter</h1>
        <div
          className="text-6xl font-extrabold text-blue-600 mb-8"
          id="counter-value"
        >
          {count}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            id="decrement-btn"
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            id="reset-btn"
          >
            Reset
          </button>
          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            id="increment-btn"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
