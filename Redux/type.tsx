export const add_to_cart = 'ADD_TO_CART'; 
export const update_cart ="UPDATE_CART"; 
export const remove_from_cart ="REMOVE_FROM_CART"; 
export const clear_cart ="CLEAR_CART";  
export const add_one_to_cart  ="ADD_ONE_TO_CART";  
export const add_badge_cart ="ADDBADGE_CART"; 
export const remove_badge_cart ="REMOVEBADGE_CART"; 
export const remove_all_badge_cart ="REMOVE_ALL_BADGE_CART";

export interface ICart  {  
    _id: {
        $oid: string;
    };
    image: string;
    brand: string;
    price: number;
    rating: number;
    numReviews: number;
    isFeatured: boolean;
    name: string;
    description: string; 
    category: {
        $oid: string;
    };
    countInStock: number;
    __v: number;

}  

export type ICartState =ICart[]; 

export interface ICartAction { 
    type: string; 
    payload: {
        id : string; 
        items : ICart[]; 
        quantity : number;
    } 
}  

export interface ICartActionUpdate  {
    type: string; 
    payload :{
        id : string; 
        quantity : number; 

    }
} 

export interface ICartActionRemove  { 
    type: string; 
    payload :string
}  


export interface IBage {
    type: string;
}