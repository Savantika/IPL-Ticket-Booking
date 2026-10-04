function MatchCard({ match }) {
    return (
        <div className="match-card">
            <h3>{match.teams}</h3>

            <p>Match No: {match.matchNo}</p>
            <p>Date & Time: {match.date}</p>
            <p>Venue: {match.venue}</p>

            <p>General: ₹{match.general}</p>
            <p>Premium: ₹{match.premium}</p>
            <p>VIP: ₹{match.vip}</p>

            <button>Book</button>
        </div>
    )
}

export default MatchCard