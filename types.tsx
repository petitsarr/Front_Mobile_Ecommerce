/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams , RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';   
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

import { 
   MaterialTopTabScreenProps ,
    MaterialTopTabNavigationProp , 
  
 } from "@react-navigation/material-top-tabs"

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
 // Root: NavigatorScreenParams<RootTabParamList> | undefined;
 // Modal: undefined;
 // NotFound: undefined; 
  Home: undefined;  
  Details : {
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
  
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home : undefined; 
  Admin : undefined; 
  User : undefined; 
  Cart : undefined; 

};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>  

  
>;  




export type DetailsScreenRouteProp = RouteProp<RootStackParamList  , "Details">  


export type CheckoutTopTabParamList = { 
  Shipping : undefined; 
  Payment :{
    myorder  :  {
      orderitems  :{ 
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
      }[] , 
      phone  :string , 
      city : string , 
      adress1   : string ,  
      adress2  : string , //
      zip : string , 
      country : string , 
      dateorder : string ,
    } 
  }; 
  Confirm : {
      myorder : {
        orderitems  :{ 
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
        }[] ,
        phone:string , 
        city: string , 
        adress1 : string , 
        adress2: string ,  
        zip: string , 
        country: string , 
        dateorder: string ,
  
      } 

    
  };
}    

export type checkoutNavigationProp = NativeStackNavigationProp<CheckoutTopTabParamList>

export type CartTopParamList = {
  Cart : undefined; 
  Checkout : undefined; 
}  

// Vérification type of my navigation (checkout )
export type CartTopScreenProps =  NativeStackNavigationProp< 
  CartTopParamList , 
 "Checkout"
> 

// valider commandde vers cart ! 
export type confirm_commande_ScreenProps = NativeStackNavigationProp<  
  CartTopParamList  , 
      "Cart" 
>


export type  checkRouteProp= RouteProp<CheckoutTopTabParamList ,"Payment"> 

//export type  checkRouteProp3= RouteProp<CheckoutTopTabParamList ,"Confirm">


//export type  checkRouteProp4= RouteProp<CartTopParamList ,"Checkout">