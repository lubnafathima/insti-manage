const DetailedGrade = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Detailed Grade Breakdown</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Math</h3>

        {/* Assignments Section */}
        <div className="mb-4">
          <h4 className="font-medium">Assignments</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Assessment Name</th>
                <th className="border p-2">Score</th>
                <th className="border p-2">Grading Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Assignment 1 (Trigonometry)</td>
                <td className="border p-2">85%</td>
                <td className="border p-2">20%</td>
              </tr>
              <tr>
                <td className="border p-2">Assignment 2 (Algebra)</td>
                <td className="border p-2">90%</td>
                <td className="border p-2">20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Exams Section */}
        <div className="mb-4">
          <h4 className="font-medium">Exams</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Assessment Name</th>
                <th className="border p-2">Score</th>
                <th className="border p-2">Grading Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Midterm Exam</td>
                <td className="border p-2">88%</td>
                <td className="border p-2">30%</td>
              </tr>
              <tr>
                <td className="border p-2">Final Exam</td>
                <td className="border p-2">92%</td>
                <td className="border p-2">30%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quizzes Section */}
        <div className="mb-4">
          <h4 className="font-medium">Quizzes</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Assessment Name</th>
                <th className="border p-2">Score</th>
                <th className="border p-2">Grading Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Quiz 1</td>
                <td className="border p-2">95%</td>
                <td className="border p-2">10%</td>
              </tr>
              <tr>
                <td className="border p-2">Quiz 2</td>
                <td className="border p-2">89%</td>
                <td className="border p-2">10%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Projects Section (if applicable) */}
        <div className="mb-4">
          <h4 className="font-medium">Projects</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Assessment Name</th>
                <th className="border p-2">Score</th>
                <th className="border p-2">Grading Weight</th>
              </tr>
            </thead>
            <tbody>
              {/* Add project rows here if applicable */}
              <tr>
                <td className="border p-2">Project 1 (Group Work)</td>
                <td className="border p-2">90%</td>
                <td className="border p-2">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailedGrade;
