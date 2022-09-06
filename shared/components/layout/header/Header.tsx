import React, { memo } from "react";
import styles from "./Header.module.scss";
import { Badge } from "@mui/material";
import { NotificationsNone } from "@mui/icons-material";
import Link from "next/link";

export const Header = memo(() => {
    //Badge context

    return (
        <header className={styles.container}>
            <Link href={"/"}>
                <svg
                    className={"cursor-pointer"}
                    width="83"
                    height="27"
                    viewBox="0 0 83 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <rect width="82.1072" height="27" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_424_343" transform="translate(-0.0052885) scale(0.00802045 0.0243902)" />
                        </pattern>
                        <image
                            id="image0_424_343"
                            width="126"
                            height="41"
                            xlinkHref="data:image/png;base64,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"
                        />
                    </defs>
                </svg>
            </Link>
            <Badge badgeContent={4} color="primary" className={"cursor-pointer"}>
                <NotificationsNone color="action" onClick={() => console.log("hey")} />
            </Badge>
        </header>
    );
});

Header.displayName = "Header";

export default Header;
