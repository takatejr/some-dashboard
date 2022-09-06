import React from "react";
import { Btn } from "../shared/components/design-system/button/Button";
import Image from "next/image";
import { AccessTime, Info } from "@mui/icons-material";
import { SearchComponent } from "../shared/components/design-system/search/Search";
import { DashboardWrapper } from "../shared/components/dashboard-wrappers/dashboard-wrapper";

export const DashboardPage = () => {
    const arr = Array.from({ length: 10 }, (e, uuid) => ({
        uuid,
    }));

    return (
        <>
            <span className={"flex flex-row justify-between items-center pb-12"}>
                <h1 className={"text-textMainColor font-bold text-2xl"}>Dashboard</h1>
                <SearchComponent />
            </span>
            <div className={"grid xl:grid-cols-2 gap-4"}>
                <div className={"grid gap-5"}>
                    <div className={"grid grid-cols-2 gap-3"}>
                        <DashboardWrapper title={"Your profile"} icon={<Info className={"fill-red-600"} />} subTitle={"Last update 22-02-2021"}>
                            <Btn onClick={() => console.log("hey")} text={"Check your data"}></Btn>
                        </DashboardWrapper>
                        <DashboardWrapper title={"Availability"}>
                            <Btn onClick={() => console.log("hey")} text={"Availability settings"}></Btn>
                        </DashboardWrapper>
                    </div>
                    <DashboardWrapper title={"Current projects"} subTitle={"hello"}>
                        <Btn onClick={() => console.log("hey")} text={"Check full list"}></Btn>
                    </DashboardWrapper>
                    <DashboardWrapper title={"Referrals"} subTitle={"Lorem ipslum dolores"}>
                        <Btn onClick={() => console.log("hey")} text={"Button"}></Btn>
                    </DashboardWrapper>
                    <DashboardWrapper title={"EOND Feed"} subTitle={"Nie uczestniczysz w żadnym projekcie"}>
                        <Btn onClick={() => console.log("hey")} text={"Zobacz pełną listę"}></Btn>
                    </DashboardWrapper>
                    <div className={"grid grid-cols-2 gap-3"}>
                        <DashboardWrapper title={""} customCSS={{ padding: 0, height: '190px' }}>
                            <Image src={"/pro_bono.png"} height={"100%"} width={"100%"} layout={"responsive"}></Image>
                        </DashboardWrapper>
                        <DashboardWrapper title={"Your EOND history"} subTitle={"Nie uczestniczysz w żadnym projekcie"} customCSS={{height: '180px'}}>
                            <Btn onClick={() => console.log("hey")} text={"Zobacz pełną listę"}></Btn>
                        </DashboardWrapper>
                    </div>
                </div>
                <div>
                    <DashboardWrapper title={"Guide"} subTitle={"How to be better Expert profile"}>
                        <ul className={"flex flex-col gap-3"}>
                            {arr.map(({ uuid }) => (
                                <li className={"text-sm bg-[#F9F9F9] py-3 px-5"} key={uuid}>
                                    <h4 className={"text-textMainColor"}>Etiam varius as diam eget porttitor</h4>
                                    <span className={"flex flex-row gap-3 justify-start items-center text-textSecondaryColor"}>
                                        <AccessTime className={"w-4 h-4"} />5 min read
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </DashboardWrapper>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
