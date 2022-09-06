import React, { CSSProperties, memo, ReactNode } from "react";
import { Info } from "@mui/icons-material";

export type DashboardWrapperProps = {
    children: ReactNode;
    title?: string;
    subTitle?: string;
    icon?: ReactNode;
    customCSS?: CSSProperties;
};

export const DashboardWrapper = memo<DashboardWrapperProps>(({ children, title, subTitle, icon, customCSS }) => {
    return (
        <section className={"shadow-md pl-6 p-4 bg-white rounded-[4px] min-h-[175px] w-full justify-between flex flex-col"} style={customCSS}>
            <div>
                {title ? <h3 className={"text-textMainColor pb-4 text-xl font-bold"}>{title}</h3> : <></>}
                {icon ? (
                    <p className={"pb-5 text-textSecondaryColor text-sm flex place-items-center gap-2"}>
                        {icon}
                        <span>{title}</span>
                    </p>
                ) : subTitle ? (
                    <p className={"pb-5 text-textSecondaryColor text-sm"}>{subTitle}</p>
                ) : (
                    <></>
                )}
            </div>
            {children}
        </section>
    );
});

DashboardWrapper.displayName = "DashboardWrapper";
