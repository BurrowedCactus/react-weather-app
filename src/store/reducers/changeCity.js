const defaultState = {
    city: 'DefaultLocation'
};

const changeCity = (state = defaultState, action) => {
    switch (action.type) {
      case 'CHANGE_CITY':
        return {...state, city : action.city}
      default: 
        return state
    }
  }
  
  export default changeCity