function reducer(state,action) {
  switch(action.type){
      case 'ADD_TO_BASKET': {
            return {...state,basket:[...state.basket,action.item]};
      }
      case 'REMOVE_FROM_BASKET': {
          let new_basket = state.basket.filter((item) => item.id!==action.id);
          return {...state,basket:[...new_basket]};
      }
      default: return state;
  }
}

export default reducer;