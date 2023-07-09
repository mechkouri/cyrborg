import { RelatedGame, SectionHeader } from '../../components'
import './RelatedGames.css'

import mostPopularData from '../../Data/MostPopularData'
const games = mostPopularData.map(game => <RelatedGame key={game.id} title={game.title} category={game.category} rate={game.rate} download={game.download} Urlimg={game.img} />)

const RelatedGames = () => {
    return (
        <div className='row'>
            <SectionHeader>Other Related Games</SectionHeader>
            {games.slice(0, 6)}
        </div>
    )
}

export default RelatedGames