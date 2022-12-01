import { Image, Text, TextInput, TouchableOpacity, View  ,StyleSheet} from 'react-native' ;  
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React ,{useState , useEffect } from 'react'  
import {useSelector} from "react-redux" ;  
import { Icon, Select  } from 'native-base';  
import {countries} from "../../../assets/countries" 
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native'; 
import {NativeStackNavigationProp} from "@react-navigation/native-stack" 
import { checkoutNavigationProp } from '../../../types'   ; 


type type_items = { 
  _id: {
    $oid: string;
};
image: string;
brand: string;
price: number;
rating: number;
numReviews: number;
isFeatured: boolean;
name: string;
description: string; 
category: {
  $oid: string;
};
countInStock: number;
__v: number; 
} [] 

const Shipping = () => {    



  // Mes artciles de commande depuis mon store  
  const [orderitems , setOrderitems] = useState<type_items>([]) ; 
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [adress1, setAdress1] = useState('') 
    const [adress2, setAdress2] = useState('')
    const [zip, setZip] = useState('') 
    const [country, setCountry] = useState<string>('')   

    const navigation = useNavigation<checkoutNavigationProp>();
    
  //  console.log("country selectionnné est ==>" , country)

    const items = useSelector((state :any)=>state.my_produits)  ; 
 //   console.log("mes items sont ", items) ;

useEffect(()=>{
        setOrderitems(items)  
        return ()=>{
          setOrderitems([]) 
  } 
},[])    


let order  = {orderitems , phone , city , adress1 , adress2 , zip , country , dateorder : new Date().toString() } ; 
 console.log("order est ==>" , (order)) ;
  
//console.log(phone , city , adress1 , adress2 , zip , country) ;
const checkout = ()=>{
        navigation.navigate("Payment",{
          myorder : order
        }  
        )
} 
// console.log("je suis dans le component Shipping.tsx")
  return (
   
    <View style={styles.container}>
    <KeyboardAwareScrollView 
      viewIsInsideTabBar={true} 
      extraScrollHeight={200} 
      enableOnAndroid={true}
        style={{ 
       //  flex: 2,
             width: '100%' 
            }}
        keyboardShouldPersistTaps="always">
        <Image
            style={styles.logo}
            source={require('../../../assets/images/shipping.png')}
        />
        <TextInput
            style={styles.input}
            placeholder='Phone Number' 
            keyboardType={'numeric'}
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setPhone(text)}
            value={phone} 
          
            underlineColorAndroid="transparent"
            autoCapitalize= "none"
        />
        <TextInput
            style={styles.input}
            placeholder='Adresse 1 de Livraison'
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setAdress1(text)}
            value={adress1}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
          //  secureTextEntry
            placeholder='Adresse 2 de Livraison'
            onChangeText={(text) => setAdress2(text)}
            value={adress2}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
           // secureTextEntry
            placeholder='City'
            onChangeText={(text) => setCity(text)}
            value={city}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        /> 
         <TextInput
            style={styles.input}
            placeholderTextColor="Zip"
          //  secureTextEntry
            placeholder='Zip'
            onChangeText={(text) => setZip(text)}
            value={zip}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        /> 
       
       <View style ={{
      //  flex : 0  ,
        width : '100%' , 
       height : 100,   
    //   backgroundColor : 'red' ,
       //marginHorizontal : 30 , 
      // padding :30
    }}>
    <NativeBaseProvider>
      <Select 
                  
                    placeholder="Choisir le Pays"
                    selectedValue={country}
                    width="100%"  
                    borderRadius ={10} 
                    borderColor = "red"  
                    padding={3} 
                    marginX ={7} 
                    marginY ={3} 
                    onValueChange={(itemValue) => setCountry(itemValue)}  
                    
  
    //  height = {150} 
   //  marginY = {15} 
   //  marginLeft={-5}
    //  onValueChange={(itemValue: string) => setCountry(itemValue)}
    >  
    { 
        countries.map((c)=>{ 
            return(
                <Select.Item 
                label= {c.name} 
                value= {c.name} 
               style ={{
               // height:500   ,
               // backgroundColor :"blue",
               // marginTop : 30 
               marginHorizontal : 10  ,  
               backgroundColor:"#DCDCDC" ,

               height : 55
               
                
            }}  
            key ={c.code}
               

                  />
            )

        })

    }


        </Select>
      </NativeBaseProvider>
    </View> 

    <TouchableOpacity
            style={styles.button}
            onPress={() => {
                checkout()  
                console.log("je suis dans le onPress du bouton checkout")
                setAdress2(' ') 
                setAdress1(' ') 
                setCity(' ') 
                setCountry(' ') 
                setPhone(' ') 
                setZip('') 
            }}>
            <Text style={styles.buttonTitle}>Confirmer</Text>
        </TouchableOpacity>
     
    </KeyboardAwareScrollView>  
    
   
</View>
  )
}
 
const styles = StyleSheet.create({   

  container: {
    flex: 1,
    alignItems: 'center'
},
title: {

},
logo: {
  //  flex: 1,
    height: 50,
    width: 400,
    alignSelf: "center",
    margin: 30  ,
    resizeMode :"contain"

},
input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16
},
button: {
    backgroundColor: '#228B22',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center'  ,
  //  flex :0  ,
    width:"90%" ,
    marginBottom : 15
},
buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
}, 
confirmview :{
    backgroundColor: '#228B22',
} ,
footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
},
footerText: {
    fontSize: 16,
    color: '#2e2e2d'
},
footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
}
})



export default Shipping ;

