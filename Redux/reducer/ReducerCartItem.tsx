import {add_to_cart ,update_cart ,remove_from_cart ,ICartState ,ICartAction ,ICart ,clear_cart ,  add_one_to_cart } from "../type"  ;
import data from "../../assets/data/product"  



const initial : ICartState =    []


 //console.log("here nous aurons",(initial.cartItems))     


const ReducerCartItem= (state =initial,action :ICartAction ) =>{  

    switch(action.type) { 

        case add_to_cart :   
         return    [...state,action.payload]
         
        case update_cart :  
            return state.map((item)=>item._id.$oid === action.payload.id ? {...item,quantity : action.payload.quantity} : item)

        case remove_from_cart:  
            let newcart = state.filter((item)=>{
                return item._id.$oid !== action.payload.id
            })  
                return newcart ; 

        case add_one_to_cart :   

            return   [...state,action.payload] 

            case clear_cart : 
            return state = []
        

        default :
           return state ; 

    }

}    


export default ReducerCartItem ; 