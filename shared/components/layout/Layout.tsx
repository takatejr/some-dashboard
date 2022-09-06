import React, { memo, ReactNode } from "react";
import styles from "./Layout.module.scss";
import clsx from "clsx";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import { useAppContext } from "../../context/app/AppContext";

export type LayoutProps = {
    children: ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
    const {
        utils: { theme },
    } = useAppContext();

    return (
        <div className={clsx(styles.container, theme)}>
            <Header />
            <Nav />
            <main className={clsx(styles.main, "px-20 pt-9")}>{children}</main>
        </div>
    );
});

Layout.displayName = "Layout";

export default Layout;
