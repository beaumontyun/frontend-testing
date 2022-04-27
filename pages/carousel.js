import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'
import style from '../styles/Carousel.module.css'
import media1 from "../public/test/light.jpeg";
import media2 from "../public/test/dark.jpeg";
import { useCallback } from "react";

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
    return (
        <div className="relative bg-white p-[20px] w-fit h-fit mx-auto overflow-hidden border-2 border-red-300">
            <div className={style.emblaViewport} ref={emblaRef}>
                <div className="flex select-none -ml-[10px] w-96">
                    <div className={style.emblaSlide}>
                        <Image src={media1} objectFit="cover" />
                    </div>
                    <div className={style.emblaSlide}>
                        <Image src={media2} objectFit="cover" />
                    </div>
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
        </div>
    );
}

export default Carousel;