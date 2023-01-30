/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Art } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArtCardOverridesProps = {
    ArtCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "Generated Art1"?: PrimitiveOverrideProps<TextProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    Trash?: PrimitiveOverrideProps<FlexProps>;
    Vector36472690?: PrimitiveOverrideProps<IconProps>;
    Pencil?: PrimitiveOverrideProps<FlexProps>;
    Vector36472692?: PrimitiveOverrideProps<IconProps>;
    "4bds 3 ba 2,530 sqft - Active"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 98122"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ArtCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    art?: Art;
} & {
    overrides?: ArtCardOverridesProps | undefined | null;
}>;
export default function ArtCard(props: ArtCardProps): React.ReactElement;
