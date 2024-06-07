import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  console.log("ProductDetails");

  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});

  const { id } = useParams();


  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((result) => { setProduct(result);
        setRating(result.rating);
        
      });
  }, []);

  console.log(product);


//   console.log(rating)
  return (
    <>
    <div className="details-card">
            

    <img src={product.image}></img>
    <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
    <h2>{product.title}</h2>
        

    {/* &#x20B9;       Rupees Symbol */}
    <strong >Category: {product.category}</strong>


    <p className="rating">
        {
            rating.rate
        }
      
    </p><span>{rating.count} Ratings</span>
     
        
    <strong style={{fontSize:"20px"}}>Price:&#x20B9;{(product.price)*83.06}</strong>

<br></br>
      <p className="product-details">{
        // setProduct()
          product.description
        }</p>

        </div>
       </div>

    </>
  );
}


export default ProductDetails;
