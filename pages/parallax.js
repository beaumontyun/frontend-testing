import { Parallax } from 'react-scroll-parallax';

const ParallaxPage = () => {
    return (
        <>
            <div className='h-[200vh]'></div>
            <Parallax speed={-500} className="h-[100vh]">
                <div className="slow">
                    <p className='text-white pl-20'>Test 1 - slow scroll</p>
                </div>
            </Parallax>
            <Parallax speed={50}>
                <div className="fast">
                    <p className='text-white pl-20'>Test 2 - fast scroll</p>
                </div>
            </Parallax>
            <div className='h-[100vh]'></div>
        </>
    );
}

export default ParallaxPage;