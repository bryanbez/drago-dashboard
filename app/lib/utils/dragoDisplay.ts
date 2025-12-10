import { DragoInfo } from "../../types/drago";

export const getDragosDisplayByPage = (
  dragos: DragoInfo[],
  page: number,
  pageSize: number
) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedDragos = dragos.slice(startIndex, endIndex);
  return paginatedDragos;
};

export const getDragosDisplayByPageCount = (
  dragos: DragoInfo[],
  pageSize: number
) => {
  const pageCount = Math.ceil(dragos.length / pageSize);
  return pageCount;
};

export const displayPagination = (pageCount: number) => {
  const pagination = [];
  for (let i = 1; i <= pageCount; i++) {
    pagination.push(i);
  }
  return pagination;
};

export const hasUnclaimedDST = (drago: DragoInfo) => {
  return drago.rent?.stats?.unclaimedProfit > 0;
};

export const isUnrented = (drago: DragoInfo) => {
  return drago.rent?.status === 0;
};

export const isRented = (drago: DragoInfo) => {
  return drago.rent?.status === 1;
};
