"use client";
import { useFetchDragos } from "@/app/hooks/useFetchDragos";
import DragoCard from "../partials/Card/DragoCard";
import { useState } from "react";
import {
  getDragosDisplayByPageCount,
  getDragosDisplayByPage,
  hasUnclaimedDST,
  isRented,
  isUnrented,
} from "@/app/lib/utils/dragoDisplay";
import { DragoInfo } from "@/app/types/drago";
import { ChevronLeftIcon, ChevronRightIcon } from "../partials/svg";
import { countUnclaimedDST } from "@/app/lib/utils/dragoDashboard";

export const DragoDisplay = () => {
  const { dragos } = useFetchDragos();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [
    hideDragosWithZeroUnclaimedDSTValue,
    setHideDragosWithZeroUnclaimedDSTValue,
  ] = useState(false);
  const [hideRentedDragosValue, setHideRentedDragosValue] = useState(false);
  const [hideUnrentedDragosValue, setHideUnrentedDragosValue] = useState(false);

  const displayDragos: DragoInfo[] = dragos.filter(
    (drago) =>
      (!hideDragosWithZeroUnclaimedDSTValue || hasUnclaimedDST(drago)) &&
      (!hideRentedDragosValue || isUnrented(drago)) &&
      (!hideUnrentedDragosValue || isRented(drago))
  );

  const unclaimedDSTCount = countUnclaimedDST(displayDragos);

  const checkDragoWithUnrentedValue = displayDragos.some(
    (drago) => drago.rent.status === 0
  );

  // then pagination on final filtered array

  const pageCount = getDragosDisplayByPageCount(displayDragos, pageSize);
  const displayDragosDisplay = getDragosDisplayByPage(
    displayDragos,
    page,
    pageSize
  );

  return (
    <>
      {displayDragos.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-600">No dragos found</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Show:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {[20, 50, 100].map((size) => (
                  <button
                    key={size}
                    onClick={() => setPageSize(size)}
                    className={`px-3 py-1 rounded-md cursor-pointer text-xs font-medium transition-all ${
                      pageSize === size
                        ? "bg-white text-indigo-600 shadow-sm "
                        : "text-gray-500 hover:text-gray-900"
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Page <span className="font-semibold text-gray-900">{page}</span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">{pageCount}</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="p-2 cursor-pointer rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-600">
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={() => setPage(Math.min(pageCount, page + 1))}
                  disabled={page === pageCount}
                  className="p-2 cursor-pointer rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-600">
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              {unclaimedDSTCount > 0 && (
                <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors">
                  <input
                    type="checkbox"
                    checked={hideDragosWithZeroUnclaimedDSTValue}
                    onChange={() =>
                      setHideDragosWithZeroUnclaimedDSTValue(
                        !hideDragosWithZeroUnclaimedDSTValue
                      )
                    }
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                  />
                  <span>Hide zero unclaimed DST</span>
                </label>
              )}

              {checkDragoWithUnrentedValue && (
                <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors">
                  <input
                    type="checkbox"
                    checked={hideRentedDragosValue}
                    onChange={() => {
                      const newValue = !hideRentedDragosValue;
                      setHideRentedDragosValue(newValue);
                      if (newValue) setHideUnrentedDragosValue(false);
                    }}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                  />
                  <span>Hide rented</span>
                </label>
              )}

              <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors">
                <input
                  type="checkbox"
                  checked={hideUnrentedDragosValue}
                  onChange={() => {
                    const newValue = !hideUnrentedDragosValue;
                    setHideUnrentedDragosValue(newValue);
                    if (newValue) setHideRentedDragosValue(false);
                  }}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                />
                <span>Hide unrented</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {displayDragosDisplay.map((drago) => (
              <DragoCard key={drago.tokenId} drago={drago} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
