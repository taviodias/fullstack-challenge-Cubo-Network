import { PieChart } from 'react-minimal-pie-chart';

const colors =[
    '#36a2eb',
    '#ff6384',
    '#8e51cc',
    '#8ecc51',
    '#51cccc',
    '#ccad51',
    '#51cc70',
    '#cc51ad',
    '#519ecc',
    '#bccc51',
    '#cc7f51',
    '#60cc51',
    '#cc517f'
];

const participants = [
    {
        firstName: 'Hugo',
        lastName: 'Silva',
        share: 20
    },
    {
        firstName: 'Carlos',
        lastName: 'Moura',
        share: 5
    },
    {
        firstName: 'Elisa',
        lastName: 'Souza',
        share: 20
    },
    {
        firstName: 'Fernanda',
        lastName: 'Oliveira',
        share: 15
    },
    {
        firstName: 'Anderson',
        lastName: 'Santos',
        share: 40
    }
]

const data = participants.map((participant, index) => {
    return {
        title: `${participant.firstName} ${participant.lastName}`,
        value: participant.share,
        color: colors[index % colors.length]
    };
});

export function Chart(){
    return(
        <div className='flex gap-6 justify-between'>
            <div className='h-60 pl-10'>
                <PieChart
                    data={data}
                    lineWidth={45}
                    paddingAngle={1}
                    startAngle={225}
                />
            </div>
            <Indexes />
        </div>
    )
}

function Indexes(){
    return (
        <ul>
            {data.map(participant => {
                return(
                    <li className='flex gap-3 items-center mb-6'>
                        <div className='h-6 w-6 rounded' style={{backgroundColor: participant.color}}></div>
                        <p className='font-bold text-sm' style={{color: participant.color}}>{participant.title}</p>
                    </li>
                )
            })}
        </ul>
    )
}