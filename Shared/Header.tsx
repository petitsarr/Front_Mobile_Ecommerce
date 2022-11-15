import { StyleSheet, Text, View , Image ,SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style= {styles.header} >
      <Image style={styles.logo} source={require("../assets/images/eshop-design.png")} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 

    logo: { 
        width: 90, 
        height: 90, 
        resizeMode: 'cover',
    } , 

    header :{
        flexDirection : "row" , 
        justifyContent : "center"  , 
        alignItems : "center" , 
        padding : 10 , 
      //  backgroundColor : "#e3f2fd" , 
        elevation : 8 , 
        width : "100%" ,
    } 

}) 


export default Header

