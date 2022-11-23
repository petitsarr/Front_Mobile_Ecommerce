import { StyleSheet, Text, View  ,Image ,ScrollView ,Pressable}  from 'react-native'
import React,{useState}from 'react' 
import {useRoute} from "@react-navigation/native"  
import {DetailsScreenRouteProp} from  "../../types" 
import {useDispatch} from "react-redux" 
import {addToCart} from "../../Redux/action/actionCartItem" ; 
import {useNavigation} from "@react-navigation/native" ; 
import {addbadgeCart ,removeallbadgeCart , removebadgeCart} from "../../Redux/action/actionbadge"

 
const SingleProduct = () => {   

     const [qantity , setQantity] = useState(1) ;
    const route = useRoute<DetailsScreenRouteProp>() ;    
    const [item ,setItem] = useState(route.params) ;

  // console.log("finaly ==> " , item._id.$oid) ; 

  const dispatch = useDispatch() ;  
  const navigation = useNavigation() ;
     
  return (
    <ScrollView>
        <View style = {styles.container}>
        <View style ={styles.imagecontainer} >
            <Image source={{uri :item.image}} style={styles.image} />
        </View> 
        <View > 
            <View style={styles.namecontainer}>
               <Text style={styles.name}>{item.name}</Text> 
            </View>
            <View>
               <Text style={styles.brand}>{item.brand}</Text>
            </View>
        </View> 
        <View style={styles.descriptioncontainer}>
            <Text style={styles.description}>{item.description}</Text>
        </View> 
        <View style ={styles.price_add}>
            <View style={styles.priceContainer}>
               <View style ={styles.priceonly}>   
                  <Text style={styles.price}>{`$ ${item.price}`}</Text> 
                </View>  
                <View style={styles.qantityContainer}> 
                  <Pressable  
                    onPress = {()=>setQantity(qantity > 1 ? qantity - 1 : 1)}
                   style ={styles.lessContainer} >
                        <Text style={styles.less}>-</Text>
                  </Pressable>
                     <Text style={styles.qantity}>{qantity}</Text> 
                     <Pressable  
                        onPress = {()=>setQantity(qantity + 1)}
                     style = {styles.plusContainer}>
                        <Text style={styles.plus}>+</Text>
                  </Pressable>
               </View>
            </View>  
            <Pressable  
               onPress={()=>{
                 dispatch (addToCart(item , qantity))  
                 dispatch(addbadgeCart())
                 navigation.navigate("Home") 
                 setQantity(1) ;
               }} > 
            <View style ={styles.addContainer}>
              
                    <Text style={styles.add}> Add</Text> 

                    </View>
               </Pressable>
            
        </View>
    
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({ 
    container :  {  
        flex : 1 ,
        justifyContent : "center" , 
        alignItems : "center" , 
        backgroundColor : "white" , 

    } ,
    imagecontainer : { 
        width : "100%" , 
        height : 300 , 
        backgroundColor : "white" , 
        justifyContent : "center" , 
        alignItems : "center" , 
        elevation : 8 , 

    } ,
    image :{
        width : "100%" , 
        height : 300 , 
        resizeMode : "cover" , 

    } ,
    name :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        marginBottom : 10 , 
        marginTop : 10 ,
        textAlign : "center" ,

    } ,
    brand :{
        fontSize : 18 , 
       // color : "#808080" ,  
        textAlign : "center" , 
        fontWeight : "bold" , 
        
    } ,
    descriptioncontainer :{
      //  width : "100%" , 
        height : 200 , 
        backgroundColor : "white" , 
        justifyContent : "center" , 
        alignItems : "center" , 
        elevation : 8 , 
        marginHorizontal : 10 , 
       // marginVertical : 10 ,
    } ,
    description :{
        fontSize : 14 , 
        color : "#808080" ,

    } ,
    priceContainer :{ 
        backgroundColor : "white" ,  
        marginTop : 12 , 
        flexDirection : "row" ,

    } , 
    qantityContainer :{ 
        flexDirection : "row" , 
        justifyContent : "space-around" ,
        width : 100 ,
        marginHorizontal : 10 ,
        
    } , 
    qantity :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "black" , 
        marginVertical : 5 , 

    } ,
    price :{
        fontSize : 20 , 
        fontWeight : "bold" , 
      //  marginBottom : 10 ,
        textAlign : "center" , 
        color :"orange" , 
        marginVertical : 10 ,
    } ,
    addContainer :{
        backgroundColor : "green" , 
        width : 100 , 
        height : 40 , 
        justifyContent : "center" , 
        alignItems : "center" , 
        borderRadius : 10 , 
        marginVertical : 10 , 
        marginHorizontal : 10 , 

    } ,
    add :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "white" , 
        textAlign : "center" , 

    }  , 
    price_add :{ 
        flexDirection : "row" , 
        justifyContent : "space-around" ,  
        width : "100%" ,
    } ,
    namecontainer :{
        marginVertical : 25 ,
    } ,  
    lessContainer :{
        backgroundColor : "red" , 
        width : 45 , 
        height : 30 ,
        justifyContent : "center" ,
        alignItems : "center" ,
       marginRight : 45,
       borderRadius : 10 ,
    } , 

    plusContainer :{  
        backgroundColor : "green"  , 
       width : 45 , 
         height : 30 ,
        justifyContent : "center" ,
        alignItems : "center" , 
        marginLeft : 45 , 
        borderRadius : 10 ,
       
    } ,
    less :{ 
        fontSize : 25 , 
        fontWeight : "bold" ,
        color : "white" ,
     //  marginVertical : 10 ,


    } ,
   plus :{ 
        fontSize : 25 , 
        fontWeight : "bold" , 
        color : "white" , 
     //   marginVertical : 10 ,

   }  , 
   priceonly :{
         marginRight : 20 , 
         marginTop : -5 ,
        // marginBottom : 20,
   }

}) 


export default SingleProduct