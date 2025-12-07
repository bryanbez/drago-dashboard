"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { DragoInfo } from "../types/drago";

type DragosContextType = {
  dragos: DragoInfo[];
  setDragos: (v: DragoInfo[]) => void;
};

const DragosContext = createContext<DragosContextType | undefined>(undefined);

export const DragosProvider = ({ children }: { children: ReactNode }) => {
  const [dragos, setDragos] = useState<DragoInfo[]>([]);

  return (
    <DragosContext.Provider
      value={{
        dragos,
        setDragos,
      }}>
      {children}
    </DragosContext.Provider>
  );
};

export const useDragosValue = () => {
  const context = useContext(DragosContext);
  if (!context)
    throw new Error("useDragosValue must be used within a useDragosValue");
  return context;
};
