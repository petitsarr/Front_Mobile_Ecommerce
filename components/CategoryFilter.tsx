import { StyleSheet, Text, View  , FlatList , TouchableOpacity } from 'react-native'
import React from 'react'
import {datacategory } from  "../screens/Products/ProductsContainer"
const cat = ["Games" ,"Beauty","Lingerie" ,"Technologie","Electronique" ,"Science","Literrature" , "Mecanique"] ; 

export type Props = {
    categorie : datacategory  
    filterProductByCategory :(id :string)=> void   
    handlecategory : (id :number) => void
   active  : number | null
} 

const CategoryFilter = ({categorie, filterProductByCategory , handlecategory  ,active}:Props) => { 
 
   
  return (
     <FlatList  
       data={categorie} 
       renderItem ={({item ,index})=>{ 
            //  console.log(index)
            return(  
                <TouchableOpacity onPress={()=>{
                    filterProductByCategory(item._id.$oid) 
                    handlecategory(index)
                  }}>
                <View  
                style = 
                {
                   active === index ?  styles.container2 : styles.container
                }
                > 
              
                       
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
        backgroundColor : "#9FE2BF" , 
        padding : 10 , 
        marginHorizontal : 10 , 
        marginVertical : 10 , 
        borderRadius : 15 , 
        elevation : 8 ,  
        justifyContent : "center" , 
        alignItems : "center" ,
    } , 
    container2 :{
        backgroundColor : "#007500" , 
        padding : 10 , 
        marginHorizontal : 10 , 
        marginVertical : 10 , 
        borderRadius : 15 , 
        elevation : 8 ,  
        justifyContent : "center" , 
        alignItems : "center" ,
    }  ,
    textcon : { 
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "white" ,
    } ,
})  

export default CategoryFilter ; 