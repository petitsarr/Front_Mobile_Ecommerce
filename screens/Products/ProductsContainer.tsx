import { View, Text  , FlatList,ListRenderItemInfo , StyleSheet , TextInput}  from 'react-native'
import React , {useState ,useEffect}  from 'react' 
import data from "../../assets/data/product"   ; 
import ProductItem from  "./ProductItem"
import Header from "../../Shared/Header"  

type dataType = {
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
  }

const ProductsContainer = () => { 
   // const  [products, setProducts] = useState<Product>([]) 

   const [filter , setFilter] = useState(false) ;  
   const [filterProduct , setFilterProduct] = useState<dataType[]>([]) ; 



   // Filtré mes produits en fonction du nom de la marque . 

   const filterProducts = (text : string )=>{
         const filterred   = data.filter((product)=>{ 
            let dataText = text.toUpperCase() ; 
            let productName = product.name.toUpperCase() ; 
            return productName.indexOf(dataText) > -1 ;
         }) 
         setFilterProduct(filterred) ; 
         setFilter(true) ;
   } 

  return (
    <View> 
        <Header />   
        
        <View style={styles.searchContainer}> 
            <TextInput 
             style={styles.input}  
             placeholder="Saisir Votre Recherche Ici "  
             onChangeText={(text)=>filterProducts(text)}
              /> 
        </View>
      <FlatList    

       contentContainerStyle={styles.list} 

        data={filter ? filterProduct : data} 
       
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
         
    } , 
    searchContainer : { 
        margin : 10 , 
        backgroundColor : "white" , 
        padding : 5 , 
        borderRadius : 10 , 
       // elevation : 10,  
       height : 40 ,

    } ,
    input :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "black" , 

    }

})

export default ProductsContainer ; 