import { Chart } from "./chart";
import { Table } from "./table";

export function Content(){
    return(
        <div className="container max-w-5xl mx-auto">
            <div className="text-center py-14 text-gray-700">
                <p className="text-2xl font-bold">DATA</p>
                <p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex w-full gap-8">
                <Table />
                <Chart />
            </div>
        </div>
    )
}