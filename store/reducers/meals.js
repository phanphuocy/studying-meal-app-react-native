import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      let meal = state.meals.find((meal) => meal.id == action.id);
      if (!meal) {
        break;
      }
      let inFavoriteIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id == action.id
      );
      if (inFavoriteIndex < 0) {
        return {
          ...state,
          favoriteMeals: [...state.favoriteMeals, meal],
        };
      } else {
        let newFavorites = [...state.favoriteMeals].filter(
          (meal) => meal.id !== action.id
        );
        return { ...state, favoriteMeals: newFavorites };
      }
      break;
    default:
      return state;
      break;
  }
};

export default mealsReducer;
