/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen'; 
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration'; 

import  ProductsContainer from "../screens/Products/ProductsContainer" ;  
import AdminContainer from "../screens/Admin/AdminContainer" ;  
import UserContainer from "../screens/Users/UserContainer" ; 
import CartContainer from "../screens/Cart/CartContainer" ; 
import SingleProduct from "../screens/Products/SingleProduct" ;  
import Header from  "../Shared/Header" ;

import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
 
import {useDispatch ,useSelector} from "react-redux" 
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
    //  linking={LinkingConfiguration} 
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> 
      <Header/>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProductsContainer} options={{ headerShown: false }} />
     <Stack.Screen name="Details" component={SingleProduct} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */ 

 


const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme(); 

  const count_badge = useSelector((state : any)=>state.my_badge ) ;

  return (
    <BottomTab.Navigator 
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,  
        tabBarShowLabel:false
        
      }}>
      <BottomTab.Screen
        name="Home" 
        component={RootNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color= {color} />, 
           headerShown : false 
           
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartContainer}
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <Entypo name="shopping-cart" size={24} color={color} />, 
          tabBarBadge: count_badge
        }}
      /> 
       <BottomTab.Screen
        name="Admin"
        component={AdminContainer}
        options={{
          title: 'Admin',
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color= {color} />, 
          
        }}
      /> 
       <BottomTab.Screen
        name="User"
        component={UserContainer}
        options={{
          title: 'User',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color= {color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
