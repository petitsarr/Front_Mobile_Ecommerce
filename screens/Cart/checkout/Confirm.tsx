import { StyleSheet, Text, View ,ScrollView ,Dimensions } from 'react-native' ; 
import React from 'react'  ;
import {useRoute } from '@react-navigation/native' 
import { checkRouteProp  } from '../../../types'   ; 

const {height} = Dimensions.get('window') ; 


const Confirm = () => { 

    const route = useRoute() ; 
    console.log("Use route de confirmation est ==>" ,route.params) ;
  return (
   <ScrollView contentContainerStyle={styles.container}>
     <View style ={styles.titleContainer}>
        <Text style ={styles.textTitle}>Confirmation de la Commande :</Text>
     </View>
   </ScrollView>
  )
}
 
const styles = StyleSheet.create({ 
  container :{
    height : height , 
    backgroundColor : 'white' , 
    alignContent : 'center' , 
    padding : 8
  } ,
  titleContainer :{ 
    height : 50 , 
    backgroundColor : 'white' , 
    justifyContent : 'center' , 
    alignItems : 'center' , 
    elevation : 8 , 
    marginBottom : 10 

  } , 
  textTitle :{ 

    fontSize : 22 , 
    fontWeight : 'bold' , 
    color : '#228B22' ,
  }

})
  
export default Confirm ; 

