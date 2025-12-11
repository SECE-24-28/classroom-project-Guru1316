import '../styles/series.css'
import { useOutletContext, useParams } from 'react-router-dom';

const Series = () => {
    const { data } = useOutletContext();
    const { seriesId } = useParams();
    const imageBaseUrl = "https://image.tmdb.org/t/p/original";
    const imageBaseUrl1 = "https://image.tmdb.org/t/p/w500";

    let seriesData = data.find((ele) => {
        return (ele.id === Number(seriesId));
    })

    
    if(!seriesData)
    {
        return(
            <>
            <h1>Series Not Found</h1>
            </>
        )   
    }

    return (
        <div className="series">
            <div className='gridContainer'>
                <div>
                    <img src={`${imageBaseUrl}${seriesData.backdrop_path}`} alt={`${seriesData.name}`} />
                </div>
            </div>

            <div className="content-container">
                <div className="series-card1">
                    <div>
                        <img src={`${imageBaseUrl1}${seriesData.poster_path}`} alt={seriesData.name} />
                    </div>
                </div>

                <div className='series-details'>
                    <h1>{seriesData.name}</h1>
                    <div className="meta-data">
                        <span>Rating: {seriesData.vote_average} ⭐</span>
                        <span> | </span>
                        <span>{seriesData.first_air_date}</span>
                        <span> | </span>
                        <span>{seriesData.original_language.toUpperCase()}</span>
                    </div>

                    <div className="genres-list">
                        {seriesData.genres.map((genre, index) => (
                            <span key={index} className="genre-badge">{genre}</span>
                        ))}
                    </div>

                    <h2>Overview</h2>
                    <p>{seriesData.overview}</p>
                </div>

            </div>
        </div>
    )
}

export default Series;