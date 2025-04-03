import React, { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { useCart } from "./CartContext"; // Import cart context hook

function Portfolio() {
  const [items, setItems] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State to manage loading state
  const { cart, addToCart } = useCart(); // Use cart and addToCart from context

  // Fetch product data on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsRes = await fetch("http://localhost:3000/products");

      if (productsRes.ok) {
        const products = await productsRes.json();
        console.log("Fetched products:", products); // Debugging
        setItems(products); // Set products to state
      } else {
        console.error("Error fetching products.");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const handleAddToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      addToCart(product); // Use context method to add the product
    }
  };

  if (loading) {
    return (
      <Container className="text-center p-4 mt-4">
        <Spinner animation="border" role="status" />
        <p>Loading products...</p>
      </Container>
    );
  }

  return (
    <Container className="text-center p-4 mt-4">
      <h3 className="border-bottom border-3 w-25 mx-auto d-block pb-3">Portfolio</h3>
      <h1 className="text-center mt-4">PRODUCTS</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4">
        {items.length > 0 ? (
          items.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100 border-0 shadow">
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={product.name || "Product Image"}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹ {product.price}</p>
                  <Button
                    variant="success"
                    onClick={() => handleAddToCart(product)}
                    disabled={cart.some((item) => item.id === product.id)} // Disable button if already in cart
                  >
                    {cart.some((item) => item.id === product.id)
                      ? "In Cart"
                      : "Add To Cart"}
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </Container>
  );
}

export default Portfolio;
