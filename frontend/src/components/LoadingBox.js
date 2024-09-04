import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
    return (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <div className='text-center mt-3 text-wrap w-50 lh-base'>
                <p>Ensuring the best for your experience....</p>
                <p>Please wait while the server loads as it is hosted on a free instance of Render which may take a moment to start up {':)'}</p>
            </div>

        </>
    );
}