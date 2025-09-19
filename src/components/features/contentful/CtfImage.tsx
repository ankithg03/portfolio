import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import ImageZoom from "react-image-zooom";

import { ImageFieldsFragment } from "@src/lib/__generated/sdk";

interface ImageProps extends Omit<ImageFieldsFragment, "__typename"> {
  nextImageProps?: Omit<NextImageProps, "src" | "alt">;
  isZoom?: boolean;
}

export const CtfImage = ({
  url,
  width,
  height,
  title,
  nextImageProps,
  isZoom,
}: ImageProps) => {
  if (!url || !width || !height) return null;

  const blurURL = new URL(url);
  blurURL.searchParams.set("w", "10");
  if (!isZoom) {
    return (
      <NextImage
        src={url}
        width={width}
        height={height}
        alt={title || ""}
        sizes="(max-width: 1200px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL={blurURL.toString()}
        {...nextImageProps}
        className={twMerge(nextImageProps?.className, "transition-all")}
      />
    );
  }
  return (
    //@ts-ignore
    <ImageZoom
      src={url}
      alt={title || ""}
      zoom="200%"
      className={twMerge(nextImageProps?.className, "transition-all")}
    >
      <NextImage
        src={url}
        width={width}
        height={height}
        alt={title || ""}
        sizes="(max-width: 1200px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL={blurURL.toString()}
        {...nextImageProps}
        className={twMerge(nextImageProps?.className, "transition-all")}
      />
    </ImageZoom>
  );
};
