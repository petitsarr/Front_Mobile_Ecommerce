import { View, Text ,Dimensions , TouchableOpacity} from 'react-native'
import React from 'react'  
import ProductCard from './ProductCard';
const {width} = Dimensions.get('window') ; 

export interface Prope {
    item: {
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
}

const ProductItem = ({item} : Prope) => {
  return (
     <View > 
        <ProductCard  item ={item} />
    </View>     
    

  )
}

export default ProductItem ; 