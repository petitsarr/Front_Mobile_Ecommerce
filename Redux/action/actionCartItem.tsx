import { add_to_cart ,remove_from_cart  ,update_cart ,ICart , add_one_to_cart  , clear_cart } from "../type"; 


// action creator for adding to cart 
const uid =()=>Math.random().toString(34).slice(2) 
export const addToCart =(items :ICart,quantity :number) =>{ 
    return{
        type : add_to_cart , 
        payload : {
            ...items ,
            quantity : quantity
            }
    }
}

// action creator for updating cart  
export const updateToCart  =(id :string ,quantity :number)  =>{  
    console.log("hello petit", id , quantity) ;
    return{
        type : update_cart  , 
        payload : {
            id  : id, 
            quantity : quantity
            }
    }

}  

const uid2 =()=>Math.random().toString(34).slice(2) 
export const addOneTocart =( items : ICart  ) =>{ 
   // console.log("hello petit==>" ,items)
    return {
        type : add_one_to_cart , 
        payload : {
            ...items ,
            quantity : 1
            }
    }
} 

// action creator for removing from cart  

export const removeFromCart =( id :string )=>{ 
    return{
        type : remove_from_cart , 
        payload : {
            id : id
        }
    }

} 
export const clearCart =()=>{ 
    return{
        type : clear_cart 
    }
}

