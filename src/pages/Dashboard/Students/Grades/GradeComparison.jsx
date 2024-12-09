import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const gradeData = {
  "Term 1": {
    GPA: 3.6,
    overallGrade: "A (87%)",
    breakdown: [
      ["Math", "A"],
      ["History", "B+"],
      ["Science", "A-"],
    ],
  },
  "Term 2": {
    GPA: 3.8,
    overallGrade: "A (90%)",
    breakdown: [
      ["Math", "A+"],
      ["History", "A"],
      ["Science", "A"],
    ],
  },
  "Year 1": {
    GPA: 3.7,
    overallGrade: "A (87%)",
    breakdown: [
      ["Math", "A-"],
      ["History", "B"],
      ["Science", "A"],
    ],
  },
  "Year 2": {
    GPA: 3.9,
    overallGrade: "A (90%)",
    breakdown: [
      ["Math", "A+"],
      ["History", "A"],
      ["Science", "A+"],
    ],
  },
};

const GradeComparison = () => {
  const [selectedTerm, setSelectedTerm] = useState("Term 1");

  const handleTermChange = (e) => {
    setSelectedTerm(e.target.value);
  };

  const { GPA, overallGrade, breakdown } = gradeData[selectedTerm];

  const tableHeader = ["Subject", "Grade"];
  const tableData = breakdown.map((item) => [item[0], item[1]]);

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center mb-4">
        <TitleComponent title="Grade Comparison" />
        <ButtonFilled text="View More Details" />
      </div>
      <div className="mb-6">
        <label htmlFor="term-select" className="block text-lg font-semibold">
          Select Term/Year
        </label>
        <select
          id="term-select"
          value={selectedTerm}
          onChange={handleTermChange}
          className="mt-2 p-2 border border-gray-300 rounded"
        >
          <option value="Term 1">Term 1</option>
          <option value="Term 2">Term 2</option>
          <option value="Year 1">Year 1</option>
          <option value="Year 2">Year 2</option>
        </select>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">GPA Comparison</h3>
        <p>
          Comparison graph will be here (this can be implemented with a chart
          library if needed)
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          Grade Breakdown for {selectedTerm}
        </h3>
        <TableComponent tableHeader={tableHeader} tableData={tableData} />
      </div>
      <div className="mb-6">
        <p className="text-lg font-semibold">GPA: {GPA}</p>
        <p className="text-lg font-semibold">Overall Grade: {overallGrade}</p>
      </div>
    </div>
  );
};

export default GradeComparison;
