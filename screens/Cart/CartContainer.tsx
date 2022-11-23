import { View, Text ,StyleSheet , Image ,ScrollView, Pressable } from 'react-native'
import React ,{useState ,useEffect} from 'react'  ;
import {useSelector ,useDispatch} from "react-redux" ; 
import CartItem from './CartItem'; 
import {clearCart} from "../../Redux/action/actionCartItem" ; 
import {addbadgeCart ,removeallbadgeCart , removebadgeCart} from "../../Redux/action/actionbadge" 
import {useNavigation} from "@react-navigation/native" ;    
import {CartTopScreenProps} from "../../types"
 
export interface CartType  {  
  //id :string ,
   _id: {
     $oid: string;
  } , 
   image: string , 
   brand: string , 
   price: number , 
   rating: number , 
   numReviews: number , 
   isFeatured: boolean ,
   name: string ,
   description: string ,
   category: {
       $oid: string; 
   } , 
   countInStock: number , 
   __v: number , 
  
  quantity: number , 
   //  total: number , 
  //   priceTotal: number , 

} 

const CartContainer = () => { 

  const [total_sum , setTotal_sum] = useState<number>(0) ;

  
  const carts = useSelector((state :any)=>state.my_produits)  ;    

  const dispatch = useDispatch() ; 
   
 // console.log("hello petit sarr cva voici le cart" , carts) ; 

 const navigation = useNavigation<CartTopScreenProps>() ;
   

  useEffect(()=>{ 

    const total = carts.map((c : CartType)=>c.quantity * c.price); 

    //console.log("My total is ==>" , total) ;  

    const totalSum = total.reduce((a: number,b : number)=>a+b , 0) ;   

    setTotal_sum(totalSum) ; 

   //console.log("My total sum is ==>" , totalSum) ;
  } , [carts, total_sum]) ;

  return ( 
   <View style={styles.container}> 
         <ScrollView>
       <View > 
    {carts.length === 0 ?(
       <View style ={styles.vide}>
        <Text style={styles.txtvide}>Votre panier est vide</Text>
         </View>
    ) :  
      carts.map((item : CartType , index :number  )=>{ 
        console.log("item" , item) ;
        return(
         <CartItem key = {index}  item={item} />
        )
      })
     } 
    </View>
   </ScrollView> 
    <View style={styles.total}>  
     <View style ={styles.txt_sum}> 
        <Text style={styles.totalText}>Total : </Text> 
        <Text style={styles.totalsum}>{(total_sum).toFixed(0)} $</Text>
     </View> 
     <View style ={styles.container_checkout}> 
        <Pressable  
        onPress ={()=> {
          dispatch(clearCart()) 
          dispatch(removeallbadgeCart())
        }} 
        > 
        <View style ={styles.clearContainer}>
          <Text style={styles.clear}>Clear</Text>
        </View>
        </Pressable>
        <Pressable  
        onPress={()=> navigation.navigate("Checkout")}
        >
        <View style ={styles.checkContainer}>
          <Text style={styles.checkout}>Checkout</Text>
         </View>
        </Pressable>
     </View>
    </View>
   </View>
  )
} 
const styles = StyleSheet.create({ 
  container :{ 
    flex :1 , 
 //   alignItems :"center" ,
  //  justifyContent :"center" , 
    width : "100%" ,  

    
  } , 
  total : {
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
      height : 80 , 

  } , 
  txt_sum :{
    flexDirection : "row" , 
    justifyContent : "space-between" ,
    alignItems : "center" ,
    width : "30%" ,

  } , 
  totalText :{
    fontSize : 20 , 
    fontWeight : "bold" , 
    color : "black" , 

  } , 
  totalsum :{
    fontSize : 20 , 
    fontWeight : "bold" , 
    color : "#e54342" , 
  } , 
  container_checkout :{
    flexDirection : "row" , 
    justifyContent : "flex-end" , 
    alignItems : "center" , 
    width : "70%" ,
  } , 
  clearContainer :{
    backgroundColor : "#d66064" , 
    marginHorizontal : 10 , 
     width : 80 , 
     justifyContent :"center" ,
      alignItems :"center" , 
      height : 30 ,  
      borderRadius : 5 ,  
      padding : 5

  } ,
  checkContainer :{
    backgroundColor : "#90EE90" , 
    marginHorizontal : 10 , 
      width : 80 , 
      justifyContent :"center" , 
      alignItems :"center" ,  
      height : 30 , 
      borderRadius : 5 ,  
      padding : 5

  } , 
  clear :{
    color : "white" , 
    fontSize : 15 , 
    fontWeight : "bold" , 
    
  } , 
  checkout :{
    color : "white" , 
    fontSize : 15 , 
    fontWeight : "bold" , 

  }  , 
  vide :{
   // flex :1 , 
    justifyContent :"center" , 
    alignItems :"center" , 
    backgroundColor : "white" ,  
    marginTop : 170 ,  
    height : 200 , 
    width : "100%" , 
    borderRadius : 10 ,
    shadowColor: "red", 
    shadowOffset: { 
        width: 0, 
        height: 2,  


    }

  } ,
  txtvide :{
    fontSize : 40 , 
    fontWeight : "bold" , 
    color : "black" , 

  }
} )
export default CartContainer