import React, { FC } from 'react'
import { MovieCard } from '../types'
import { Card, CardFooter, Image, Button, useDisclosure } from "@nextui-org/react";
import { Movies } from '../types';


const MovieCards: FC<MovieCard> = ({ movies }) => {

    const baseURL = process.env.BASE_URL

    const { results } = movies
    return (
        <main>
            <div >
                <p>Aquí va la categoria de peli</p>
            </div>
            <div className="md:grid md:grid-cols-4 gap-5 pt-5 mb-10">
                {/* Truco para ver como renderiza cuando hay varias cards */}
                {results.length > 0 && results.map(data => <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none transition ease-in-out delay-13 hover:-translate-y-px hover:scale-110 hover:opacity-60 duration-300 cursor-pointer"
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
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Play
                        </Button>
                    </CardFooter>
                </Card>)}
            </div>
        </main>
    )
}

export default MovieCards