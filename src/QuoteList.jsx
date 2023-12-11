import { memo } from "react";
import Quote from "./Quote";

const QuoteList = memo(function QuoteList({ quotes }) {
  return quotes.map((quote, index) => {
    return <Quote quote={quote} index={index} key={quote.id} />;
  });
});

export default QuoteList;
