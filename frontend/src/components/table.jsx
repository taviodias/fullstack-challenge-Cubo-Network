export function Table(){
    return(
        <table className="justify-center grow border border-gray-300 border-collapse table-fixed text-sm text-[#707070]">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-2 w-9"></th>
                    <th className="border border-gray-300 p-2 text-start">First Name</th>
                    <th className="border border-gray-300 p-2 text-start">Last Name</th>
                    <th className="border border-gray-300 p-2 w-28 text-center">Participation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-300 p-2 text-center">1</td>
                    <td className="border border-gray-300 p-2">Carlos</td>
                    <td className="border border-gray-300 p-2">Moura</td>
                    <td className="border border-gray-300 p-2 text-center">5%</td>
                </tr>
                <tr>
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
                </tr>
            </tbody>
        </table>
    )
}