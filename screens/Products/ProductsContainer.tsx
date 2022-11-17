import { View, Text  , FlatList,ListRenderItemInfo , StyleSheet , TextInput ,TouchableWithoutFeedback}  from 'react-native'
import React , {useState ,useEffect}  from 'react' 
import data from "../../assets/data/product"   ; 
import ProductItem from  "./ProductItem" 
import Header from "../../Shared/Header"   
import { EvilIcons } from '@expo/vector-icons';  
import Banner from "../../Shared/Banner" 
import category from "../../assets/data/categories" ; 
import CategoryFilter  from "../../components/CategoryFilter" ;


export type dataType = {
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

  export type datacategory = {
    _id: {
        $oid: string;
    };
    name: string;
    __v: number;
}[]

const ProductsContainer = () => {  

            const [products, setProducts] = useState<dataType[]>([]) 
            const [filter , setFilter] = useState<boolean>(false) ;  
            const [filterProduct , setFilterProduct] = useState<dataType[]>([]) ;  
            const [categ , setCateg] = useState<datacategory>([]) ;  
            const [active ,setActive] = useState<number | null >(null) ; 
             


            useEffect(()=>{ 
                setProducts(data) 
                setCateg(category) 
                //setActive(category[0]._id.$oid) 
              //  setActive(-1)
               // setFilterProduct(data)   
              

                return ()=>{
                    setProducts([]) 
                    setCateg([])  
                  //  setActive()
                    setFilterProduct([])  
                  
                }

            } , [])   

            

      //Filter Product By Category   
          const filterProductByCategory = (id:string) =>{ 
                        const newProduct = products.filter((item)=>item.category.$oid === id) ; 
                        setFilter(true) ;
                        setFilterProduct(newProduct) ; 
                       
          }        

          const handlecategory =(index :number) =>{
                setActive(index) 
          }
 

                
   // Search Product By Name  . 

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
    <View style={styles.containerP}> 
        <Header />   
        
        <View style={styles.searchContainer}>   

        <EvilIcons name="search" size={24} color="black" style ={{marginTop :10}} /> 

            <TextInput 
                    style={styles.input}  
                        placeholder="Saisir Votre Recherche Ici "  
                        onChangeText={(text)=>filterProducts(text)} 
              />     
        </View>    

        <View style={styles.banner}>
            <Banner />
        </View>  

         <View style = {{flex:0.5 , backgroundColor:"white"}} > 
              <CategoryFilter 
                    categorie = {categ}    
                        filterProductByCategory = {filterProductByCategory} 
                        active = {active} 
                    handlecategory = {handlecategory}
                />
         </View>
       
              <View style= {styles.containerFlatlist}>
            
                 {filterProduct.length > 0 && products.length > 0  ? ( 
                    <FlatList    

                    contentContainerStyle={styles.list} 
   
                        data={filter ? filterProduct : products} 
   
                        renderItem={({item}) => { 
   
                            return ( 
   
                                    <ProductItem item={item}  />
                                    
                            )
                            }} 
                            
                        keyExtractor = {(item) => item._id.$oid}
   
   
               /> 

                 ) : (
                    <View style ={styles.Notfound}>  
                          <Text style = {styles.textnofound} >No Product Found </Text>
                        </View>
                 )}
             
              </View>
        
      
    </View>
  )
} 

const styles = StyleSheet.create({
    list: { 
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',  
      //  marginTop : 60 , 
      //  flex : 1.5, 
       // backgroundColor :"white" ,
         
    } , 
    searchContainer : { 
     //   marginBottom : 20 ,  
        marginHorizontal : 15 ,
        backgroundColor : "white" , 
        marginTop : 5 , 
        padding : 5 , 
        borderRadius : 12 , 
       // elevation : 10,  
       height : 60 , 
         flexDirection : "row" , 
          //  justifyContent : "space-around" , 
         // width :"100%" 
         flex : 0.2,

    } ,
    input :{
        fontSize : 18 , 
        fontWeight : "bold" , 
        color : "black" ,  
        

    } ,
    containerP :{
        flex : 1 , 
        backgroundColor : "#DCDCDC" ,
    } ,
    banner :{
        flex : 0.8, 
        backgroundColor : "white" ,   
        paddingVertical : 10 , 
        margin : 10, 
        borderRadius : 12 ,
        
    } ,
    containerFlatlist :{
        flex : 3,
    } ,
    Notfound :{
        //textAlign : "center" , 
        justifyContent : "center" , 
        alignItems : "center" ,  
        flex : 1 ,
    }  , 
    textnofound :{
        fontSize : 40 , 
        fontWeight : "bold" , 
        color : "black" , 

    }

})

export default ProductsContainer ; 