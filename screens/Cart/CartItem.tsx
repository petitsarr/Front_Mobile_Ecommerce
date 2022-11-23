import { StyleSheet, Text, View , Image ,Pressable } from 'react-native'
import React , {useState ,useEffect} from 'react' 
import { AntDesign } from '@expo/vector-icons';
import {CartType} from "./CartContainer"   ; 
import {useDispatch} from "react-redux" ; 
import { updateToCart , removeFromCart} from "../../Redux/action/actionCartItem" 
import {addbadgeCart ,removeallbadgeCart , removebadgeCart} from "../../Redux/action/actionbadge"

type Props = { 
  key : number , 
    item : CartType ,
}
const CartItem = ({ key ,item} : Props) => {   

    const dispatch = useDispatch() ;  
    const [qantity , setQantity] = useState(item.quantity) ; 
   // const [total , setTotal] = useState(item.qantity * item.items.price) ;  
   const  [total  ,setTotal] = useState(0)  

  
   useEffect(()=>{
    dispatch(updateToCart(item._id.$oid , qantity)) ;
   } , [qantity]) ; 
    

  return (
    <View key={key} style={styles.itemcontainer}> 
    <View>   
         <Image source={{uri :item.image}} style={styles.images} />
     </View>
     <View style = {styles.container_name_price}>  
         <Text style={styles.name}>{item.name}</Text>
         <Text style={styles.price}>{item.price}$</Text>
     </View>
     <View style={styles.qantityContainer}> 
                  <Pressable  
                    onPress = {()=>setQantity(qantity > 1 ? qantity - 1 : 1)}
                   style ={styles.lessContainer} >
                        <Text style={styles.less}>-</Text>
                  </Pressable>
                     <Text style={styles.qantity}>{qantity }</Text> 
                     <Pressable  
                        onPress = {()=>setQantity(qantity + 1)}
                     style = {styles.plusContainer}>
                        <Text style={styles.plus}>+</Text>
                  </Pressable>
     </View> 
        <View style={styles.totalContainer}> 
            <Text style={styles.total}>{(qantity * item.price)}</Text> 
        </View> 
       <Pressable onPress={()=>{
            dispatch(removeFromCart(item._id.$oid)) 
            dispatch(removebadgeCart()) ; 
       }}>
       <View style={styles.deleteContainer}>  
          <AntDesign name="delete" size={30} color="#e54342" />
        </View> 
       </Pressable>
      
 </View>
  )
} 


const styles = StyleSheet.create({ 
    itemcontainer :{
        flexDirection : "row" , 
        justifyContent : "space-between" , 
        alignItems : "center" , 
        marginVertical : 10 , 
      //  marginHorizontal : 10 ,  
       
        paddingHorizontal : 20 ,  
        paddingVertical : 10 ,
        backgroundColor : "white" , 
        borderRadius : 10 , 
        shadowColor: "#000", 
        shadowOffset: { 
            width: 0, 
            height: 2, 

        } ,
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5, 
        width : "100%" ,
    } , 
    images : {
        width : 68 , 
        height : 100 , 
        resizeMode : "contain" , 

    }  ,
    qantityContainer :{ 
        flexDirection : "row" , 
        justifyContent : "space-around" ,
        width : 80,
        marginHorizontal : 5 ,
    }  , 
    qantity :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "black" , 
        marginVertical : 5 , 
    } , 
    lessContainer :{
        backgroundColor : "#e54342" , 
        width : 35 , 
        height : 30 ,
        justifyContent : "center" ,
        alignItems : "center" ,
       marginRight : 45,
       borderRadius : 10 ,
    } , 

    plusContainer :{  
        backgroundColor : "#90EE90"  , 
       width : 40 , 
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
   container_name_price :{
         flexDirection : "column" , 
            justifyContent : "space-between" , 
            alignItems : "center" , 
           
   } , 
   name : {
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "black" , 
        marginVertical : 5 , 

   } , 
   price : {
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "black" , 
        marginVertical : 5 , 

   } , 
   totalContainer :{
     //   flexDirection : "column" , 
      //  justifyContent : "space-between" , 
     //   alignItems : "center" , 
      //  width : 100 , 
      //  marginHorizontal : 10 , 
        
   } , 
   total :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "black" , 
        marginVertical : 5 , 

   } , 
   deleteContainer :{ 
     //   flexDirection : "column" , 
        justifyContent : "space-between" , 
        alignItems : "center" , 
       // width : 50 , 
       // marginHorizontal : 10 , 
         

   }
})  ; 

export default CartItem ; 


