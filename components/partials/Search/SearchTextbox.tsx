"use client";
import { useSearchDragoStore } from "@/app/lib/stores/storeSearchDrago";
import TextboxInput from "../Textbox/Textbox";

export function SearchDragosTextbox() {
  const setSearchDrago = useSearchDragoStore((state) => state.setSearchDrago);
  const searchDrago = useSearchDragoStore((state) => state.searchDrago);

  return (
    <TextboxInput
      type="number"
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder="Search dragos..."
      value={searchDrago}
      name="searchDrago"
      onChange={(e) => setSearchDrago(e.target.value)}
    />
  );
}
