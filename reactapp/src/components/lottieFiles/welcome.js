import Lottie from 'lottie-react';


export default function WelcomeLottie() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        // animationData: Welcome,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div className="controlled" style={{ display: 'flex', justifyContent: 'center' }}>
            <Lottie
                //  options={defaultOptions}
                style={{ height: '200px', width: '200px' }}
                // animationData={Welcome}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}