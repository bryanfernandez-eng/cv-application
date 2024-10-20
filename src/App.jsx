import { useState } from "react";
import { educationData } from "./dummy.js";
import { experienceData } from "./dummy.js";
import { generalInformationData } from "./dummy.js";
import EducationalExperience from "./components/sections/EducationalExperience.jsx";
import PracticalExperience from "./components/sections/PracticalExperience.jsx";
import GeneralInformation from "./components/sections/GeneralInformation.jsx";
import CVDisplay from "./components/sections/CVDisplay.jsx";

function App() {

  const [education, setEducation] = useState(educationData);
  const [experience, setExperience] = useState(experienceData); 
  const [generalInformation, setGeneralInformation] = useState(generalInformationData);

  return (
    <div className="container">
      <div className="sections-container">
        <GeneralInformation
          generalInformation={generalInformation}
          setGeneralInformation={setGeneralInformation}/>
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
        <CVDisplay 
          education={education}
          experience={experience}
          generalInformation={generalInformation}/>
      </div>
    </div>
  )
}

export default App