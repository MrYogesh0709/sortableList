import { Draggable } from "react-beautiful-dnd";

export default function Quote({ quote, index }) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="draggable-item"
        >
          <div className="author">{quote.author}</div>
          <p className="quote">{quote.quote}</p>
        </div>
      )}
    </Draggable>
  );
}
