import { IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { memo } from "react";

export const SearchComponent = memo(() => {
    return (
        <div className={"bg-white border-[1px] border-solid border-gray-200 rounded-sm"}>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Search />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ "aria-label": "search" }} />
        </div>
    );
});

SearchComponent.displayName = "SearchComponent";

export default SearchComponent;
