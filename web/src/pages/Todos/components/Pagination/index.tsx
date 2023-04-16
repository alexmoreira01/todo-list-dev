import { PaginationContainer, ButtonPagination } from "./styles";

interface PaginationProps {
  pages: number;
  currentPage: number;
  onSetCurrentPage: (index: number) => void
}

export function Pagination({pages, currentPage, onSetCurrentPage }:PaginationProps) {
  return (
    <PaginationContainer>
      {Array.from(Array(pages), (item, index) => {
        return (
          <ButtonPagination
            key={index}
            className={`${index === currentPage ? "buttonActive" : ""}`}
            value={index}
            onClick={() => { onSetCurrentPage(index) }} >{index + 1}
          </ButtonPagination>
        )
      })}
    </PaginationContainer>
  )
}