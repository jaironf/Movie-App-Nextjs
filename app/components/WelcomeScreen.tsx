"use client";

import React, { useState, useEffect, FC } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Movie } from "../types";

interface WelcomeScreenProps {
  movies: Movie[];
}

const WelcomeScreen: FC<WelcomeScreenProps> = ({ movies }) => {
    const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

    useEffect(() => {
     
      const shuffledMovies = [...movies].sort(() => 0.5 - Math.random()).slice(0, 5);
  
      let index = 0;
      const interval = setInterval(() => {
        setCurrentMovie(shuffledMovies[index]);
        index = (index + 1) % shuffledMovies.length; 
      }, 5000);
  
      return () => clearInterval(interval); 
    }, [movies]);
  
    if (!currentMovie) {
      return <div>Loading...</div>;
    }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card isFooterBlurred className="w-[100%] h-[80%] relative">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white/60 uppercase font-bold text-xl">{currentMovie.release_date}</h4>
        <h1 className="text-white/90 font-medium text-6xl">{currentMovie.title}</h1>
        <br/>
        <div className="w-80 h-auto bg-black/30 backdrop-blur-sm p-4 rounded-md text-white">
  <p className="text-sm">{currentMovie.overview}</p>
</div>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
      />
    </Card>
    </div>
  );
};

export default WelcomeScreen;
