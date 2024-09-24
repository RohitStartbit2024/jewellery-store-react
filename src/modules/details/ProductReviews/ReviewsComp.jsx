import { productReview } from "../../../static-data/productReview"
import React from 'react';
import ProductReviews from "./ProductReviews";
export default function(props){
    const reviews = productReview[props.sku];
    console.log(reviews);

    return(
        <>
            <div>
            {reviews?.map(review => (
                     <ProductReviews    key={review.name} 
                                        name={review.name}
                                        rating={review.star}
                                        review={review.review}/>
                                    ))}
            </div>
        </>
    )
}