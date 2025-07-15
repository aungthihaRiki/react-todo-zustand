import { create } from "zustand";

// const useCounterStore = create(function (set) {
//   return {
//     count: 3,
//     resetCount: function () {
//       return set({ count: 0 });
//     },
//     incrementCount: function (x) {
//       return set(function (state) {
//         console.log(x);
//         return {
//           count: state.count + x,
//         };
//       });
//     },
//     decrementCount: function (x) {
//       return set(function (state) {
//         return {
//           count: state.count - x,
//         };
//       });
//     },
//   };
// });

const useCounterStore = create((set) => {
  return {
    count: 0,
    resetCount: () => set({ count: 0 }),
    incrementCount: (x) => set((state) => ({ count: state.count + x })),
    decrementCount: (x) => set((state) => ({count: state.count - x})),
  };
});

export default useCounterStore;
