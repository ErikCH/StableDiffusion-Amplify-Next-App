/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ArtCardProps } from "./ArtCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArtCardCollectionOverridesProps = {
    ArtCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    ArtCard?: ArtCardProps;
} & EscapeHatchProps;
export declare type ArtCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ArtCardProps;
} & {
    overrides?: ArtCardCollectionOverridesProps | undefined | null;
}>;
export default function ArtCardCollection(props: ArtCardCollectionProps): React.ReactElement;
