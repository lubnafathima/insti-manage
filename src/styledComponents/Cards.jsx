
const Cards = ({ title, content }) => {
  return (
    <div>
      <div className="w-full min-h-40 bg-white border rounded-md shadow-sm flex flex-col justify-center items-center p-4">
        <div>
          <h4 className="text-base font-medium text-gray-600 text-center">{title}</h4>
          <h2 className="text-3xl font-bold mt-2 text-center">{content}</h2>
        </div>
        {/* <p className="text-xs text-gray-500 77mt-2">content</p> */}
      </div>
    </div>
  );
};

export default Cards;
