/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArtCreateFormInputValues = {
    prompt?: string;
    negative_prompt?: string;
    timestamp?: string;
    url?: string;
};
export declare type ArtCreateFormValidationValues = {
    prompt?: ValidationFunction<string>;
    negative_prompt?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArtCreateFormOverridesProps = {
    ArtCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    prompt?: PrimitiveOverrideProps<TextFieldProps>;
    negative_prompt?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArtCreateFormProps = React.PropsWithChildren<{
    overrides?: ArtCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ArtCreateFormInputValues) => ArtCreateFormInputValues;
    onSuccess?: (fields: ArtCreateFormInputValues) => void;
    onError?: (fields: ArtCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArtCreateFormInputValues) => ArtCreateFormInputValues;
    onValidate?: ArtCreateFormValidationValues;
} & React.CSSProperties>;
export default function ArtCreateForm(props: ArtCreateFormProps): React.ReactElement;
