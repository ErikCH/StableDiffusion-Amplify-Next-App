import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerArt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Art, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prompt?: string | null;
  readonly negative_prompt?: string | null;
  readonly timestamp?: string | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Art, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prompt?: string | null;
  readonly negative_prompt?: string | null;
  readonly timestamp?: string | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Art = LazyLoading extends LazyLoadingDisabled ? EagerArt : LazyArt

export declare const Art: (new (init: ModelInit<Art>) => Art) & {
  copyOf(source: Art, mutator: (draft: MutableModel<Art>) => MutableModel<Art> | void): Art;
}