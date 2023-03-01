import Results from "@/components/Results";

const API_KEY = process.env.API_KEY1;

// This page is server side because we don't have any useEffect or any other hook or any state.

export default async function SearchPage({ params }) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=es&include_adult=false`);

    if(!res.ok) {
        throw new Error("Error fetching data!");
    }

    const data = await res.json();
    const results = data.results;
    
    /* try {
        
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data!");
    } */

    return (
        <div>
            {results && results === 0 && (
                <h1 className="text-center pt-6 font-bold">No se encontraron resultados!</h1>
            )}
            {results && <Results results={results} />}
        </div>
    )
}
