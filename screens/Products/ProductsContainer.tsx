import { View, Text  , FlatList,ListRenderItemInfo , StyleSheet}  from 'react-native'
import React , {useState ,useEffect}  from 'react' 
import data from "../../assets/data/product"   ; 
import ProductItem from  "./ProductItem"
 

const ProductsContainer = () => { 
   // const  [products, setProducts] = useState<Product>([]) 


  return (
    <View>
      <FlatList   
       contentContainerStyle={styles.list}
        data={data}  
       
        renderItem={({item}) => {
            return (
                    <ProductItem item={item}  />
                    
            )
            }} 
            
        keyExtractor = {(item) => item._id.$oid}

     
      />
    </View>
  )
} 

const styles = StyleSheet.create({
    list: { 
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap', 
        
    }

})

export default ProductsContainer ; 