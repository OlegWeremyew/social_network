export type UsersPropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  // eslint-disable-next-line react/require-default-props
  portionSize?: number;
};
