import React from 'react'
import { useGetPokemonByIdQuery } from './services/pokemon';
import { useParams, Link } from 'react-router-dom'

const Details = () => {
    const { id } = useParams();
    const response = useGetPokemonByIdQuery(id)

    return (
        <div>
            <Link to='/'>
                <button>Back Home</button>
            </Link>
            <table>
                <tr>
                    <th>Name:</th>
                    <td>{response?.data?.name}</td>
                </tr>
                <tr>
                    <th>Height:</th>
                    <td>{response?.data?.height}</td>
                </tr>
                <tr>
                    <th>Weight:</th>
                    <td>{response?.data?.weight}</td>
                </tr>
                <tr>
                    <th>Types:</th>
                    <td>{
                        response?.data?.types?.map((d:any, i:any) => (
                            <p>{d.type.name}</p>
                        ))
                    }
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Details
