import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'January', hours: 120 },
    { name: 'February', hours: 150 },
    { name: 'March', hours: 200 },
    { name: 'April', hours: 180 },
    { name: 'May', hours: 220 },
    { name: 'June', hours: 300 },
    { name: 'July', hours: 290 },
    { name: 'August', hours: 250},
    { name: 'September', hours: 200 },
    { name: 'October', hours: 150 },
    { name: 'November', hours: 230 },
    { name: 'December', hours: 250 },
  ];
function RevenueChart () {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="hours" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
    );
}

export default RevenueChart;