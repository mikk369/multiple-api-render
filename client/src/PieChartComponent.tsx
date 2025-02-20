import { PieChart, Pie, Cell, Tooltip } from "recharts";

const LEGENDCOLORS: { [key: string]: string } = {
  scheduled: '#0088FE',
  totalFlights: '#0088FE',
  totalEmission: '#0088FE',
  onTime: '#0088FE',
  totalAirlines: '#0088FE',
  performance: '#0088FE',
  active: '#00C49F',
  onTimeFlights: '#00C49F',
  averageEmissionsPerFlight: '#00C49F',
  activeAirlines: '#00C49F',
  landed: '#FFBB28',
  delayed: '#FF8042',
  delayedFlights: '#FF8042',
  canceled: '#FF4D4D',
  globalAnnualEmissions: '#FFBB28',
  inactiveAirlines: '#FF4D4D',
};

interface filteredFlightsData {
  totalFlights: number;
  delayedFlights: number;
  canceledFlights: number;
}

interface PieChartProps {
  value: string | number;
  label: string;
  data: { [key: string]: number | string };
  filteredFlightsData?: filteredFlightsData
  legendType: string;
}

interface LegendItem {
  label: string;
  value: number | string;
  color: string;
}

function PieChartComponent({ value, label, data, legendType }: PieChartProps) {
  const renderLegend = () => {
    let legendItems: LegendItem[] = [];
    
    switch (legendType) {
      case 'aircraft':
        legendItems = [
          { label: 'Scheduled', value: data.scheduled, color: LEGENDCOLORS.scheduled},
          { label: 'Active', value: data.active, color: LEGENDCOLORS.active},
          { label: 'Inactive', value: data.landed, color: LEGENDCOLORS.landed },
        ];
        break;
      case 'performance':
        legendItems = [
          { label: 'Total', value: data.totalFlights, color: LEGENDCOLORS.scheduled},
          { label: 'Delayed', value: data.delayedFlights, color: LEGENDCOLORS.delayed},
          { label: 'onTime', value: data.onTimeFlights, color: LEGENDCOLORS.active},
        ];
        break;
      case 'totalAirlines':
        legendItems = [
          { label: 'Airlines', value: data.totalAirlines, color: LEGENDCOLORS.scheduled},
          { label: 'Active', value: data.activeAirlines, color: LEGENDCOLORS.active},
          { label: 'Inactive', value: data.inactiveAirlines, color: LEGENDCOLORS.canceled},
        ];
        break;
      case 'emission':
        legendItems = [
          { label: 'Total', value: data.totalEmission, color: LEGENDCOLORS.scheduled},
          { label: 'Average', value: data.averageEmissionsPerFlight, color: LEGENDCOLORS.active},
          { label: 'Annual', value: data.globalAnnualEmissions, color: LEGENDCOLORS.landed},
        ];
        break;
      // Add more cases for other data types
      default:
        legendItems = [];
    }

    return legendItems.map((item, index) => (
      <div key={index} className="status">
        <span className="dot" style={{backgroundColor: item.color}}></span>
        <span>{item.label}</span>
      </div>
      ))
    };
  
  const chartData = Object.entries(data).filter(([key]) => 
    key !== "totalAircrafts" && key !== "totalDepartures").map(([key, val]) => 
      ({ name: key, value: val, color: LEGENDCOLORS[key] || "#8884d8", }));
  return (
    <div className="chart-wrapper">
      <div className="chart-container">
        <PieChart width={300} height={200}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
            <Tooltip wrapperStyle={{ transform: "translate(80px, -40px)"  }}/>
        </PieChart>
        {/* Text elements inside the chart */}
        <div className="chart-text">
          <p>{value}</p>
          <span>{label}</span>
        </div>
      </div>
      <div className="data-legend">
        {renderLegend()}
      </div>
    </div>
  );
}

export default PieChartComponent;
