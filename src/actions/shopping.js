const { ADD_ITEM, DELETE_ITEM } = require("./types");

export const addShopping = item => (
  {
    type: ADD_ITEM,
    payload: item
  }
)

export const deleteShopping = key => (
  {
    type: DELETE_ITEM,
    key
  }
)

