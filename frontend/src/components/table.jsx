export function Table({participants}){
    return(
        <table className="justify-center h-min border border-gray-300 border-collapse table-fixed text-sm text-[#707070]">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-2 w-9"></th>
                    <th className="border border-gray-300 p-2 text-start">First Name</th>
                    <th className="border border-gray-300 p-2 text-start">Last Name</th>
                    <th className="border border-gray-300 p-2 w-28 text-center">Participation</th>
                </tr>
            </thead>
            <tbody>
                {
                    participants.map((participant, index) => {
                        return(
                            <tr key={index}>
                                <td className="border border-gray-300 p-2 text-center">{index+1}</td>
                                <td className="border border-gray-300 p-2">{participant.firstName}</td>
                                <td className="border border-gray-300 p-2">{participant.lastName}</td>
                                <td className="border border-gray-300 p-2 text-center">{participant.share}%</td>
                            </tr>
                        )
                    })
                }
                {/* <tr>
                    <td className="border border-gray-300 p-2 text-center">2</td>
                    <td className="border border-gray-300 p-2">Fernanda</td>
                    <td className="border border-gray-300 p-2">Oliveira</td>
                    <td className="border border-gray-300 p-2 text-center">15%</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 text-center">3</td>
                    <td className="border border-gray-300 p-2">Hugo</td>
                    <td className="border border-gray-300 p-2">Silva</td>
                    <td className="border border-gray-300 p-2 text-center">20%</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 text-center">4</td>
                    <td className="border border-gray-300 p-2">Eliza</td>
                    <td className="border border-gray-300 p-2">Souza</td>
                    <td className="border border-gray-300 p-2 text-center">20%</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 text-center">5</td>
                    <td className="border border-gray-300 p-2">Anderson</td>
                    <td className="border border-gray-300 p-2">Silva</td>
                    <td className="border border-gray-300 p-2 text-center">40%</td>
                </tr> */}
            </tbody>
        </table>
    )
}