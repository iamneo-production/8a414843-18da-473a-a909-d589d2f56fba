import Lottie from 'lottie-react';
import Home from "../../assests/Lottiefiles/Home.json"


export default function HomeLottie() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Home,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div className="controlled" style={{ display: 'flex', justifyContent: 'center' }}>
            <Lottie
                //  options={defaultOptions}
                style={{ height: '400px', width: '400px' }}
                animationData={Home}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}