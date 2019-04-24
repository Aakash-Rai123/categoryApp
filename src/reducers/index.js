import {combineReducers} from 'redux';
import {cat} from '../data/data';

const categoryReducer = () => {
    return cat;
}

const selectedCategoryReducer = (selectedCategory=null, action) => {
  if(action.type==='CATEGORY_SELECTED'){
      return action.payload;
  }
  return selectedCategory;
}
export default combineReducers({
    category : categoryReducer,
    selectedCategory:selectedCategoryReducer
});