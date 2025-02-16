import PieChartComponent from './PieChartComponent';
import { onTimePerformance, totalAirlines, airportsData } from './localData';

type FilteredAircraftData = {
  pagination: {
    count: number;
  };
  data: {
    id: string;
    plane_status: string;
  }[];
};

type filteredFlightsData = {
  totalFlights: number,
  delayedFlights: number,
  onTimeFlights: number
}

type FlightInfoGridProps = {
  filteredAircraftData: FilteredAircraftData,
  filteredFlightsData: filteredFlightsData
};

function FlightInfoGrid({ filteredAircraftData, filteredFlightsData }: FlightInfoGridProps)  {

  const transformDataForPieChart = (data: { id: string; plane_status: string }[], count: number) => {
    let totalActive = 0;
    let totalLanded = 0;
    let totalScheduled = count;
  
    // Loop through the aircraft data to accumulate the counts
    data.forEach((aircraft) => {
      const status = aircraft.plane_status;
      
      if (status === 'active') {
        totalActive += 1; 
      } else if (status === 'inactive') {
        totalLanded += 1; 
      }
    });
  
    // Return the totals as a new object
    return {
      scheduled: totalScheduled,
      active: totalActive,
      landed: totalLanded
    };
  };
    return (
        <div id='flight-info-grid' className="flight-info-grid">
          <div className="flight-info">
            <div className="flight-info-heading">
              <h2>Aircrafts</h2>
            </div>
            <div className="chart-wrapper">
              <PieChartComponent value={filteredAircraftData.pagination.count}
              label='Aircrafts'
              data={transformDataForPieChart(filteredAircraftData.data, filteredAircraftData.pagination.count)}
              legendType="aircraft"/>
            </div>
          </div>
          <div className="flight-info">
            <div className="flight-info-heading">
              <h2>On Time Performance</h2>
            </div>
            <div className="chart-wrapper">
              <PieChartComponent value={filteredFlightsData.totalFlights} label='Departures'
              data={filteredFlightsData}
              legendType="performance"/>
            </div>
          </div>
          <div className="flight-info">
            <div className="flight-info-heading"> 
              <h2>Total Airlines</h2>
            </div>
            <div className="chart-wrapper">
              <PieChartComponent value={totalAirlines.totalAirlines} label='Airlines'
              data={totalAirlines}
              legendType="totalAirlines"/>
            </div>
          </div>
          <div className="flight-info">
            <div className="flight-info-heading">
              <h2>CO2 Emissions</h2>
            </div>
            <div className="chart-wrapper">
              <PieChartComponent value={airportsData.totalAirports.toLocaleString()} label='Airports'
              data={airportsData}
              legendType="airports"/>
            </div>
          </div>
        </div>
    )
}

export default FlightInfoGrid;