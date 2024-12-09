import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const CumulativeGrade = () => {
  const cumulativeGPA = 3.7;
  const overallTermGrade = "A (88%)";
  const subjects = [
    { name: "Math", credits: 4, weight: 30 },
    { name: "History", credits: 3, weight: 25 },
    { name: "Science", credits: 4, weight: 20 },
    { name: "English", credits: 3, weight: 15 },
    { name: "Biology", credits: 3, weight: 10 },
  ];

  return (
    <div>
      <div className="w-full flex justify-between items-center gap-2">
        <TitleComponent title="Cumulative Grade Overview" />
        <ButtonFilled text="Check detailed report" />
      </div>

      <div className="my-4">
        <h2 className="text-lg font-semibold">Cumulative GPA: {cumulativeGPA}</h2>
        <h3 className="text-md text-gray-600">Overall Term Grade: {overallTermGrade}</h3>
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold">Credit Hours and Subject Contribution</h3>
        <TableComponent
          tableHeader={["Subject Name", "Credits", "Weight Contribution"]}
          tableData={subjects.map(subject => [
            subject.name,
            subject.credits,
            `${subject.weight}%`
          ])}
        />
      </div>
    </div>
  );
};

export default CumulativeGrade;
