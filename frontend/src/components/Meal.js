import React from 'react';
import FilterForm from './FilterForm';
import FavoriteMeals from './FavoriteMeals';
import MealList from './MealList';
import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import MealsForm from './MealsForm';
import Notification from './Notification';
import PropTypes from 'prop-types';
import mealService from '../services/meals';

const Toggle = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const hideWhenVisible = { display: visible ? 'none' : '' };
    const showWhenVisible = { display: visible ? '' : 'none' };

    const toggleVisibility = () => {
        setVisible(!visible);
    };
    useImperativeHandle(ref, () => {
        return {
            toggleVisibility,
        };
    });
    return (
        <div>
            <div style={hideWhenVisible}>
                <br/>
                <button onClick={toggleVisibility} className="button">{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button id= "cancelButton" onClick={toggleVisibility} className="button">Cancel</button>
            </div>
        </div>
    );
});

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
    buttonLabel: PropTypes.string.isRequired
};


const Meal = () => {
    const mealsFormRef = useRef();
    const [meals, setMeals] = useState([]);
    const [notification, setNotification] = useState(null);
    const [updateMeals, setUpdateMeals] = useState(false);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [showFilter, setShowFilter] = useState(false);
    const [filterIngredients, setFilterIngredients] = useState([]);
    const [filterApplied, setFilterApplied] = useState(false);
    const [favoriteMeals, setFavoriteMeals] = useState([]);
    const [favoriteUser, setFavoriteUser] = useState(' ');

    const loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));

    const createMeals = async meal => {
        try {
            await mealService.create(meal);
            mealsFormRef.current.toggleVisibility();
            setUpdateMeals(!updateMeals);
            setNotification({
                text: `A new meal ${meal.name} has been added`,
                type: 'notification'
            });
            setTimeout(() => {
                setNotification(null);
            }, 5000);
        } catch (error) {
            console.error('Please enter valid data for all fields', error);
            setNotification({
                text: 'You are missing data for the meal; cannot be updated to the website.',
                type: 'error'
            });
            setTimeout(() => {
                setNotification(null);
            }, 5000);
        }
    };

    useEffect(() => {
        mealService.getAll().then(meals =>
            setMeals(meals)
        );
    }, [updateMeals]);

    const handleFilterButtonClick = () => {
        setShowFilter(!showFilter);
    };

    const handleFilterFormSubmit = (ingredients) => {
        const ingredientsArray = ingredients.split(',');
        setFilterIngredients(ingredientsArray);
        setFilterApplied(true);
        setShowFilter(false);
    };

    useEffect(() => {
        const storedMeals = localStorage.getItem('favoriteMeals');
        if (storedMeals) {
            setFavoriteMeals(JSON.parse(storedMeals));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
    }, [favoriteMeals]);

    const addFavoriteMeal = (meal) => {
        if (!favoriteMeals.some(favoriteMeal => favoriteMeal.id === meal.id)) {
            setFavoriteMeals([...favoriteMeals, meal]);
            setFavoriteUser(loggedUser);
        }
    };

    const removeFavoriteMeal = (mealToRemove) => {
        const updatedFavorites = favoriteMeals.filter((meal) => meal !== mealToRemove);
        setFavoriteMeals(updatedFavorites);
    };

    let sortedFilteredMeals = meals.filter(
        (meal) =>
            meal.name.toLowerCase().includes(search.toLowerCase())
            //meal.ingredients.map((ingredient) => ingredient.toLowerCase()).includes(search.toLowerCase())
    );

    if (filterIngredients.length > 0) {
        sortedFilteredMeals = sortedFilteredMeals.filter(
            meal => filterIngredients.every(ingredient =>
                meal.ingredients.some(i =>
                    i.toLowerCase().includes(ingredient.toLowerCase().trim())
                )
            )
        );
    }

    const sortedMeals = sortedFilteredMeals
        .sort((meal1, meal2) => {
            if (sortBy === 'name') {
                return meal1.name.localeCompare(meal2.name);
            }
            else if (sortBy === 'cookTime') {
                return meal1.cookTime.localeCompare(meal2.cookTime, undefined, { numeric: true });
            }
            else {
                return meal1.calories-meal2.calories;
            }
        });

    const handleSearchInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSortSelection = (event) => {
        setSortBy(event.target.value);
    };
    const handleResetClick = () => {
        setSearch('');
        setFilterIngredients([]);
        setFilterApplied(false);
    };

    return (
        <div>
            <Notification message={notification}/>
            <div className="container">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={handleSearchInputChange}
                    style={{ width: '200px' }}
                    className="search-input"
                />
            </div>
            <div style={{ display: 'flex' }}>
                <div>
                    <select onChange={handleSortSelection} className="button">
                        <option value='name'>Sort by Name</option>
                        <option value='cookTime'>Sort by Cook Time</option>
                        <option value='calories'>Sort by Calories</option>
                    </select>
                    <button onClick={handleFilterButtonClick} className="button">
                        {showFilter ? 'Hide filter' : 'Filter'}
                    </button>
                    {showFilter && (
                        <FilterForm handleFilter={handleFilterFormSubmit} />
                    )}
                    {filterApplied && (
                        <button onClick={handleResetClick} className="button">x</button>
                    )}
                </div>

            </div>
            {loggedUser !== null && (
                <div>
                    <Toggle id="recommend-button" buttonLabel="Suggest a new meal" ref={mealsFormRef}>
                        <MealsForm createMeals={createMeals}/>
                    </Toggle>
                    <FavoriteMeals meals={favoriteMeals} removeFavoriteMeal={removeFavoriteMeal} loggedUser={loggedUser} favoriteUser={favoriteUser} />
                </div>
            )}
            <MealList meals={sortedMeals} addFavoriteMeal={addFavoriteMeal} user ={loggedUser}/>
        </div>
    );
};

export default Meal;