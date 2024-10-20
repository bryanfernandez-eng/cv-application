function CVDisplay({ generalInformation, education, experience}) {
  return (
    <div className="cv">
        <div className="cv-header">
            <div className="cv-header-head">
                {generalInformation.name}
            </div>
            <div className="cv-header-body">
                <span>{generalInformation.email}</span>
                <span>{generalInformation.phoneNumber}</span>
                <span>{generalInformation.address}</span>
                <span>{generalInformation.linkedin}</span>
            </div>
        </div>   
       {education.length > 0 && <div className="cv-section">
            <h1>Education</h1>
            { education.map(edu => (
                <>
                 <div className="cv-section-item">
                <div className="cv-section-head">
                    <span >{edu.startDate}-{edu.endDate}</span>
                    <span>{edu.location}</span>
                </div>
                <div className="cv-section-details">
                    <h2>{edu.schoolName}</h2>
                    <span>{edu.degree} in {edu.major}</span>
                </div></div>
                </>
            ))}
        </div>}
        {experience.length > 0 && <div className="cv-section">
            <h1>Education</h1>
            { experience.map(exp => (
                <>
                 <div className="cv-section-item">
                <div className="cv-section-head">
                    <span >{exp.startDate}-{exp.endDate}</span>
                    <span>{exp.location}</span>
                </div>
                <div className="cv-section-details">
                    <h2>{exp.company}</h2>
                    <span>{exp.jobTitle}</span>
                </div></div>
                </>
            ))}
        </div>}
    </div>
  )
}
 
export default CVDisplay