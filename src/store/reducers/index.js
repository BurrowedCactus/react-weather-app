import { combineReducers } from 'redux'
import changeCity from './changeCity'
import changeUnit from './changeUnit'

export default combineReducers({
  changeCity,
  changeUnit
})