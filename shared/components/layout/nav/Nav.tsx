import React, { memo, ReactNode, SetStateAction, useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

import clsx from "clsx";
import { useRouter } from "next/router";
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { AccountCircle, ExpandMore, Grading, GridView, Payment, PeopleOutline, TextSnippet } from "@mui/icons-material";
import { Btn } from "../../design-system/button/Button";

export type NavigationTabsType = {
    title: string;
    link: string;
    icon: ReactNode;
};

const navigationTabs: Array<NavigationTabsType> = [
    {
        title: "Dashboard",
        icon: <GridView />,
        link: "/dashboard",
    },
    {
        title: "My profile",
        link: "/a",
        icon: <AccountCircle />,
    },
    {
        title: "Guide",
        link: "/b",
        icon: <TextSnippet />,
    },
    {
        title: "EonD Community",
        link: "/c",
        icon: <PeopleOutline />,
    },
    {
        title: "My meetings",
        link: "/d",
        icon: <PeopleOutline />,
    },
    {
        title: "Payments",
        link: "/e",
        icon: <Payment />,
    },
    {
        title: "My referrals",
        link: "/f",
        icon: <Grading />,
    },
    {
        title: "Support",
        link: "/g",
        icon: <Grading />,
    },
];

export const Nav = memo(() => {
    const [activeTab, setActiveTab] = useState<SetStateAction<number>>(0);
    const router = useRouter();

    useEffect(() => {
        handleChangeUrl();
    }, [router.asPath]);

    const handleChangeUrl = (): void => {
        const idx = navigationTabs.findIndex(({ link }) => router.asPath.toLowerCase().includes(link));

        setActiveTab(idx);
    };

    return (
        <nav className={styles.aside}>
            <div className={clsx("border-b-2 border-t-2 border-solid border-[#E0E5F1] h-auto w-full")}>
                <Accordion className={"pl-4 py-5"}>
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                        <div className={"flex flex-row"}>
                            <AccountCircle className={"mr-4"} />
                            <div>
                                <Typography>Zuzanna</Typography>
                                <span className={"text-textSecondaryColor"}>Expert account</span>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={"flex flex-col"}>
                        <Btn onClick={() => console.log("1st action")} text={"Profile"} />
                        <Btn onClick={() => console.log("2st action")} text={"Other"} />
                    </AccordionDetails>
                </Accordion>
            </div>
            <List>
                {navigationTabs.map(({ link, title, icon }, i) => (
                    <Link href={link} key={link}>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={i === activeTab}
                                sx={{
                                    "&.Mui-selected": {
                                        color: "var(--main-text-color)",
                                        backgroundColor: "var(--aside-theme-color)"
                                    },
                                    "&.Mui-selected > div > svg": {
                                        fill: "var(--btn-text-main-color)",
                                    },
                                }}
                            >
                                <ListItemIcon className={"pl-4"}>{icon}</ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </nav>
    );
});

Nav.displayName = "Nav";

export default Nav;
