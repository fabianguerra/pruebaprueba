import { createContext, ReactNode } from "react";
import { v2RMResponse } from "./domain/V2RICKMORTYRequest";

import useGetV2RMId from "./hooks/useV2RICKMORTY";

export interface IV2RMContext {
  V2RMPROVIDERCT: v2RMResponse[];
}

const V2RMContext = createContext({});

export const V2RMProvider = ({ children }: { children: ReactNode }) => {
  const { V2RM } = useGetV2RMId();
  const storage: IV2RMContext = {
    V2RMPROVIDERCT:V2RM,
  };

  return (
    <V2RMContext.Provider value={storage}>
      {children}
    </V2RMContext.Provider>
  );
};

export default V2RMContext;
