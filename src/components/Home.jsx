import { useNavigate } from 'react-router-dom';


function Home() {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/level1');
    };

    return (
        <div>
            <h1>What is NS Tutorial</h1>
            <hr />
            <p>NS Tutorial is an open-source learning platform for new coders that allows users to learn, discuss, and share.</p>
            <button onClick={handleGetStarted} style={{ width: "200px", height: "40px" }}>Get started</button>
        </div>
    );
}

export default Home;
