import { StyleSheet, Text, View  , FlatList} from 'react-native'
import React from 'react'

const cat = ["Games" ,"Beauty","Lingerie" ,"Technologie","Electronique" ,"Science","Literrature" , "Mecanique"] ; 

const CategoryFilter = () => {
  return (
     <FlatList  
       data={cat} 
       renderItem ={({item})=>{
            return(
                <View style={styles.container}> 
                    <Text style={styles.textcon}>{item}</Text> 
                </View>
            )
       }} 
         keyExtractor={(item)=>item} 
         horizontal ={true}
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