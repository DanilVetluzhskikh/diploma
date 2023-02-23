import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Test component
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const toggleThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw Error('');
        }
    }, [error]);

    return (
        <Button
            onClick={toggleThrow}
        >
            {t('Вызвать ошибку')}
        </Button>
    );
};
