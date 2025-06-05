import "./Board.css";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch("8HHHmXteYm004PapntSOri2fQ1dZ5fiF");

const Board = () => {
  return (
    <>
      <div className="board">
        <Card />
      </div>
    </>
  );
};

export default Board;
