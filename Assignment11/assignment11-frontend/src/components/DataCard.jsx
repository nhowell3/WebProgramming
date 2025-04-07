export default function DataCard({data}){
    const getKeys = () => {
        return Object.keys(data[0]);
    }

    return (
        <div>
            {data && 
                <table className="mx-auto rounded-2xl overflow-hidden shadow-md">
                    <tr className="bg-gray-700 text-semibold">
                        {getKeys().map((key) => (
                            <th className="px-8 py-2">{key}</th>
                        ))}
                    </tr>
                {data.map((obj) => {
                    let output = []
                    getKeys().forEach(key => {
                        output.push(
                            <td className="px-8 py-2">{obj[key]}</td>
                        );
                    });
                    return(
                        <tr className="bg-gray-200 text-black font-semibold">{output}</tr>
                    );
                    })
                }
                </table>
            }
            {
                !data &&
                <>
                    Loading
                </>
            }
        </div>
    );
}