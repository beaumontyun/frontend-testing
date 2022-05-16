const meta = {"name":"HANDSOFF Membership Pass #001","description":"Serial: 001 \n\nAssignment: Smokey Sun \n\nHolder of this HANDSOFF Membership Pass is granted access to membership perks and benefits of the HANDSOFF community as specified in the terms and conditions, see: https://handsoff.studio/membershiptc","tag":"Smokey Sun","id":"001","external_url":"https://www.handsoff.studio/","image":"ipfs://QmdsYzKLTDEGQWxDGhUnzHysRgVGvMzNDN2tzjPAG5V9Mi/1.jpg","attributes":[{"trait_type":"Background","value":"Marble"},{"trait_type":"Platform","value":"Silver"},{"trait_type":"Adjective","value":"Smokey"},{"trait_type":"Name","value":"Sun"}]}

const GetRequest = () => {
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
                <div className="grid grid-cols-10">
                    <p>{meta.attributes[2].trait_type}:</p>
                    <pre>{meta.attributes[2].value}</pre>
                </div>
                <div className="grid grid-cols-10">
                    <p>{meta.attributes[3].trait_type}:</p>
                    <pre>{meta.attributes[3].value}</pre>
                </div>
            </div>
        </div>
    );
}

export default GetRequest;