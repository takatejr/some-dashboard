import { memo } from "react";
import { Button, SvgIconTypeMap } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export enum ButtonVariantEnum {
    CONTAINED = "contained",
    OUTLINED = "outlined",
    TEXT = "text",
}

export type ButtonVariantType = ButtonVariantEnum;

export type ButtonProps = {
    readonly onClick: () => void;
    readonly text: string;
    readonly variant?: ButtonVariantType;
    readonly icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export const Btn = memo<ButtonProps>(({ onClick, text = ButtonVariantEnum.TEXT, variant, icon = <ArrowForward /> }) => {
    return (
        <Button className={"text-btnTextMainColor text-xs px-1 justify-start w-fit"} variant={variant} endIcon={icon} onClick={() => onClick()}>
            {text}
        </Button>
    );
});

Btn.displayName = "Btn";

export default Btn;
