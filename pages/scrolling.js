import ScrollAction from "../components/scrollAction";

const Scrolling = () => {
    return (
        <div className="">
            <div className="h-[1000px] bg-gray-500"></div>
            <ScrollAction />
            <ScrollAction />
        </div>
    );
}

export default Scrolling;