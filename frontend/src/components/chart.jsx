import { PieChart } from 'react-minimal-pie-chart';
import { colors, grayColor } from '../data/contants';

export function Chart({participants}){
	const data = participants.map((participant, index) => {
		return {
			title: `${participant.firstName} ${participant.lastName}`,
			value: participant.share,
			color: colors[index % colors.length]
		};
	});
	return(
		<div className='flex gap-6 justify-between'>
			<div className='h-60 pl-10'>
				<PieChart
					animate
					animationDuration={500}
					animationEasing="ease-out"
					data={data}
					lineWidth={45}
					paddingAngle={1}
					startAngle={225}
					totalValue={100}
				/>
			</div>
			<Indexes data={data} />
		</div>
	)
}

function Indexes({data}){
	return (
		<ul>
			{data.map((participant, index) => {
				if (participant.color === grayColor) return;
				return(
					<li key={index} className='flex gap-3 items-center mb-6'>
						<div className='h-6 w-6 rounded' style={{backgroundColor: participant.color}}></div>
						<p className='font-bold text-sm' style={{color: participant.color}}>{participant.title}</p>
					</li>
				)
			})}
		</ul>
	)
}