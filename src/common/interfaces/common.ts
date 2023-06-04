interface PaginationInput {
  limit: number;
  offset: number;
}

interface Pagination extends PaginationInput {
  total: number;
}

interface SearchInput<Query> {
  where: Query;
  pagination: PaginationInput;
}

interface PaginationData<Result> {
  data: Result[];
  pagination: Pagination;
}

interface BareObject {
  [x: string]: any;
}

export { SearchInput, Pagination, PaginationData, PaginationInput, BareObject };
