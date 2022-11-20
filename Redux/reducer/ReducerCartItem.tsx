import {add_to_cart ,update_cart ,remove_from_cart ,ICartState ,ICartAction ,ICart ,clear_cart ,  add_one_to_cart} from "../type"  ;
import data from "../../assets/data/product"  



const initial:{cartItems : ICartState} = {
    cartItems : []
}

      


const ReducerCartItem= (state =initial,action :ICartAction ) =>{  

    switch(action.type) { 

        case add_to_cart :   
         return {
            cartItems : [...state.cartItems,action.payload]
         }
        case update_cart :  
             return {
                cartItems : state.cartItems.map((itm)=>{
                    if(itm._id.$oid === action.payload.id) {
                         return {
                            ...itm ,
                            quantity : action.payload.quantity
                         }
                    } 
                    return itm
                })
             }

        case remove_from_cart:  
            let newcart = state.cartItems.filter((item)=>{
                return item._id.$oid !== action.payload.id
            })  
                return newcart ; 

        case add_one_to_cart :   
            return  {
                cartItems : [...state.cartItems,action.payload]
            }
              
            case clear_cart : 
            return
             {
                cartItems : []
             }
            

        default :
           return state ; 

    }

}    


export default ReducerCartItem ; 