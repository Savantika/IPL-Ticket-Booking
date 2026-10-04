import MatchCard from "../components/MatchCard"
import matches from "../data/matches"

function Home() {
    return (
        <main>
            <section id="matches">
                <h2>IPL Matches</h2>

                <div>
                    {matches.map((match) => (
                        <MatchCard
                            key={match.matchNo}
                            match={match}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home