import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'
import style from '../styles/Carousel.module.css'
import media1 from "../public/test/light.jpeg";
import media2 from "../public/test/dark.jpeg";
import { useCallback } from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="relative bg-black text-white p-[20px] w-fit h-fit mx-auto overflow-hidden">
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
        <div className="grid grid-cols-2">
        <button className="embla__prev font-bold" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next font-bold" onClick={scrollNext}>
          Next
        </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Carousel;