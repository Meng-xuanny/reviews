import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = reviews.at(index);

  const gotoNext = () =>
    setIndex(
      (prevIndex) =>
        // if (prevIndex === reviews.length - 1) return 0;
        // return prevIndex + 1;

        (prevIndex + 1) % reviews.length
    );

  const gotoPrev = () =>
    setIndex(
      (prevIndex) =>
        // if (prevIndex === 0) return reviews.length - 1;
        // return prevIndex - 1;
        (prevIndex - 1 + reviews.length) % reviews.length
    );

  const getRandom = () => {
    let randomNumber = Math.round(Math.random() * (reviews.length - 1));
    if (randomNumber === index) randomNumber = index + 1;

    setIndex(randomNumber % reviews.length);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h3 className="author">{name}</h3>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={gotoPrev}>
            {" "}
            <FaChevronLeft />{" "}
          </button>
          <button className="next-btn" onClick={gotoNext}>
            {" "}
            <FaChevronRight />{" "}
          </button>
        </div>
        <button className="btn btn-hipster" onClick={getRandom}>
          generate random
        </button>
      </article>
    </main>
  );
}

export default App;
