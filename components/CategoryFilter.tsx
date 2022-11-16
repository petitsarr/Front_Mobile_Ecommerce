import { StyleSheet, Text, View  , FlatList , TouchableOpacity } from 'react-native'
import React from 'react'
import {datacategory } from  "../screens/Products/ProductsContainer"
const cat = ["Games" ,"Beauty","Lingerie" ,"Technologie","Electronique" ,"Science","Literrature" , "Mecanique"] ; 

export type Props = {
    categorie : datacategory  

    filterProductByCategory :(id :string)=> void 
} 

const CategoryFilter = ({categorie, filterProductByCategory}:Props) => { 

  return (
     <FlatList  
       data={categorie} 
       renderItem ={({item})=>{
            return(
               <TouchableOpacity onPress={()=>filterProductByCategory(item._id.$oid)}>
                        <View style={styles.container}> 
                            <Text style={styles.textcon}> {item.name} </Text> 
                        </View>
               </TouchableOpacity>
            )
       }} 
         keyExtractor={(item)=>item._id.$oid}
         horizontal ={true} 
            showsHorizontalScrollIndicator={false}
     />
  )
}


const styles = StyleSheet.create({ 
    container : {
        backgroundColor : "#48d1cc" , 
        padding : 10 , 
        marginHorizontal : 10 , 
        marginVertical : 10 , 
        borderRadius : 15 , 
        elevation : 8 ,  
        justifyContent : "center" , 
        alignItems : "center" ,
    } , 
    textcon : { 
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "white" ,
    }
})  

export default CategoryFilter ; 