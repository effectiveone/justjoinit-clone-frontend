export const JobInputs = [
  { label: "Title", key: "title", type: "text" },
  {
    label: "Seniority",
    key: "seniority",
    type: "select",
    options: [
      { value: "Entry", label: "Entry" },
      { value: "Intermediate", label: "Intermediate" },
      { value: "Senior", label: "Senior" },
    ],
  },
  {
    label: "Description",
    key: "description",
    type: "text",
  },

  {
    label: "Remote",
    key: "remote",
    type: "select",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
  {
    label: "Application Deadline",
    key: "deadline",
    type: "datetime-local",
  },
  {
    label: "Job Type",
    key: "jobType",
    type: "select",
    options: [
      { value: "fullTime", label: "Full Time" },
      { value: "partTime", label: "Part Time" },
      { value: "internship", label: "Internship" },
      { value: "contract", label: "Contract" },
      { value: "temporary", label: "Temporary" },
    ],
  },
  {
    label: "Duration",
    key: "duration",
    type: "select",
    options: [
      { value: "oneWeek", label: "1 week" },
      { value: "twoWeeks", label: "2 weeks" },
      { value: "oneMonth", label: "1 month" },
      { value: "twoMonths", label: "2 months" },
      { value: "threeMonths", label: "3 months" },
      { value: "sixMonths", label: "6 months" },
      { value: "moreThanSixMonths", label: "More than 6 months" },
    ],
  },
  {
    label: "If discoled salary?",
    key: "disclosedSalary",
    type: "select",
    options: [
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ],
  },
  {
    label: "Salary range",
    key: "salary",
    type: "text",
  },
  { label: "Company Size", key: "companySize", type: "number" },
  {
    label: "Active Applications",
    key: "activeApplications",
    type: "number",
  },
  {
    label: "Accepted Candidates",
    key: "acceptedCandidates",
    type: "number",
  },
];
