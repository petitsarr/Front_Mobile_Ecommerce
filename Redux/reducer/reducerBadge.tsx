import { add_badge_cart  ,remove_badge_cart ,remove_all_badge_cart  ,IBage} from "../type"  


const initial_badge  = 0 ;  


const reducer_badge = (state = initial_badge,action :IBage) =>{ 
    switch(action.type) {  

        case add_badge_cart :  

           return state + 1 ;   

        case remove_badge_cart :  

            return state - 1 ; 
   
        case remove_all_badge_cart :  

            return state = 0 ;  

        default :  

          return state ; 
    }
} 

export default reducer_badge ;