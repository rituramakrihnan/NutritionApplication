import { useState, useEffect } from 'react';
import Notification from './Notification';

const FilterForm = ({ handleFilter }) => {
    const [ingredients, setIngredients] = useState('');
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (showError) {
            timeoutId = setTimeout(() => {
                setShowError(false);
            }, 5000);
        }
        return () => clearTimeout(timeoutId);
    }, [showError]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!ingredients) {
            setShowError(true);
        } else {
            handleFilter(ingredients);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label>
                <label style={{ fontWeight: 'bold', marginRight: '10px' }}>
                    Ingredients:
                </label>
                <input type="text" placeholder="Enter ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
            </label>
            <br />
            <button type="submit" className="button">submit</button>
            {showError && <Notification message={{ type: 'error', text: 'Missing ingredients' }} />}
        </form>
    );
};

export default FilterForm;
