import "./Board.css";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { shuffle } from "../utils/utils";

const gf = new GiphyFetch("8HHHmXteYm004PapntSOri2fQ1dZ5fiF");

const gifIds = [
  "xT1R9YybND9riBzeY8",
  "26Ff54K3oSzFs2vxS",
  "26FfejaClGnf2nuSI",
  "xUNd9RWetmIHTCoANi",
  "l3fzBErlK6dj1dNfi",
  "3o6nV6RVUkMMPVap7a",
  "xUNd9UO7sUPu2BzXpe",
  "d7YY3qdChSuWiGXyu9",
  "l3fzV9brAmIT9EuJO",
  "l3fzLmVfDnnnk2S6A",
  "xT1R9Io0FMFsEMNovC",
  "xUNda8bkjMOW4pi7AI",
];

const Board = () => {
  const [gifs, setGifs] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchGIFs() {
      const { data } = await gf.gifs(gifIds);
      setGifs(data);
    }
    fetchGIFs();
  }, []);

  const handleClick = (id) => {
    if (clickedIds.has(id)) {
      alert("Game over! You clicked the same image");
      setClickedIds(new Set());
      setScore(0);
    } else {
      const newClicked = new Set(clickedIds);
      newClicked.add(id);
      setClickedIds(newClicked);
      setScore((prev) => prev + 1);
      setGifs((prev) => shuffle(prev));
    }
  };

  return (
    <>
      <div className="board">
        {gifs.map((gif) => (
          <Card key={gif.id} onClick={() => handleClick(gif.id)}>
            <img
              key={gif.id}
              src={gif.images.fixed_height.url}
              alt={gif.title}
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default Board;
