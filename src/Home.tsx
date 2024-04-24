import './App.css';
import { useGetAllPokemonQuery } from './services/pokemon';
import { Link } from 'react-router-dom'

function Home() {

    const responseInfo = useGetAllPokemonQuery('')

    return (
        <div className="Home">
            <h2>
                All Pokemon List
            </h2>
            {
                responseInfo?.data?.results.map((d:any, i:any) => (
                    <div key={i}>
                        <Link to={`/details/${i + 1}`}>
                            <p>{d.name}</p>
                        </Link>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
