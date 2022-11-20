import { View, Text } from 'react-native'
import React from 'react'  ;
import {useSelector} from "react-redux"

const CartContainer = () => { 

  // je teste si ya des produits dans le store 
  const carts = useSelector((state :any)=>state.my_produits)  ;  
 // console.log("Mes produits sur le panier sont  ==>" , carts.cartItems) ;

  return ( 
    <View>
      <Text>This is The CartContainer</Text>
    </View>
  )
}

export default CartContainer