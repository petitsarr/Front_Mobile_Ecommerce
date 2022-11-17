/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams , RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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