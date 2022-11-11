import { Chart } from "./chart";
import { Table } from "./table";

export function Content(){
    return(
        <div className="p-4 flex justify-center w-full">
            <Table />
            <Chart />
        </div>
    )
}