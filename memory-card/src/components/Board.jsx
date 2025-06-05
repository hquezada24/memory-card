import "./Board.css";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch("8HHHmXteYm004PapntSOri2fQ1dZ5fiF");

const gifIds = ["xT1R9YybND9riBzeY8"];

const Board = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function fetchGIFs() {
      const { data } = await gf.gifs(gifIds);
      setGifs(data);
    }
    fetchGIFs();
  }, []);

  return (
    <>
      <div className="board">
        {gifs.map((gif) => (
          <Card key={gif.id}>
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
