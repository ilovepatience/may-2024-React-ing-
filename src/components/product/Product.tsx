import React, {FC} from 'react';
import {ModelProduct} from "../model/ModelProduct";

type TypeProps = {item:ModelProduct}
const Product:FC<TypeProps> = ({item, }) => {
    return (
        <div>
                <h3>{item.id}</h3>
                <h3>{item.title}</h3>
                <h4>{item.description}</h4>
                <p>{item.category}</p>
                <h3>{item.price}</h3>
                <h4>{item.discountPercentage}</h4>
                <p>{item.rating}</p>
                <h3>{item.stock}</h3>
                <p>{item.tags}</p>
                <h4>{item.brand}</h4>
                <h3>{item.sku}</h3>
                <p>{item.sku}</p>
                <h4>{item.dimensions.width}
                        {item.dimensions.height}
                        {item.dimensions.depth}
                </h4>
                <h5>{item.warrantyInformation}</h5>
                <h4>{item.shippingInformation}</h4>
                <p>{item.availabilityStatus}</p>
                <h3>{item.returnPolicy}</h3>
                <h4>{item.minimumOrderQuantity}</h4>
                <h3>    {item.meta.createdAt}
                        {item.meta.updatedAt}
                        {item.meta.barcode}
                        {item.meta.qrCode}
                </h3>
            <img src={item.thumbnail} alt=""/>
        </div>
    );
};

export default Product;