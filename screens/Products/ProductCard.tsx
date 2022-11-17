import { StyleSheet, Text, View  , Image , Pressable } from 'react-native'
import React , {useState} from 'react'
import  { Prope } from "./ProductItem"   ; 
import {useNavigation} from "@react-navigation/native"; 
import { RootStackScreenProps } from '../../types';

const ProductCard = ({item} : Prope) => {   
    
   const navigation = useNavigation() ; 


    const {name, image, price, description , countInStock} = item ; 

        return ( 
            <Pressable  
            onPress = {()=>navigation.navigate("Details" ,  {
                _id: {
                    $oid: item._id.$oid,
                } ,
                image: item.image,
                brand: item.brand ,
                price: item.price,
                rating: item.rating , 
                numReviews: item.numReviews,
                isFeatured: item.isFeatured , 
                name: item.name ,
                description: item.description ,  
                category: {
                  $oid: item.category.$oid,
              } ,
              countInStock: item.countInStock,
              __v: item.__v, 
              
            })}
        > 
                <View  style = {styles.container}> 
                   
                            <Image source={{uri :image }} style={styles.image} /> 
                            <Text style={styles.name}>{name}</Text> 
                            <Text style={styles.price}>{price}</Text>
                   
                   {
                    countInStock  > 0 ? ( 
                        <Pressable onPress={()=>console.log("hello petit")}>
                        <View style ={{backgroundColor :"#32CD32" ,padding:5,borderRadius :5 ,marginVertical:7 }}>  
                            <Text style ={{color:"white"}}>Add to Cart</Text>
                             </View> 
                             </Pressable>
                    ) : <Text style ={{color :"#32CD32"}}>Actuellement Indisponible</Text>
                   }
                </View> 
                </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({  
    container : { 
        width : 150 , 
        height :200 , 
        backgroundColor : "white" , 
        marginTop : 25 ,
        marginLeft : 10 , 
        marginRight : 10 , 
        padding : 10 , 
        elevation : 8 ,   
        justifyContent : "center" , 
        alignItems : "center" , 
        borderRadius : 10 , 

    } , 
    image : {
        width : 250, 
        height : 80 , 
      //  borderRadius : 10 , 
        resizeMode : "contain"   ,   

    }  , 
    name : {
        fontSize : 18 , 
        fontWeight : "bold" , 
        marginTop : 10 , 
        marginBottom : 10 ,  

    } ,
    price : { 
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "#e47911" ,
    }

})