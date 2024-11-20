import React, { FC } from 'react'
import { MovieCard } from '../types'
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from 'next/link';
import MovieModal from './MovieModal';


const MovieCards: FC<MovieCard> = ({ movies }) => {

    const baseURL = process.env.BASE_URL
    const { results } = movies


    return (
        <main>
            <div className="md:grid md:grid-cols-4 gap-5 pt-5 mb-10">
                {/* Truco para ver como renderiza cuando hay varias cards */}
                {results.length > 0 && results.map(data =>
                    // <Link href={`/movie/${data.id}`} key={data.id}>
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none transition ease-in-out delay-13 hover:-translate-y-px hover:scale-110 hover:opacity-90 duration-300 cursor-pointer"
                        >
                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                height={200}
                                src={`${baseURL}${data.backdrop_path}`}
                                width={700}
                            />
                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <div className="display-flex">
                                    <p className="text-medium text-white/80 font-bold">{data.title}</p>
                                    <p className="text-tiny text-white/80 font-bold">Popularity: {data.popularity}</p>
                                </div>
                                <MovieModal movieTitle={data.title} movieDescription={data.overview} />
                            </CardFooter>
                        </Card>
                    // </Link>
                )}
            </div>
        </main>
    )
}

export default MovieCards