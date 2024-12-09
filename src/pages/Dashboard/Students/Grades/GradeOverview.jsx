import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const tableHeader = [
  "Subject Name",
  "Grade",
  "Performance indicator",
  "Action",
];

const tableData = [
  ["Math", "A (90%)", "Excellent", "View"],
  ["History", "B (85%)", "Good", "View"],
  ["Science", "A (92%)", "Excellent", "View"],
  ["English", "C (75%)", "Needs Improvement", "View"],
  ["Biology", "B+ (88%)", "Good", "View"],
  ["Physics", "A (94%)", "Excellent", "View"],
  ["Chemistry", "B- (80%)", "Good", "View"],
];

const GradeOverview = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center gap-2">
        <TitleComponent title="Grades Overview" />
        <ButtonFilled text="Check result of different term" />
      </div>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </>
  );
};

export default GradeOverview;
