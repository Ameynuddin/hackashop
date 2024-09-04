import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            <span>Ensuring the best for your experience....</span>
            <span>Please wait while the server loads as it is hosted on a free instance of Render which may take a moment to start up {':)'}</span>
        </Spinner>
    );
}