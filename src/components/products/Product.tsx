import React, {FC} from 'react';
type  IPropType = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string;
    brand: string;
    sku: string;
    weight: number;
    width: number;
    height: number;
    depth: number;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    ratingReview: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
    returnPolicy: string;
    minimumOrderQuantity: number;
    createdAt: string;
    updatedAt: string;
    barcode: number;
    qrCode: string;
    img: string;
    thumbnail: string;

}


const Products: FC<IPropType> = (props) => {
    let { id, title,description, category, barcode, availabilityStatus, brand, date, comment, createdAt, depth, sku, height, img, discountPercentage, minimumOrderQuantity, qrCode, price, rating, ratingReview, reviewerEmail, reviewerName, shippingInformation, warrantyInformation,  tags, stock, thumbnail, width, weight, updatedAt, returnPolicy} = props;
    return (
        <div>
            <h3>ID - {id}</h3>
            <h2>Title - {title}</h2>
            <p>Description - {description}</p>
            <h4>Category - {category}</h4>
            <p>Price - {price}</p>
            <p>Discount Percentage - {discountPercentage}</p>
            <p>Rating - {rating}</p>
            <p>stock - {stock}</p>
            <p>tags - {tags}</p>
            <p>brand - {brand}</p>
            <p>sku - {sku}</p>
            <p>weight - {weight}</p>
            <ul>dimensions:
                <li>width - {width}</li>
                <li>height - {height}</li>
                <li>depth - {depth}</li>
            </ul>
            <p>warrantyInformation - {warrantyInformation}</p>
            <p>shippingInformation - {shippingInformation}</p>
            <p>availabilityStatus - {availabilityStatus}</p>
            <ul>reviews
                <>
                    <li>rating - {ratingReview}</li>
                    <li>comment - {comment}</li>
                    <li>date - {date}</li>
                    <li>reviewerName - {reviewerName}</li>
                    <li>reviewerEmail - {reviewerEmail}</li>
                </>
                <>
                    <li>rating - {ratingReview}</li>
                    <li>comment - {comment}</li>
                    <li>date - {date}</li>
                    <li>reviewerName - {reviewerName}</li>
                    <li>reviewerEmail - {reviewerEmail}</li>
                </>
                <>
                    <li>rating - {ratingReview}</li>
                    <li>comment - {comment}</li>
                    <li>date - {date}</li>
                    <li>reviewerName - {reviewerName}</li>
                    <li>reviewerEmail - {reviewerEmail}</li>
                </>
            </ul>
            <p>returnPolicy - {returnPolicy}</p>
            <p>minimumOrderQuantity - {minimumOrderQuantity}</p>
            <ul>meta:
                <li>createdAt - {createdAt}</li>
                <li>updatedAt - {updatedAt}</li>
                <li>barcode - {barcode}</li>
                <li>qrCode - {qrCode}</li>
            </ul>
            <img src={img} alt={title}/>
            <img src={thumbnail} alt={title}/>

        </div>
    );
};

export default Products;