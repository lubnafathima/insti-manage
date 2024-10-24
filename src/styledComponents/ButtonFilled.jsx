const ButtonFilled = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="bg-[#0A66C2] text-[#fff] border rounded-md shadow-sm px-4 py-2 hover:bg-[#3785d3]">{text}</button>
    </>
  );
};

export default ButtonFilled;
