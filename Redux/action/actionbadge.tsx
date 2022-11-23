import {add_badge_cart  ,remove_badge_cart , remove_all_badge_cart  } from "../type"


export const addbadgeCart =()=>{ 
    return{
        type : add_badge_cart 
    }
} 

export const removebadgeCart =()=>{ 
    return{
        type : remove_badge_cart 
    }
} 

export const removeallbadgeCart =()=>{ 
    return{
        type : remove_all_badge_cart 
    }
}