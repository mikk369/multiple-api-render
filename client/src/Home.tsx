import './App.css';
import {useState, useEffect} from 'react';
import NavBar from './NavBar';
import RevenueChart from './RevenueChart';
import FlightInfoGrid from './FlightInfoGrid';
import FlightMetrics from './FlightMetrics';
import FlightDetails from './FlightDetails';
import axios from 'axios';

type filteredAircraftData = {
  pagination: {
    count: number
  }
    data: {
      id: string,
      plane_status: string
    }[];
}

type filteredFlightsData = {
  totalFlights: number,
  delayedFlights: number,
  onTimeFlights: number
}

function Home() {
  const [filteredAircraftData, setFilteredAircraftData] = useState<filteredAircraftData | null>(null);
  const [filteredFlightsData, setFilteredFlightsData] = useState<filteredFlightsData | null>(null);

  const getFilteredAircraftData = async (): Promise<void> => {
    try {
      const cachedData = sessionStorage.getItem("filteredAircraftData");

      if(cachedData) {
        setFilteredAircraftData(JSON.parse(cachedData));
        return;
      }

      const response = await axios.get('http://localhost:8000/filteredAircraftData');
      setFilteredAircraftData(response.data)

      //store data in sessionStorage
      sessionStorage.setItem("filteredAircraftData", JSON.stringify(response.data));

    } catch (error) {
      console.log(error);
    }
  }

  const getFilteredFlightsData = async (): Promise<void> => {
    try {
      const cachedData = sessionStorage.getItem("filteredFlightsData");

      if(cachedData){
        setFilteredFlightsData(JSON.parse(cachedData));
        return;
      }

      const response = await axios.get('http://localhost:8000/filteredFlights');
      setFilteredFlightsData(response.data)

      //store data in sessionStorage
      sessionStorage.setItem("filteredFlightsData", JSON.stringify(response.data));

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFilteredAircraftData();
    getFilteredFlightsData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="home-container">
      <div className="video-background">
        <video autoPlay muted playsInline>
          <source src="/flight.mp4"  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
      <div className="heading">
        <h1>ALL IN ONE PLACE</h1>
        <p>Live flights data.</p>
        <p>Weather conditions.</p>
        <p>City info & time zones.</p>
        <p>Flights map.</p>
      </div>
    </div>
      <div className="flights-section">
        {filteredAircraftData && filteredFlightsData ? (

          <FlightInfoGrid
          filteredAircraftData={filteredAircraftData}
          filteredFlightsData={filteredFlightsData}
          />
        ) : (
          <p className='api-message'>API requests are full</p>
        )}
        <p className='fourth-heading'>metrics</p>
        <FlightMetrics />
        <FlightDetails />
        <p className='fourth-heading'>revenue</p>
        <div className="section-revenue">
          <div className="flight-hours">
            <RevenueChart />
          </div>
        </div>
      </div>
    </>
  )
};

export default Home
