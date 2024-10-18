import Section from "../forms/Section";

function PracticalExperience({ experience, setExperience, sectionTitle }) {
  return (
    <div>
      <Section
        sectionData={experience}
        setSectionData={setExperience}
        sectionTitle={sectionTitle}
        formSchema={{
          jobTitle: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          responsibilities: ""
        }}
        highlightKey="company"
      />
    </div>
  );
}

export default PracticalExperience;
