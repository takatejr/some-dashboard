export type Theme = "light" | "dark";

export interface HeaderState {
    title: {
        text?: string;
        isVisible?: boolean;
        action?: () => void;
    };
}

export interface UtilsState {
    isLoading: boolean;
    url: string | null;
    theme: Theme;
}

export const initialUtilsState: UtilsState = {
    theme: "light",
    url: null,
    isLoading: false,
};

export const initialHeaderState: HeaderState = {
    title: {
        text: "Entrees",
        isVisible: true,
    },
};
