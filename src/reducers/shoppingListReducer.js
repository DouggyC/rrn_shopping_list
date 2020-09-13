import {ADD_ITEM, DELETE_ITEM} from '../actions/types';
import 'react-native-get-random-values';

const initialState = {
  shoppingList: [],
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        shoppingList: state.shoppingList.concat(action.payload),
      };
    case DELETE_ITEM:
      return {
        ...state,
        shoppingList: state.shoppingList.filter(
          (item) => item.key !== action.key,
        ),
      };

    default:
      return state;
  }
};

export default shoppingListReducer;
