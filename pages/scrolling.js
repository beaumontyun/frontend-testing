import ScrollAction from "../components/scrollAction";
import { motion } from "framer-motion";

const Scrolling = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="h-48 bg-black"></div>
            <ScrollAction />
            <div className="h-60 bg-black"></div>
            <div className="w-full">
                <video autoPlay loop muted className="rounded-lg w-10/12 mx-auto">
                    <source src="/test/membership.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="h-48 bg-black"></div>
        </motion.div>
    );
}

export default Scrolling;