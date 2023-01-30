/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Art } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function ArtCard(props) {
  const { art, overrides, ...rest } = props;
  const trashOnClick = useDataStoreDeleteAction({
    id: art?.id,
    model: Art,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="281px"
      height="492px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ArtCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={art?.url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="281px"
        height="119px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 420")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Generated Art1"
              {...getOverrideProps(overrides, "Generated Art1")}
            ></Text>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-end"
              alignItems="center"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 421")}
            >
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={() => {
                  trashOnClick();
                }}
                {...getOverrideProps(overrides, "Trash")}
              >
                <Icon
                  width="14px"
                  height="18px"
                  viewBox={{ minX: 0, minY: 0, width: 14, height: 18 }}
                  paths={[
                    {
                      d: "M11 6L11 16L3 16L3 6L11 6ZM9.5 0L4.5 0L3.5 1L0 1L0 3L14 3L14 1L10.5 1L9.5 0ZM13 4L1 4L1 16C1 17.1 1.9 18 3 18L11 18C12.1 18 13 17.1 13 16L13 4Z",
                      fill: "rgba(13,26,38,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector36472690")}
                ></Icon>
              </Flex>
              <Flex
                gap="63px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Pencil")}
              >
                <Icon
                  width="18px"
                  height="18px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 18.00244140625,
                    height: 18.00244140625,
                  }}
                  paths={[
                    {
                      d: "M0 14.2524L0 18.0024L3.75 18.0024L14.81 6.94244L11.06 3.19244L0 14.2524ZM17.71 2.63244L15.37 0.292444C15.2775 0.19974 15.1676 0.126193 15.0466 0.0760114C14.9257 0.02583 14.796 4.44089e-16 14.665 0C14.534 0 14.4043 0.02583 14.2834 0.0760114C14.1624 0.126193 14.0525 0.19974 13.96 0.292444L12.13 2.12244L15.88 5.87244L17.71 4.04244C17.8027 3.94993 17.8762 3.84004 17.9264 3.71907C17.9766 3.59809 18.0024 3.46841 18.0024 3.33744C18.0024 3.20648 17.9766 3.07679 17.9264 2.95582C17.8762 2.83485 17.8027 2.72496 17.71 2.63244L17.71 2.63244Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector36472692")}
                ></Icon>
              </Flex>
            </Flex>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={art?.prompt}
            {...getOverrideProps(overrides, "4bds 3 ba 2,530 sqft - Active")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={art?.negative_prompt}
            {...getOverrideProps(overrides, "832 34th Ave, Seattle, WA 98122")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
