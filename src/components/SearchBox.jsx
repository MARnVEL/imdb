"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBox() {

    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        if (!search) return;
        router.push(`/search/${search}`);
        setSearch("")

    };
    return (
        <form 
            className="flex max-w-6xl mx-auto justify-between items-center px-5"
            onSubmit={handleSubmit}
        >
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text" 
                placeholder="Buscar palabras clave..."
                className="w-full h-14 rounded-sm placeholder-orange-500 outline-none bg-transparent flex-1"
            />
            <button
                disabled={!search}
                type="submit"
                className="text-amber-600 font-bold disabled:text-gray-400"
            >
                Buscar
            </button>
        </form>
    )
}
