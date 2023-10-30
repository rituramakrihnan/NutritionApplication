import React from 'react';

const MealList = ({ meals, addFavoriteMeal,user }) => {
    function handleClick(urlLink) {
        return window.location.href = urlLink;
    }
    return (
        <div>
            <h2>Meal List</h2>
            <ul className="meal-list">
                {meals.map(meal => (
                    <li key={meal.id} className="meal-item">
                        <h3>{meal.name}</h3>
                        <img src={meal.picture} alt={meal.name} width="200" height="150" onClick={() => handleClick(meal.urlLink)}/>
                        <p>Calories: {meal.calories}</p>
                        <p>Ingredients: {meal.ingredients.join(', ')}</p>
                        <p>Cook Time: {meal.cookTime}</p>
                        {user !== null && (<button type="add" onClick={() => addFavoriteMeal(meal)}>Add to Favorites</button>)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealList;