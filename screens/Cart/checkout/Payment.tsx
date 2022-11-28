import { Pressable, StyleSheet, Text, View } from 'react-native'
import React  ,{useState}from 'react' 
import { useRoute } from "@react-navigation/native"  
import { ListItem, Avatar } from '@rneui/themed' 
import { NativeBaseProvider } from 'native-base'; 
import { Icon, Select  } from 'native-base'; 


const Payment = () => {   

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


  const route = useRoute() ; 
  console.log("route.params est ==>" , route.params)
  return (
    <View>
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

<View  
style ={{
      //  flex : 0  ,
        width : '100%' , 
       height : 257 }}
>
                <NativeBaseProvider>
                <Select 
                            defaultValue=' '
                            //  placeholder="Choisir le Pays"
                              selectedValue={cardd}
                            //  borderRadius ={10} 
                             // borderColor = "red"  
                              padding={3} 
                              marginX ={7} 
                              marginY ={3} 
                              onValueChange={(itemValue) => setCardd(itemValue)}  
                              

                //  height = {150} 
                //  marginY = {15} 
                //  marginLeft={-5}
                //  onValueChange={(itemValue: string) => setCountry(itemValue)}
                >  
                { 
                  paymentCards.map((c)=>{ 
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
                      key ={c.value}
                        

                            />
                      )

                  })

                }


                  </Select>
                </NativeBaseProvider>
</View>



    ) : null}
  </View>
  )
}  


const styles = StyleSheet.create({})

export default Payment

