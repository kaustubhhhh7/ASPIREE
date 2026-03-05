import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAdminTrigger = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let keyPressCount = 0;
        let timeout: NodeJS.Timeout;

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'Shift') {
                keyPressCount++;

                if (keyPressCount === 3) {
                    navigate('/admin');
                    keyPressCount = 0;
                }

                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    keyPressCount = 0;
                }, 500);
            }
        };

        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
            clearTimeout(timeout);
        };
    }, [navigate]);

    return {}; // No longer needed to return state
};
