import { useState } from "react";
import { INSTI_LIST } from "../../../../utils/Helpers";
import InstituteHeader from "./InstituteHeader";
import InstituteList from "./InstituteList";
import Pagination from "./Pagination";

const InstituteComponent = () => {
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [inputPage, setInputPage] = useState("");

  const indexOfLastItem = currPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currItems = INSTI_LIST.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(INSTI_LIST.length / itemsPerPage);

  const nextPage = () => {
    if (currPage < totalPages) {
      setCurrPage(currPage + 1);
    }
  };

  const prevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  const handlePageInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleGoToPage = () => {
    const page = Number(inputPage);
    if (page > 0 && page <= totalPages) {
      setCurrPage(page);
    }
    setInputPage("");
  };

  return (
    <div>
      <InstituteHeader />
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 border rounded-md"
      />
      <InstituteList institutes={currItems} />
      <Pagination
        currPage={currPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        inputPage={inputPage}
        setItemsPerPage={setItemsPerPage}
        setCurrPage={setCurrPage}
        handlePageInputChange={handlePageInputChange}
        handleGoToPage={handleGoToPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default InstituteComponent;
