import { StyleSheet, Text, View  ,Image} from 'react-native' 
import Swiper from "react-native-swiper"
import React , {useState ,useEffect} from 'react'


const Banner = () => {  
    const [banner , setBanner] = useState<string[]>([]) 

    useEffect(()=>{
        setBanner([
            "https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/FetchRules/PLP_Banner_PartialGroup/Outdoors/Outdoor-Lounge-Chairs-Chairs-VisNav.jpg" , 
            "https://www.tryandbuy.tn/8350-large_default/jeux-ps4-sony-fifa-20.jpg" ,
            "https://asset1.cxnmarksandspencer.com/is/image/mands/Marlow-Garden-Armchair-1/CL_05_T65_9201B_T0_X_EC_90?$PDP_IMAGEGRID_1_LG$" ,
            "https://sc04.alicdn.com/kf/HTB1EbS.OhTpK1RjSZFMq6zG_VXa3.jpg" , 

        ]) 
        return ()=>{
            setBanner([]) 
        }
    } , [])

  return (
   <View style ={styles.container} > 
      <View style = {styles.swiper}>
            <Swiper  
                    autoplay={true} 
                    autoplayTimeout={2} 
                    showsButtons={false} 
                    showsPagination={true} 
                    dotColor="white"
                    activeDotColor="red"

            > 
                {banner.map((item , index)=>( 
                            <View key={index}>
                                <Image  
                                source={{uri : item} }  
                                style={styles.image}
                                />    
                            </View> 
                    ))}
        </Swiper> 
         
      </View>

   </View>
  )
}



const styles = StyleSheet.create({ 
    container :{
       // flex : 1  , 
        justifyContent : "center" , 
        alignItems : "center" ,  
      //  height : 120,
   //  backgroundColor : "yellow" , 
    //    width : "100%" , 
      //  height : 200, 
     //  marginTop : 40 , 
      //  marginBottom : 10 ,

    } ,
    swiper :{
        width : "90%" , 
        height : 80 , 
        backgroundColor : "white" ,
        justifyContent : "center" ,
        alignItems : "center" ,
       // borderRadius : 30 ,
        elevation : 4 , 
        marginHorizontal : 10 , 
      // marginTop : -100 ,  
     //  padding : 10 ,

    } ,
    image :{
        width : "100%" ,
        height : 80 ,
        borderRadius : 20 ,
        resizeMode : "contain" , 
        marginTop : 10 , 
        marginBottom : 10 ,

    }
   
}) 

export default Banner