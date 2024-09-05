import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <div className='text-center mt-3 text-wrap w-75 lh-base'>
                <p>Ensuring the best for your experience....</p>
                <p>Please wait while the server loads as it is hosted on a free instance of Render which may take a moment to start up {':)'}</p>
            </div>

        </>
    );
}