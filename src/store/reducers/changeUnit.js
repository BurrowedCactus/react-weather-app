const defaultState = {
  unit: 'C'
};

const changeUnit = (state = defaultState, action) => {
    switch (action.type) {
      case 'CHANGE_UNIT':
        return {...state, unit : action.unit}
      default: 
        return state
    }
  }
  
  export default changeUnit