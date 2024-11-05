import React, {FC} from 'react';
import {ObjectOfProducts} from "../../stuff/prodsData";
import {ModelProduct} from "../model/ModelProduct";
import Product from "../product/Product";

const Products: FC = (props) => {
    const products:ModelProduct[] = ObjectOfProducts.products;
     return (
        <div>
            {
                products.map((product:ModelProduct)=>(<Product item={product}/>))
            }
        </div>
    );
};

export default Products;