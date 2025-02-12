import './App.css';
import NavBar from './NavBar';
import RevenueChart from './RevenueChart';
import PieChartComponent from './PieChartComponent';
import { aircraftStatus, onTimePerformance, totalAirlines, co2Stats } from './data';

function Home() {
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
        <div id='flight-info-grid' className="flight-info-grid">
          <div className="flight-info">
            <div className="flight-info-heading">
              <h2>Aircrafts</h2>
            </div>
            <div className="chart-wrapper">
              <PieChartComponent value={aircraftStatus.totalAircrafts.toLocaleString()}
              label='Aircrafts'
              data={aircraftStatus}
              legendType="aircraft"/>
            </div>
          </div>
          <div className="flight-info">
            <div className="flight-info-heading">
              <h2>On Time Performance</h2>
            </div>
            <div className="chart-wrapper">
              <PieChartComponent value={onTimePerformance.totalDepartures} label='Departures'
              data={onTimePerformance}
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
              <PieChartComponent value={co2Stats.totalEmissions.toLocaleString()} label='Tons CO₂'
              data={co2Stats}
              legendType="emissions"/>
            </div>
          </div>
        </div>
          <p className='fourth-heading'>metrics</p>
        <div className="flight-metrics-grid">
          <div className="flight-metric">
            <p>Total Flights</p>
            <h2>75,030</h2>
            <span>+12,7% vs last month</span>
          </div>
          <div className="flight-metric">
            <p>Flight Hours</p>
            <h2>93,000</h2>
            <span>-12,7% vs last month</span>
          </div>
          <div className="flight-metric">
            <p>Distance Flown</p>
            <h2>59,023</h2>
            <span>+12,7% vs last month</span>
          </div>
        </div>
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
