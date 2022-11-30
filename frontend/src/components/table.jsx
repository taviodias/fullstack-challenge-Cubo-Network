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
            </tbody>
        </table>
    )
}