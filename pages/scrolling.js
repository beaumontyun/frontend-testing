import ScrollAction from "../components/scrollAction";

const Scrolling = () => {
    return (
        <div className="">
            <div className="h-48 bg-black"></div>
            <ScrollAction />
            <div className="h-60 bg-black"></div>
            <div className="w-full">
                <video autoPlay loop muted className="rounded-lg w-10/12 mx-auto">
                    <source src="/test/membership.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="h-48 bg-black"></div>
        </div>
    );
}

export default Scrolling;