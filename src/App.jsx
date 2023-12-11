/* eslint-disable react/prop-types */
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import QuoteList from "./QuoteList";
import { reorder } from "./lib/reorder";
import { randomData } from "./lib/randomData";
import github from "./assets/github.svg";

export default function App() {
  const [state, setState] = useState({
    quotes: randomData.slice(0, Math.floor(Math.random() * 10) + 2),
  });
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h1 className="mt-2">SortAble List</h1>
              <div className="line"></div>
              <QuoteList className="list" quotes={state.quotes} />{" "}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <a
        href="https://github.com/MrYogesh0709"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="github" className="github" />
      </a>
    </>
  );
}
