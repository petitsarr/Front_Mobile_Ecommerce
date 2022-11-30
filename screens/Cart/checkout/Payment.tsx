import { Pressable, StyleSheet, Text, View  ,SafeAreaView} from 'react-native'
import React  ,{useState ,useEffect}from 'react' 
import { useRoute ,useNavigation } from "@react-navigation/native"  
import { ListItem, Avatar } from '@rneui/themed' 
import { NativeBaseProvider, ScrollView } from 'native-base'; 
import { Icon, Select  } from 'native-base';  
import { checkoutNavigationProp  , checkRouteProp } from '../../../types'   ; 
//import { types } from '@babel/core';

type type_orders = { 
  orderitems  :{ 
    _id: {
      $oid: string;
  };
  image: string;
  brand: string;
  price: number ;
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
  }[] ,
  phone :string , 
  city : string , 
  adress1  : string , 
  adress2 : string ,  
  zip : string , 
  country : string , 
  dateorder : string ,
}  
    console.log("je suis dans le component Payment.tsx")
     const Payment = () => {    

              const route = useRoute<checkRouteProp>() ;
              console.log("route.params sur payment est ==>" , route.params) ; 
              const[selected , setSelected] = useState(0) ;  
     
              const [cardd ,setCardd] = useState(" ") 
  
 

                const methods = [
                  {
                    name: 'Cash on Delivery',
                  value: 1   , 
                  avatar_url :  "https://cdn-icons-png.flaticon.com/512/1554/1554401.png"
                  },
                  { name: 
                    'Bank Transfer', 
                    value: 2  , 
                    avatar_url : "https://cdn-icons-png.flaticon.com/512/6404/6404655.png"
                  },
                  { name: 'Card Payment',
                  value: 3 , 
                  avatar_url : "https://www.pngitem.com/pimgs/m/13-130625_credit-card-rewards-star-ratings-payment-icon-credit.png"
                  }
                ]

              const paymentCards = [
                { name:
                  'Wallet', 
                  value: 1 
                  },
                { 
                  name:
                  'Visa',
                    value: 2
                  },
                { name: 
                  'MasterCard',
                  value: 3}
                  ,
                { name: 'Other',
                value: 4
                }
              ]     



  const navigation = useNavigation<checkoutNavigationProp>() ;  

                  return (  
                    <NativeBaseProvider>
                  <ScrollView>
                  <SafeAreaView style ={styles.container}> 
                    
                    {
                      methods.map((l, i) => (
                      <Pressable onPress={()=>{
                        setSelected(l.value)  
                        setCardd(l.name)  
                      
                      }}  

                    
                      >
                        <ListItem key={i} bottomDivider   
                          style ={{backgroundColor : selected === l.value ? "#C0C0C0" : "white" , 
                          margin : 20, 
                            borderRadius : 15 , 
                            borderWidth : 1 , 
                            borderColor : "white" , 
                            padding : 10 , 
                            height : 85

                          }}
                        >
                          <Avatar source={{uri: l.avatar_url}} />
                          <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                          
                          </ListItem.Content>
                        </ListItem>
                      </Pressable>
                      ))
                    } 
                    {selected === 3 ? ( 

                <SafeAreaView
                style ={{
                      //  flex : 0  ,
                        width : '100%' , 
                      height : 200 }}
                >
                              
                                <Select 
                                            defaultValue=' '
                                              selectedValue={cardd} 
                                              padding={3} 
                                              marginX ={7} 
                                              marginY ={3} 
                                              onValueChange={(itemValue) => setCardd(itemValue)}  
                                            
                                >  
                                { 
                                  paymentCards.map((c)=>{ 
                                      return(
                                          <Select.Item 
                                          label= {c.name} 
                                          value= {c.name} 
                                        style ={{
                                        marginHorizontal : 10  ,  
                                        backgroundColor:"#DCDCDC" ,
                                        height : 55
                                          
                                      }}  
                                      key ={c.value}
                                        
                                            />
                                      )

                                  })

                                }
                                  </Select>
                              
                </SafeAreaView>

                    ) : null}  
                    <View style ={styles.buttonContainer}> 
                    <Pressable style = {styles.button} onPress ={()=>{
                      navigation.navigate("Confirm" , {order : route.params.order })
                    }} 
                    >
                      <Text style ={styles.buttonText}>Continue</Text>
                    </Pressable>
                  
                    </View>
                  </SafeAreaView> 
                  </ScrollView>
                  </NativeBaseProvider>
                  )
                }  


const styles = StyleSheet.create({  
            container: {
              flex: 1,
              backgroundColor: '#fff',
            // alignItems: 'center',
            // justifyContent: 'center',
            },
            buttonContainer : { 
              width : '100%' , 
              height : 100 , 
              justifyContent : 'center' , 
              alignItems : 'center' ,
            //  marginTop : 20

            } , 
            button : { 
              width : '80%' , 
              height : 50 , 
              backgroundColor : '#228B22' ,
              justifyContent : 'center' , 
              alignItems : 'center' , 
              borderRadius : 8 ,
            } , 
            buttonText :{
              color : 'white' , 
              fontSize : 20 , 
              fontWeight : 'bold' 

            } , 
 
})


export default Payment

