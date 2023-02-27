/**
 * * Con esta sentencia convierto el componente que se renderiza del lado del servidor a un componenete que se renderiza del lado del cliente.
 * ! Así puedo usar el hook useContext() y los otros hooks que únicamente se pueden utilizar si el componente  es "client side".
 */

"use client";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => setMounted(true), []);
    

    // Primero chekeamos el tema del sistema, para eso creamos una variable currentTheme.
    const currentTheme = theme === "system" ? systemTheme : theme;

    return ( 
        <>
            {mounted &&
                (currentTheme === "dark" 
                    ? <MdLightMode 
                        className="text-xl cursor-pointer hover:text-amber-500" 
                        onClick={ () => setTheme("light") }
                        title="Change to light mode"
                        /> 
                    : <BsFillMoonFill 
                        className="text-xl cursor-pointer hover:text-amber-500" 
                        onClick={ () => setTheme("dark") }
                        title="Change to dark mode"
                        />
                )
            }
        </>
    );
}
