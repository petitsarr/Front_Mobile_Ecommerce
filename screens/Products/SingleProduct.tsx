import { StyleSheet, Text, View  ,Image ,ScrollView}  from 'react-native'
import React,{useState}from 'react' 
import {useRoute} from "@react-navigation/native"  
import {DetailsScreenRouteProp} from  "../../types"

 
const SingleProduct = () => {  

    const route = useRoute<DetailsScreenRouteProp>() ;    
    const [item ,setItem] = useState(route.params) ;

  // console.log("finalement ==> " , item._id.$oid) ;
     
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
                <Text style={styles.price}>{`$ ${item.price}`}</Text> 
            </View> 
            <View style ={styles.addContainer}>
                <Text style={styles.add}> Add</Text>
            </View>
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

    } ,
    price :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        marginBottom : 10 ,
        textAlign : "center" , 
        color :"orange" ,
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
    }

}) 


export default SingleProduct