import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { Movie } from "../typings"

interface Props {
    title: string,
    movies: Movie[],
    // list:Movie,
}
function Row({ title, movies }: Props) {
    return (
        <div className="h-40 space-y-0.5">
            <h2 className="w-56 cursor-pointer font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
            <div className="group relative">
                <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

                {/* movie rendering */}
                <div>

                </div>

                {/* movie rendering */}

                <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto opacity-0 transition hover:scale-125 group-hover:opacity-100 h-9 w-9 cursor-pointer" />
            </div>
        </div>
    )
}

export default Row