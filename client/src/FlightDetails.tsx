type FlightDetailsProps = {
  airlineNames:  {
    name: string[];
  }
}

function FlightDetails ({airlineNames}: FlightDetailsProps) {
  const firstTwenty = airlineNames.name.slice(0, 20)
  const chunkSize = 5; // Each card needs 5 airlines
  const groupedAirlines = [];

for (let i = 0; i < firstTwenty.length; i += chunkSize) {
  groupedAirlines.push(firstTwenty.slice(i, i + chunkSize));
}

// card headings 
const cardHeadings: string[] = [
  "Top Airports",
  "Top tail Numbers",
  "Top Models",
  "Top Airlines"
];

const precentage:string[] = [
  "5.5",
  "2.6",
  "4.7",
  "2.2",
  "1.5",
  "2.5",
  "3.6",
  "5.7",
  "7.8",
  "8.2",
  "1.1",
  "3.9",
  "6.3",
  "2.6",
  "5.8",
  "4.9",
  "3.3",
  "4.7",
  "2.5",
  "3.5",
  "8.5",
]

    return (
    <div className="flight-detail-grid">
      {groupedAirlines.map((group, cardIndex) => (
        <div className="flight-detail" key={cardIndex}>
          <div className="card-heading">
            <h3>{cardHeadings[cardIndex]}</h3>
          </div>
          <div className="card-sub-heading">
            <p className="fourth-heading">Airline</p>
            <p className="fourth-heading">% of Flights</p>
          </div>
          <ul className="list-items">
            {group.length > 0 ? (
              group.map((airline, index) => (
                <li key={index} className="item">
                  <div className="airline-logo">
                    <img src="./webcodesLogo.jpg" alt="airline-logo" />
                  </div>
                  <p>{airline}</p>
                  <span>{precentage[index]}%</span>
                </li>
              ))
            ) : (
              <p className="api-message">API requests are full</p>
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default FlightDetails;