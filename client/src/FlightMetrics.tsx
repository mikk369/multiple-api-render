
function FlightMetrics() {

    return (
        <div className="flight-metrics-grid">
          <div className="flight-metric">
            <p>Total Flights</p>
            <h2>75,030</h2>
            <span>+12,7% vs last month</span>
          </div>
          <div className="flight-metric">
            <p>Flight Hours</p>
            <h2>93,243</h2>
            <span>-9% vs last month</span>
          </div>
          <div className="flight-metric">
            <p>Distance Flown</p>
            <h2>59,023</h2>
            <span>+14,3% vs last month</span>
          </div>
        </div>
    )

}

export default FlightMetrics;