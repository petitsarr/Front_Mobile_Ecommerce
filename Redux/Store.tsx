import {createStore ,combineReducers ,applyMiddleware} from "redux" ; 
import thunk from "redux-thunk" ;  
import  ReducerCartItem  from "./reducer/ReducerCartItem" ;

const store = createStore(combineReducers({
    // ici on met les reducers ...  
    my_produits : ReducerCartItem

}),applyMiddleware(thunk)); 

export default store ; 