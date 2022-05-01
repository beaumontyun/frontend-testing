const GetRequest = ({ meta }) => {
    return (
        <div className="text-white m-10 flex flex-row gap-4">
            <div className="grid grid-rows-8 gap-9">
                <div className="grid grid-cols-10">
                    <p>NFT Name:</p>
                    <pre>{meta.name}</pre>
                </div>
                <div className="grid grid-cols-10">
                    <p>Description:</p>
                    <pre>{meta.description}</pre>
                </div>
                <div className="grid grid-cols-10">
                    <p>Image URL:</p>
                    <pre>{meta.image}</pre>
                </div>
                <div className="grid grid-cols-10">
                    <p>Tag:</p>
                    <pre>{meta.tag}</pre>
                </div>
                <div className="grid grid-cols-10">
                    <p>ID:</p>
                    <p>{meta.id}</p>
                </div>
                <div className="grid grid-cols-10">
                    <p>Website:</p>
                    <pre>{meta.external_url}</pre>
                </div>
                <div className="grid grid-cols-10">
                    <p>{meta.attributes[0].trait_type}:</p>
                    <pre>{meta.attributes[0].value}</pre>
                </div>
                <div className="grid grid-cols-10">
                    <p>{meta.attributes[1].trait_type}:</p>
                    <pre>{meta.attributes[1].value}</pre>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/hello')
    const meta = await res.json()

    return {
        props: {
            meta
        }
    }
}

export default GetRequest;