import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import HomeCarousel from '../components/HomeCarousel';
import { Container } from 'react-bootstrap';

const logger = (reducer) => {
    return (state, action) => {
        console.log('Previous State:', state);
        console.log('Action:', action);
        const newState = reducer(state, action);
        console.log('Next State:', newState);
        return newState;
    };
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function HomeScreen() {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });
    // const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }

            // setProducts(result.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Hackashop</title>
            </Helmet>

            <HomeCarousel />
            {/* <Container> */}
            <div className="container-fluid p-5 bg-light" style={{ overflowX: 'hidden' }}>
                <h1 className='text-center text-uppercase display-3 fw-bold mt-4 mb-3'>Featured Products</h1>
                <hr className="hr hr-blurry mb-3" />
                <div className="products" >
                    {loading ? (
                        <LoadingBox />
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <Row className="d-flex justify-content-center">
                            {products.map((product) => (
                                <Col key={product.slug} xs={12} md={6} lg={4} className="g-4">
                                    <Product product={product}></Product>
                                </Col>
                            ))}
                        </Row>
                    )}
                </div>
            </div>
        </>
    );
}
export default HomeScreen;