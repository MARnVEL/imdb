import Image from "next/image";

const API_KEY = process.env.API_KEY1;

/**
 * @param {movieId} movieId 
 * @returns A json with the info of a specific movie
 */
const getMovie = async (movieId) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es`);
    return await res.json();
}

export default async function MoviePage({ params }) {
    const movieId = params.id;
    const movie = await getMovie(movieId);

    return (
        <div className="w-f">

            <div 
                className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6"
            >
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        movie.backdrop_path || movie.poster_path
                    }`}
                    width={500}
                    height={300}
                    alt="Main movie poster."
                    className="rounded-lg sm:border sm:border-red-900"
                    style={{
                        maxWidth: "100%",
                        height: "100%"
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                ></Image>
                <div className="p-2">
                    <h2
                        className="text-lg mb-3 font-bold"
                    >
                        { movie.title || movie.name }
                    </h2>
                    <p className="text-lg mb-3">
                        <span className="font-semibold mr-1">
                            Sinopsis:
                        </span>
                        { movie.overview || "No hay sinopsis disponible"}
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold mr-1">
                            Fecha de lanzamiento:
                        </span>
                        { movie.release_date || movie.first_air_date }
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold mr-1">
                            Rating:
                        </span>
                        { movie.vote_count }
                    </p>

                </div>

            </div>
        </div>
    )
}
