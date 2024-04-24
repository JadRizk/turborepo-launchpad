import React from "react";
import { Pagination } from "react-bootstrap";

interface PaginationProps {
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalItems,
  onPageChange,
}) => {
  const [activePage, setActivePage] = React.useState(1);

  const handlePageSelect = (pageNumber: number) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  const totalPages = Math.ceil(totalItems / 9);

  return (
    <Pagination>
      <Pagination.First
        onClick={() => handlePageSelect(1)}
        disabled={activePage === 1}
      />
      <Pagination.Prev
        onClick={() => handlePageSelect(activePage - 1)}
        disabled={activePage === 1}
      />

      {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === activePage}
            onClick={() => handlePageSelect(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        );
      })}

      <Pagination.Next
        onClick={() => handlePageSelect(activePage + 1)}
        disabled={activePage === totalPages}
      />
      <Pagination.Last
        onClick={() => handlePageSelect(totalPages)}
        disabled={activePage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;
