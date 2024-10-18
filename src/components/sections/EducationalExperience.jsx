import Section from "../forms/Section"

function EducationalExperience({ education, setEducation, sectionTitle }) {
  return (
    <div>
      <Section
        sectionData={education}
        setSectionData={setEducation}
        sectionTitle={sectionTitle}
        formSchema={{
          schoolName: "",
          major: "",
          degree: "",
          location: "",
          startDate: "",
          endDate: ""
        }}
        highlightKey="schoolName"
      />
    </div>
  )
}

export default EducationalExperience