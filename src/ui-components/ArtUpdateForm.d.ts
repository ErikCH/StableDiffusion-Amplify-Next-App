/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Art } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArtUpdateFormInputValues = {
    prompt?: string;
    negative_prompt?: string;
    timestamp?: string;
    url?: string;
};
export declare type ArtUpdateFormValidationValues = {
    prompt?: ValidationFunction<string>;
    negative_prompt?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArtUpdateFormOverridesProps = {
    ArtUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    prompt?: PrimitiveOverrideProps<TextFieldProps>;
    negative_prompt?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArtUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArtUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    art?: Art;
    onSubmit?: (fields: ArtUpdateFormInputValues) => ArtUpdateFormInputValues;
    onSuccess?: (fields: ArtUpdateFormInputValues) => void;
    onError?: (fields: ArtUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArtUpdateFormInputValues) => ArtUpdateFormInputValues;
    onValidate?: ArtUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArtUpdateForm(props: ArtUpdateFormProps): React.ReactElement;
