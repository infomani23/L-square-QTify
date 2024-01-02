import React, { useEffect, useState } from "react";
import { faqData, getUId } from "../AxiosData/AxiosData";
import "./Faqs.css";
import ExploreAccordion from "../ExploreAccordion/ExploreAccordion";

/**
 * Represents the FAQs component.
 * Fetches and displays frequently asked questions in an accordion format.
 * @returns {JSX.Element} The rendered Faqs component.
 */
const Faqs = () => {
  // Define the questionData state to store the fetched question data
  const [questionData, setQuestionData] = useState([]);

  /**
   * Fetches the FAQ data from the server when the component is rendered.
   */
  useEffect(() => {
    const loadHandler = async () => {
      try {
        // Fetch the FAQ data using the faqData function from AxiosData
        const res = await faqData();
        // Update the questionData state with the fetched data
        setQuestionData(res.data);
      } catch (error) {
        console.log("Error fetching FAQ data:", error);
      }
    };
    // Call the loadHandler function
    loadHandler();
  }, []);

  return (
    <div className="faqs">
      <h2 className="faqs_heading">FAQs</h2>
      <div className="faqs_explore">
        {/* Render the ExploreAccordion component for each question */}
        {questionData.map((qItem) => {
          // Generate a unique id for each ExploreAccordion
          const id = getUId();
          return <ExploreAccordion key={id} data={qItem} />;
        })}
      </div>
    </div>
  );
};

export default Faqs;