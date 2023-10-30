import React from 'react';

const FavoriteMeals = ({ meals, removeFavoriteMeal, loggedUser,favoriteUser }) => {
    function handleClick(urlLink) {
        return window.location.href = urlLink;
    }
    if(loggedUser === favoriteUser){
        meals = ' ';
        favoriteUser = ' ';
    }
    console.log('MEALS:', meals);
    console.log('loggedU:', loggedUser);
    console.log('favorU:', favoriteUser);
    return (
        <div>
            <h2>Favorite meals</h2>
            {meals.length > 0 ? (
                <ul className="meal-list">
                    {meals.map(meal => (
                        <li key={meal.id} className="meal-item">
                            <h3>{meal.name}</h3>
                            <img src={meal.picture} alt={meal.name} width="200" height="150" onClick={() => handleClick(meal.urlLink)}/>
                            <p>Calories: {meal.calories}</p>
                            <p>Ingredients: {meal.ingredients.join(', ')}</p>
                            <p>Cook Time: {meal.cookTime}</p>
                            <button type="add" onClick={() => removeFavoriteMeal(meal)}>Remove from Favorites</button>
                        </li>
                    ))}
                </ul>
            ) : (
                loggedUser !== favoriteUser && (<p>No favorite meals added</p>)
            )}
        </div>
    );
};

export default FavoriteMeals;
