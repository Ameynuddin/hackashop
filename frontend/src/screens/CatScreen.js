import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Form, Button, Row, Col, Alert, Container } from "react-bootstrap";
import FilteredProducts from "../components/FilteredProducts";
import "./CatScreen.css";

function CatScreen() {
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [noProductsFound, setNoProductsFound] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
        const categories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(categories);
      } catch (error) {
        setError("Failed to fetch categories. Please try again later.");
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    // To clear filtered products on route change
    setFilteredProducts([]);
    setNoProductsFound(false);
  }, [location]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
      const filtered = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setNoProductsFound(filtered.length === 0); // Set noProductsFound to true if filtered products are empty
      setSearchTerm("");
    } catch (error) {
      setError("Failed to fetch products. Please try again later.");
    }
  };

  const handleNavigation = (path) => {
    setFilteredProducts([]); // Clear filtered products
    navigate(path);
  };

  return (
    <Container>
       <div className="text-center">
        <h1 className="mb-4 mt-4">All Products</h1>
       
        {error && <Alert variant="danger">{error}</Alert>}
        <Row className="justify-content-between align-items-center mb-3 g-3">
          <Col className="d-flex flex-wrap justify-content-center justify-content-md-start" sm={7} md={8} lg={8}>
            <Link to={`/categories/all-products`} className="gx-5">
              <Button className="custom-button m-2 p-2">All</Button>
            </Link>
            {categories.map((category) => (
              <Link to={`/categories/${category}`} key={category}>
                <Button className="custom-button m-2 p-2">{category}</Button>
              </Link>
            ))}
          </Col>

          <Col className="d-flex justify-content-center" sm={5} md={4} lg={4}>
            <Form onSubmit={handleSearch} className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input-container"  
              />
              <Button variant="dark" type="submit" className="px-2">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
       
        <Row className="justify-content-center mt-3 mb-4">
          {filteredProducts.length > 0 ? (
            <FilteredProducts products={filteredProducts} />
          ) : noProductsFound ? (
            <div>No products found for your search.</div>
          ) : (
            <Outlet />
          )}
        </Row>
      </div>
    </Container>
  );
}

export default CatScreen;
