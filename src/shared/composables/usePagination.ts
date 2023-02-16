import type { PaginationProps } from "naive-ui"
import type { UnwrapNestedRefs } from "vue"
import { reactive } from "vue"

interface IUseBasePagination {
  pagination: UnwrapNestedRefs<PaginationProps>
}

type UseBasePagination = () => IUseBasePagination

export const useBasePagination: UseBasePagination = () => {
  const pagination = reactive({
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
  })

  return { pagination }
}
