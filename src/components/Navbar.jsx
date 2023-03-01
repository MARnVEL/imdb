import NavbarItem from "./NavbarItem";


export default function Navbar() {
    return (
        <div className='flex justify-center dark:bg-slate-500 bg-amber-100 lg:text-lg p-4'>
            <NavbarItem title='Tendencia' param='fetchTrending'/>
            <NavbarItem title='Los Más Votados' param='fetchTopRated'/>
        </div>
    )
}
