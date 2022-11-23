import {createStore ,combineReducers ,applyMiddleware} from "redux" ; 
import thunk from "redux-thunk" ;  
import reducer_badge from "./reducer/reducerBadge";
import  ReducerCartItem  from "./reducer/ReducerCartItem" ;

const store = createStore(combineReducers({
    // ici on met les reducers ...  
    my_produits : ReducerCartItem , 
    my_badge : reducer_badge ,

}),applyMiddleware(thunk)); 

export default store ; 