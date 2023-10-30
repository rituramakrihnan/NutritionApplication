import { useState } from 'react';
import './MealForm.css';

const MealsForm = ({ createMeals }) => {
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [calories, setCalories] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [urlLink, setUrlLink] = useState('');
    const addMeal = event => {
        event.preventDefault();
        const meal = {
            name,
            picture,
            calories,
            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
            cookTime:cookTime.toString(),
            urlLink,
        };
        createMeals(meal);
        setName('');
        setPicture('');
        setCalories('');
        setIngredients('');
        setCookTime('');
        setUrlLink('');
    };

    return (
        <>
            <h2>Suggest a new Meal</h2>
            <form onSubmit={addMeal}>
                <div className="form-group">
                    <label htmlFor="name">Meal Name</label>
                    <input type="text" id="mealName" placeholder="Meal name" value={name} onChange={({ target }) => setName(target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="picture">Picture URL</label>
                    <input type="text" id="picture" placeholder="Picture URL" value={picture} onChange={({ target }) => setPicture(target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="calories">Calories</label>
                    <input type="text" id="calories" placeholder="Calories" value={calories} onChange={({ target }) => setCalories(target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" id="ingredients" placeholder="Ingredients" value={ingredients} onChange={({ target }) => setIngredients(target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="cookTime">Cooking Time</label>
                    <input type="text" id="cookTime" placeholder="Cooking Time" value={cookTime} onChange={({ target }) => setCookTime(target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="youTubeLink">YouTube Link</label>
                    <input type="text" id="youTubeLink" placeholder="YouTube Link" value={urlLink} onChange={({ target }) => setUrlLink(target.value)} />
                </div>
                <button type="submit">Add Meal</button>
            </form>
            <br/>

        </>
    );
};

export default MealsForm;