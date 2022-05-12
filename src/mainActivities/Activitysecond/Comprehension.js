import React, { useState, useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Activityframe } from "../../Components/Activityframe/Activityframe";
import Footer from "../../Components/Footer/Footer";
import Passage from "../../Components/Passage/Passage";
import { ComprehensionUtils } from "./ComprehensionUtils";
//import InstructionButton from "../Components/InstructionButton/InstructionButton";
import InstructionButton from "../../Components/InstructionButton/InstructionButton";
import "./Comprehension.css";

const wrapperData = [
  {
    id: 1,
    question: "what are they doing in these",
    corrected: "they are Playing",
    distractor: [
      "they are sleeping",
      "they are eating",
      "they are looking somewhere",
    ],
  },

  {
    id: 2,
    question: "what are they doing in these",
    corrected: "they are Playing",
    distractor: [
      "they are sleeping",
      "they are eating",
      "they are looking somewhere",
    ],
  },

  {
    id: 3,
    question: "what are they doing in these",
    corrected: "they are Playing",
    distractor: [
      "they are sleeping",
      "they are eating",
      "they are looking somewhere",
    ],
  },

  {
    id: 4,
    question: "what are they doing in these",
    corrected: "they are Playing",
    distractor: [
      "they are sleeping",
      "they are eating",
      "they are looking somewhere",
    ],
  },
];
const PassageData =
  "Bears are found in Europe, Asia, Africa and America. They are massively built, with short tails and thick legs. Bears are not really carnivores.They eat almost anything, the chief exception in the polar bear, which in its natural state lives on fish and seals.However, in captivity, they seem to enjoy meat, vegetables, fruits, milk, rice and porridge.Bears are not quite as dangerous as people imagine them it be like most animals they will dotheir best to avoid human beings. They have a special sense that is eyesight to see things.";

function Comprehension() {
  const title = "Comprehension";
  const isActivity = true;
  const [data, setData] = useState([]);
  const dataId = 1;

  useEffect(() => {
    const handleData = () => {
      const comprehensionData = ComprehensionUtils.initialize(wrapperData);
      setData(comprehensionData.sentence);
    };

    if (isActivity) {
      handleData();
    }
  }, [isActivity]);

  console.log("1000000", data);

  return (
    <div class="wrapp">
      <NavBar title={title} />
      <Activityframe>
        <>
          <InstructionButton />

          <div class="middlePortion">
            {data.map((item) => {
              console.log("10000001", item);
              return (
                item.id === dataId && (
                  <span class="question">{item.Activityquestion}</span>
                )
              );
            })}
          </div>
        </>
      </Activityframe>

      <Footer />
    </div>
  );
}

export default Comprehension;
