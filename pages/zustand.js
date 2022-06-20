// import create from 'zustand'
// import { persist } from 'zustand/middleware'

// const useStore = create(
//     persist(
//         (set, get) => ({
//             count: 1,
//             increment: () => set({
//                 count: get().count + 1
//             }),
//             resetState: () => set( {
//                 count: get().count = 1
//             })
//         }),
//         {
//             name: 'count-storage',
//             getStorage: () => localStorage,
//         }
//     )
// )

// const Counter = () => {
//     const { count, increment, resetState } = useStore()

//     return (
//         <div className='text-white flex flex-col gap-5 w-fit border-2 border-white p-3 rounded-md mx-auto'>
//             <p className='mx-auto font-bold text-xl'>{ count }</p>
//             <div className='grid grid-cols-2 gap-3'>
//             <button className='border-2 border-white p-2 rounded-xl' onClick={ increment }>one up</button>
//             <button className='border-2 border-white p-2 rounded-xl' onClick={ resetState }>reset</button>
//             <button>clear storage</button>
//             </div>
//         </div>
//     )
// }

import useCount from "../store/store"
import { useState, useEffect } from "react";

const useHasHydrated = () => {
    const [hasHydrated, setHasHydrated] = useState(false);
  
    useEffect(() => {
      setHasHydrated(true);
    }, []);
  
    return hasHydrated;
  };

const Zustand = () => {
    const hasHydrated = useHasHydrated();
    const count = useCount((state) => state.count)
    const increment = useCount((state) => state.increment)
    const decrement = useCount((state) => state.decrement)
    const reset = useCount((state) => state.reset)

    return (
        <div className='m-20 flex flex-col gap-5'>
            <p className='text-white text-center font-bold text-2xl mb-20'>Zustand state management test</p>
            <p className='text-white text-center font-bold text-lg'>Add bears to the forest:</p>
            <div className='text-white flex flex-col gap-5 w-80 border-2 border-white p-3 rounded-md mx-auto'>
                    <p className='mx-auto font-bold text-xl'>{ hasHydrated && count <= 0 ? "Bears are currently extinct" : `There are ${hasHydrated && count} bears`}</p>
                <div className='grid grid-cols-2 gap-3'>
                    <button className='border-2 border-white p-2 rounded-xl' onClick={increment}>one up</button>
                    <button className='border-2 border-white p-2 rounded-xl' onClick={decrement}>one down</button>
                    <button className='border-2 border-white p-2 rounded-xl' onClick={reset}>Exterminate</button>
                </div>
            </div>
            <p className='w-80 text-white mx-auto text-center font-bold text-lg mt-20'>Can you see how many bears after you refreshed the website?</p>
            <footer className='bottom-10 fixed text-white'>
                <p className="">
                    <a href="https://github.com/pmndrs/zustand"> Zustand github</a>
                </p>
            </footer>
        </div>
    );
}

export default Zustand;