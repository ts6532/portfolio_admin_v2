import type { PaginationProps } from "naive-ui"

interface IUseBasePagination {
  pagination: PaginationProps
}

type UseBasePagination = () => IUseBasePagination

export const useBasePagination: UseBasePagination = () => {
  const pagination = {
    page: 1,
    pageSize: 5,
    showSizePicker: true,
    pageSizes: [3, 5, 7],
    onChange: (page: number) => {
      pagination.page = page
    },
    onUpdatePageSize: (pageSize: number) => {
      pagination.pageSize = pageSize
      pagination.page = 1
    },
  }

  return { pagination }
}
