import s from '../styles/Scrolling.module.css'
import { useContext, useRef } from 'react'
import { ScrollContext } from './scrollObserver'

const opacityForBlock = (sectionProgress, blockNo) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

const ScrollAction = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef(null)

    const numOfPages = 6
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }


    return (
        <div ref={refContainer} className='bg-black text-white'>
            <div className='min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold'>
                <div className='leading=[1.15]'>
                    <div className={s.skillText} style={{ opacity: opacityForBlock(progress, 0) }}>
                        PHYSICAL X DIGITAL = PHYGITAL
                    </div>
                    <span className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 1) }}>
                        NFTs? Profile pictures? That only scratches the surface of the possibilities.
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 2) }}>
                        The next natural step in the evolution of NFT technology is Phygital.
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 3) }}>
                        <ul className='list-disc'>
                            <li>Connecting the digital to the physical.</li>
                            <li>Where URL and IRL converge.</li>
                            <li>Bringing NFTs to life.</li>
                        </ul>
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 4) }}>
                        Create, collect and show the world what the future of NFTs can really be.
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{ opacity: opacityForBlock(progress, 5) }}>
                        We are HANDSOFF, so you can be hands on.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ScrollAction;

// after:content-['_']