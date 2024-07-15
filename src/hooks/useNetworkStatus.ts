import { useEffect, useState } from "react"

const useNetworkStatus = () => {
    const [isOnline, setIsOnLine] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnLine(true);
        const handleOffline = () => setIsOnLine(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    
    return isOnline;
}

export default useNetworkStatus;