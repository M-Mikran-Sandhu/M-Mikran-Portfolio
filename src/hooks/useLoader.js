import { useState, useEffect } from 'react';

const useLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isPageTransition, setIsPageTransition] = useState(false);

    // Initial loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // Show loader for 2.5 seconds on initial load

        return () => clearTimeout(timer);
    }, []);

    // Page transition loading
    const startPageTransition = () => {
        setIsPageTransition(true);
        setTimeout(() => {
            setIsPageTransition(false);
        }, 1000); // Shorter duration for page transitions
    };

    return {
        isLoading: isLoading || isPageTransition,
        isInitialLoading: isLoading,
        isPageTransition,
        startPageTransition
    };
};

export default useLoader;