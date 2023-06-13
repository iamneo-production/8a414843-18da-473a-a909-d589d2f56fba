import Lottie from 'lottie-react';
import Home from "../../assests/Lottiefiles/Home.json"


export default function HomeLottie(props) {
    const{height,width, animationData}=props

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
                style={{ height: height, width: width }}
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}