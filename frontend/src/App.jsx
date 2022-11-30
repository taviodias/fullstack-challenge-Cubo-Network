import { useState } from "react";
import { Chart } from "./components/chart";
import { Form } from "./components/form";
import { Table } from "./components/table";

export function App() {
	const [participants, setParticipants] = useState([]);

    const addParticipant = (participant) => {
        const totalShare = participants.reduce((acc, cur) => acc + cur.share ,0);
        totalShare + participant.share <= 100 
            ? setParticipants([...participants, participant])
            : null;
    }

	const orderByShare = () => {
		return [...participants].sort((a,b) => {
			return a.share - b.share;
		})
	};

	return (
		<>
			<Form addParticipant={addParticipant} />
			<div className="container max-w-5xl mx-auto">
				<div className="text-center py-14 text-gray-700">
					<p className="text-2xl font-bold">DATA</p>
					<p className="pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className="grid grid-cols-2 w-full gap-8">
					<Table participants={orderByShare()} />
					<Chart participants={participants} />
				</div>
			</div>
		</>
	)
}

