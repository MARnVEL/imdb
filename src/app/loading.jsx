import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex justify-center">
            <Image className="h-96" 
                src="spinner.svg" alt="loading..."
                width={500}
                height={500} 
            ></Image>
        </div>
    )
}
