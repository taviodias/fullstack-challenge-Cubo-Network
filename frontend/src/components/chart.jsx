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

export function Chart(){
    return(
        <div className='flex'>
            <PieChart
                data={[
                    { title: 'One', value: 10, color: colors[0] },
                    { title: 'Two', value: 15, color: colors[1] },
                    { title: 'Three', value: 20, color: colors[2] },
                ]}
                lineWidth={45}
                paddingAngle={1}
                startAngle={225}
            />
        </div>
    )
}