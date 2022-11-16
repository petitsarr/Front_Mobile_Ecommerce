import { StyleSheet, Text, View  , Image , FlatList} from 'react-native'
import React from 'react'
import {dataType} from "./ProductsContainer" 

interface Props { 
    filterProduct: dataType []
}
const SearchProduct = ({filterProduct}:Props) => { 

    console.log(filterProduct.length) ;
  return (
   <View>  
            {filterProduct.length > 0 ? (
                <FlatList  
                            data={filterProduct} 
                            renderItem = {({item})=>{
                                return(
                                    <View key={item._id.$oid} style={styles.container}> 
                                    <Image source={{uri: item.image}} style={styles.image} /> 
                                    <View> 
                                    <Text style={styles.name}>{item.name}</Text> 
                                    <Text style ={styles.description}>{item.description}</Text>
                                    </View> 
                            </View> 
                                )
                            }} 
                            keyExtractor={(item)=>item._id.$oid}
            />
            ) : <Text style={styles.text}>Aucun Produit Correspondant</Text>}
                
                
   </View>
   
  )
}   

const styles = StyleSheet.create({
   container : {
        flexDirection : "row" , 
        justifyContent : "space-between" ,
        alignItems : "center" ,
        padding : 10 ,
        backgroundColor : "white" ,
        elevation : 8 , 
        marginVertical : 5 ,
        marginHorizontal : 10 ,
        borderRadius : 10 , 
   } ,
   image : {
        width : 100 , 
        height : 100 , 
        resizeMode : "contain" , 

   } ,
   name :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        marginBottom : 10 , 

   } , 
   description :{
        fontSize : 14 , 
        color : "#808080" , 
        marginBottom : 10 , 

   } , 
   text :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "#808080" , 
        textAlign : "center" , 
        marginTop : 20 , 

   }
})


export default SearchProduct  

