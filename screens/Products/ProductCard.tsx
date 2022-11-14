import { StyleSheet, Text, View  , Image} from 'react-native'
import React from 'react'
import  { Prope } from "./ProductItem" 

const ProductCard = ({item} : Prope) => {   

    const {name, image, price, description} = item ; 

        return (
                <View  style = {styles.container}> 
                    <Image source={{uri :image }} style={styles.image} /> 
                    <Text style={styles.name}>{name}</Text> 
                    <Text style={styles.price}>{price}</Text>

                </View>
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