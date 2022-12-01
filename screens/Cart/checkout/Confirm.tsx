import { StyleSheet, Text, View ,ScrollView ,Dimensions , Image, Pressable } from 'react-native' ; 
import React from 'react'  ;
import {useRoute } from '@react-navigation/native' 
import { checkRouteProp , confirm_commande_ScreenProps  } from '../../../types'   ; 
import {type type_orders } from './Payment' ;
import { flexbox } from 'native-base/lib/typescript/theme/styled-system'; 
import { clearCart } from '../../../Redux/action/actionCartItem' ;  
import {removeallbadgeCart } from '../../../Redux/action/actionbadge' ;
import {useDispatch} from "react-redux" ; 
import { useNavigation} from "@react-navigation/native"   

const {height} = Dimensions.get('window') ; 


const Confirm = () => { 

    const route = useRoute<checkRouteProp>() ;  
   // console.log("ohhhhhh Use route de confirmation est ==>" , route.params)     ;   
    
   const navigation = useNavigation<confirm_commande_ScreenProps>() ; 

   const dispatch = useDispatch() ;  


   const valide_commande = () => { 
      setTimeout(()=>{
      dispatch(clearCart()) ;  
      dispatch(removeallbadgeCart()) ;
      navigation.navigate("Cart") ; 
     } , 1000) ;
   }
    
    
  return (
   <ScrollView contentContainerStyle={styles.container}>
    
     <View  style ={styles.containerConfirm}>
      {
        route.params ? (  
          <View>
          <View>
                <View style ={styles.shippingContainer}>    
                <Text style ={styles.text}>Adress1 : {route.params?.myorder.adress1}</Text>  
                <Text style ={styles.text}>Adress 2 : {route.params?.myorder.adress2}</Text>
                <Text style ={styles.text}> City : {route.params?.myorder.city}</Text>  
                <Text style ={styles.text}>Zip : {route.params?.myorder?.zip}</Text>
                <Text style ={styles.text}> Country : {route.params?.myorder.country}</Text> 
             </View>  
           {
            route.params?.myorder.orderitems.map((item ,index)=>{ 
              return ( 
                <View style ={styles.containerItem} key ={index}>  
                        <Image source={{uri : item.image}} style ={styles.image} />
                        <Text style ={styles.text}> {item.name}</Text> 
                        <Text style ={styles.text}> {item.price}</Text> 
                </View>
              )
          
            })
          }
     
        </View>  
        <Pressable    
          onPress={()=>{
          valide_commande() 
          }}
          >
                  <View style ={styles.getcommand}>
                    <Text style ={styles.titlecommand}>Valider la Commande</Text>
                  </View>
          </Pressable>  

      </View>

          )  

        
        : <View style = {styles.nocommandeContainer}> 
                        <Text style ={styles.nocommande}>   
                        Pas de commande Effectué !!!!
                        </Text>
                </View>
      }  
     
   
      
     </View>
   </ScrollView>
  )
}
 
const styles = StyleSheet.create({ 
  container :{
    height : height , 
    backgroundColor : '#fff'  , 
    alignContent : 'center' , 
    padding : 8  ,
   // flex : 1 ,
  } ,
  titleContainer :{ 
    height : 30 , 
    backgroundColor : 'white' , 
    justifyContent : 'center' , 
    alignItems : 'center' , 
   // elevation : 8 , 
   // marginBottom : 10 

  } , 
  textTitle :{ 

    fontSize : 20 , 
    fontWeight : 'bold' , 
    color : '#228B22' ,
  } , 
  containerConfirm :{ 
    height : height , 
    backgroundColor : 'white'  , 
    justifyContent : 'center' , 
    alignItems : 'center' , 
    elevation : 8 , 
    marginVertical: 25 , 
    padding : 8  
    

  } ,  
  shippingContainer :{ 
    height : height /  3 , 
    backgroundColor : 'white'   , 
    justifyContent : 'center' , 
    alignItems : 'center' , 
    elevation : 5, 
  //  marginVertical: 10 , 
  //  padding : 8  , 
    shadowColor : 'black' , 
    shadowOpacity : 0.5 , 
    shadowRadius : 4 , 
    shadowOffset : {width : 0 , height : 0} , 
    borderRadius : 5 , 
    borderColor : 'black' , 
    borderWidth : 1 ,
  //  width : '100%' , 
    marginHorizontal : 10 , 
    marginBottom : 60 , 
    marginTop : -70 ,

  } , 
  text :{
    fontSize : 18 , 
    fontWeight : 'bold' , 
    color : 'black' , 
    padding : 8 ,
  } ,  
  nocommande :{ 
    fontSize : 25 , 
    fontWeight : 'bold' , 
    color : 'red' , 
    padding : 8 , 
    textAlign : 'center' , 
    justifyContent : 'center' , 
    alignItems : 'center' ,
    alignContent : 'center' ,
    marginHorizontal : 10 ,
    marginVertical : 10 ,
    width : '90%' ,

  } , 
  containerItem :{
    height : 75 , 
    backgroundColor : 'white' , 
    justifyContent : 'space-between'  , 
    alignItems : 'center' , 
    elevation : 8 , 
    marginVertical: 20 , 
    padding : 5  , 
    shadowColor : 'black' , 
    shadowOpacity : 0.5 , 
    shadowRadius : 5 , 
    shadowOffset : {width : 0 , height : 0} , 
    borderRadius : 5 , 
    borderColor : 'black' , 
    borderWidth : 1  ,
   // width : '90%' , 
    marginHorizontal : 10 , 
    flexDirection : 'row' , 
   

  } , 
  image :{ 
    height : 65 , 
   width : 60 , 
    borderRadius : 8 , 
    marginHorizontal : 10 , 
    marginVertical : 10 , 
    //resizeMode : 'cover' , 
  } , 
  getcommand :{ 
    height : height / 18 , 
    backgroundColor : '#228B22' , 
    justifyContent : 'center' , 
    alignItems : 'center' ,  
    marginBottom : 10 , 
    borderRadius : 5 , 
    padding : 8 ,

  } , 
  titlecommand :{
    fontSize : 20 , 
    fontWeight : 'bold' , 
    color : 'white' , 
    padding : 8 , 
    
  } , 
  nocommandeContainer :{
    height : height / 2 , 
    backgroundColor : 'white' , 
    justifyContent : 'center' , 
    alignItems : 'center' , 
    elevation : 8 , 
    marginVertical: 20 , 
    padding : 8  , 
    shadowColor : 'black' , 
    shadowOpacity : 0.5 , 
    shadowRadius : 5 , 
    shadowOffset : {width : 0 , height : 0} , 
    borderRadius : 5 , 
    borderColor : 'black' ,
    borderWidth : 1  ,
    width : '90%' ,
    marginHorizontal : 10 ,

  }
  
 

})
  
export default Confirm ; 

