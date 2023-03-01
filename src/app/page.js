import Results from "@/components/Results";

// export const dynamic = "force-dynamic"; // this is the fix
// Fix the problem for "search params object is empty in production with next 13 app dir"
// for more info "https://github.com/vercel/next.js/issues/43077"

const API_KEY = process.env.API_KEY1;
// console.log(API_KEY)
/**
 * Para hacer el fetching no usamos ningún hook porque esto sería usar el "client side".
 * Nosotros vamos a hacer el fetchin desde el "server side"
 */

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `
    https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=es&page=1
    `,
    { next: { revalidate: 18000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // Esto será capturado por la página de error y pasado a la página como "prop"
  }

  const data = await res.json();
  const results = data.results;
  /* 
  console.log(results); 
  !Como estamos haciendo el fetch del lado del servidor, sólo seremos capaces de ver los resultados en la terminal de nuestro IDE y no en el navegador. 
  */

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
