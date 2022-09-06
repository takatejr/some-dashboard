import { createContext, ReactNode, useContext, useState } from "react";
import { HeaderState, initialHeaderState, initialUtilsState, UtilsState } from "./utils/initial-state";

export interface AppState {
    header: HeaderState;
    utils: UtilsState;
}

export const AppContext = createContext<AppState>({
    header: initialHeaderState,
    utils: initialUtilsState,
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [utils, setUtils] = useState<UtilsState>(initialUtilsState);
    const [header, setHeader] = useState<HeaderState>(initialHeaderState);

    return <AppContext.Provider value={{ header, utils }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within a AppContextProvider");
    }

    return context;
};
