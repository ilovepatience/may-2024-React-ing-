import React from 'react';
import './App.css';
import Product from "./components/products/Product";

function App() {
  return (
    <div>
        <Product id={1} title={"Essence Mascara Lash Princess"} description={"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."} category={"beauty"} price={9.99} discountPercentage={7.17} rating={4.94} stock={5} tags={"beauty, mascara"} brand={"Essence"} sku={"RCH45Q1A"} weight={2} width={23.17} height={14.43} depth={28.01} warrantyInformation={"1 month warranty"} shippingInformation={"Ships in 1 month"} availabilityStatus={"Low Stock"} ratingReview={2} comment={"Very unhappy with my purchase!"} date={"2024-05-23T08:56:21.618Z"} reviewerName={"John Doe"} reviewerEmail={"john.doe@x.dummyjson.com"} returnPolicy={"30 days return policy"} minimumOrderQuantity={24} createdAt={"2024-05-23T08:56:21.618Z"} updatedAt={"2024-05-23T08:56:21.618Z"} barcode={9164035109868} qrCode={"https://assets.dummyjson.com/public/qr-code.png"} img={"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"} thumbnail={"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"}/>
    </div>
  );
}

export default App;
