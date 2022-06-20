import useCount from "../store/store";
import { useState, useEffect } from 'react'
import Link from 'next/link'

const useHasHydrated = () => {
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        setHasHydrated(true);
    }, []);

    return hasHydrated;
};

const Header = () => {
    const hasHydrated = useHasHydrated();
    const count = useCount((state) => state.count);

    const [myCount, setMyCount] = useState();

    useEffect(() => {
        setMyCount(count);
    }, [count]);

    return (
        <div className="w-full bg-black py-4">
            <div className="flex justify-between mx-auto gap-20 px-10 text-white text-xl">
                <Link href='/'>Home</Link>
                <div>
                    <Link href='/zustand'>
                        <p className="cursor-pointer">Total bears: {hasHydrated && count <= 0 ? "Ursuscene" : hasHydrated && count}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;