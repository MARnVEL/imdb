
import Image from "next/image";
import Link from "next/link";

import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
    return (
        <div
            className="cursor-pointer p-3 hover:shadow-slate-400 shadow-md border border-red-900 m-2 sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-red-900 sm:m-2 transition-shadow duration-200 group"
        >
            <Link
                href={`/movie/${result.id}/`}
            >
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        result.backdrop_path || result.poster_path
                    }`}
                    width={500}
                    height={300}
                    alt="Main picture of the movie. Not available."
                    className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 mx-auto justify-center"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                ></Image>
                <div className="p-2">
                    <p className="line-clamp-3 text-md">
                        { result.overview }
                    </p>

                    <h2 className="truncate text-lg font-bold">
                        { result.title || result.name }
                    </h2>

                    <p className="flex items-center">
                        { result.release_date || result.first_air_date }
                        <FiThumbsUp className="h-5 mr-1 ml-3"/>
                        { result.vote_count }
                    </p>


                </div>
            </Link>
        </div>
    )
}
