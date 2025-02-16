import './App.css';
import {useState, useEffect} from 'react';
import NavBar from './NavBar';
import RevenueChart from './RevenueChart';
import FlightInfoGrid from './FlightInfoGrid';
import FlightMetrics from './FlightMetrics';
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
      const response = await axios.get('http://localhost:8000/filteredAircraftData');
      setFilteredAircraftData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getFilteredFlightsData = async (): Promise<void> => {
    try {
      const response = await axios.get('http://localhost:8000/filteredFlights');
      setFilteredFlightsData(response.data)
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
        <div className="flight-detail-grid">
          <div className="flight-detail">
            <div className="card-heading">
              <h3>Top Airlines</h3>
            </div>
            <div className="card-sub-heading">
              <p className='fourth-heading'>Airline</p>
              <p className='fourth-heading'>% of Flights</p>
            </div>
            <ul className='list-items'>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>British Airays</p>
                <span>3.5%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>easyJet</p>
                <span>2.4%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>RyanAir</p>  
                <span>1.3%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>Wizz Air</p>
                <span>1.0%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>American</p>
                <span>0.75%</span>
              </li>
            </ul>
          </div>
          <div className="flight-detail">
            <div className="card-heading">
              <h3>Top Models</h3>
            </div>
            <div className="card-sub-heading">
              <p className='fourth-heading'>Aircraft</p>
              <p className='fourth-heading'>% of Flights</p>
            </div>
            <ul className='list-items'>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>British Airays</p>
                <span>3.5%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>easyJet</p>
                <span>2.4%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>RyanAir</p>  
                <span>1.3%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>Wizz Air</p>
                <span>1.0%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>American</p>
                <span>0.75%</span>
              </li>
            </ul>
          </div>
          <div className="flight-detail">
            <div className="card-heading">
              <h3>Top tail Numbers</h3>
            </div>
            <div className="card-sub-heading">
              <p className='fourth-heading'>Product</p>
              <p className='fourth-heading'>Amount</p>
            </div>
            <ul className='list-items'>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>British Airays</p>
                <span>3.5%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>easyJet</p>
                <span>2.4%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>RyanAir</p>  
                <span>1.3%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>Wizz Air</p>
                <span>1.0%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>American</p>
                <span>0.75%</span>
              </li>
            </ul>
          </div>
          <div className="flight-detail">
            <div className="card-heading">
              <h3>Top Airports</h3>
            </div>
            <div className="card-sub-heading">
              <p className='fourth-heading'>Product</p>
              <p className='fourth-heading'>Amount</p>
            </div>
            <ul className='list-items'>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>British Airays</p>
                <span>3.5%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>easyJet</p>
                <span>2.4%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>RyanAir</p>  
                <span>1.3%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>Wizz Air</p>
                <span>1.0%</span>
              </li>
              <li className='item'>
                <div className='airline-logo'>
                  <img src="./ryanlogo.jpg" alt="airline-logo" />
                </div>
                <p>American</p>
                <span>0.75%</span>
              </li>
            </ul>
          </div>
        </div>
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
