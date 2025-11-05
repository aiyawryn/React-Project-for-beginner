import React from "react";
import { accordionData } from "./utils/content";
import { Accordion } from "./components/Accordion";

const App = () => {
  return (
    <div>
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      <div className="accordian">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
