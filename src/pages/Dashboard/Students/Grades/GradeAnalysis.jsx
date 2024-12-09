import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const gradeTrends = {
  Math: [
    { name: "Quiz 1", score: 85 },
    { name: "Midterm", score: 90 },
    { name: "Quiz 2", score: 95 },
    { name: "Final", score: 92 },
  ],
  History: [
    { name: "Essay 1", score: 80 },
    { name: "Midterm", score: 85 },
    { name: "Essay 2", score: 88 },
    { name: "Final", score: 87 },
  ],
};

const GradeAnalysis = () => {
  const mathGradeData = gradeTrends.Math.map((item) => [
    item.name,
    `${item.score}%`,
  ]);
  const historyGradeData = gradeTrends.History.map((item) => [
    item.name,
    `${item.score}%`,
  ]);

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center mb-4">
        <TitleComponent title="Grade Analysis" />
        <ButtonFilled text="View More Details" />
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Math Trend</h3>
        <p className="mb-4">
          Quiz 1 (85%) → Midterm (90%) → Quiz 2 (95%) → Final (92%)
        </p>
        <TableComponent
          tableHeader={["Assessment", "Score"]}
          tableData={mathGradeData}
        />
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">History Trend</h3>
        <p className="mb-4">
          Essay 1 (80%) → Midterm (85%) → Essay 2 (88%) → Final (87%)
        </p>
        <TableComponent
          tableHeader={["Assessment", "Score"]}
          tableData={historyGradeData}
        />
      </div>
    </div>
  );
};

export default GradeAnalysis;
