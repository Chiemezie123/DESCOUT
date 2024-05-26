import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { ButtonProps } from "@utils/button/index.types";
import { InputProps } from "@utils/input";

export interface buttonCopyProps extends ButtonProps {
  label?: string;
  labelCustomClassName?: string;
  errorMsg?: string;
  name?: string;
  customClass?: string;
}
