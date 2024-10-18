import React, { useState } from "react";
import EducationalExperience from "./components/sections/EducationalExperience.jsx";
import { educationData } from "./dummy.js";
import { experienceData } from "./dummy.js";
import PracticalExperience from "./components/sections/PracticalExperience.jsx";

function App() {

  const [education, setEducation] = useState(educationData);
  const [experience, setExperience] = useState(experienceData)

  return (
    <div className="container">
      <div className="sections-container">
        <EducationalExperience
          education={education}
          setEducation={setEducation}
          sectionTitle="Education" />
        <PracticalExperience
          experience={experience}
          setExperience={setExperience}
          sectionTitle="Experience" />
      </div>
      <div className="cv-container">

      </div>
    </div>
  )
}

export default App