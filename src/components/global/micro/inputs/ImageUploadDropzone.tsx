"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { ImagePlus, ImageUp, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ImageUploadDropzoneProps {
  value?: string;
  onChange?: (files: File[]) => void;
}

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const ImageUploadDropzone = ({ value, onChange }: ImageUploadDropzoneProps) => {
  const [fileMetadata, setFileMetadata] = useState<{ name: string; size: string } | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.[0]) {
        setFileMetadata({
          name: acceptedFiles[0].name,
          size: formatFileSize(acceptedFiles[0].size),
        });
      }
      onChange?.(acceptedFiles);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxFiles: 1,
  });

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileMetadata(null);
    onChange?.([]);
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      {!value && (
        <div className="flex w-full flex-col gap-4 items-center rounded-2xl border border-dashed border-primary/60 bg-primary/5 p-8 font-extralight text-foreground/80">
          <Image src={"/upload.png"} width={68} height={60} alt="Upload Logo" />

          {isDragActive ? (
            <p>Drag and drop Image </p>
          ) : (
            <p>
              Drag and drop Image{" "}
              <span className="text-primary"> or Browse </span>
            </p>
          )}
        </div>
      )}

      {value && (
        <div className="flex w-full gap-4 items-center rounded-2xl border border-foreground/10 p-4 font-extralight text-foreground/80 justify-between">
          <div className="flex gap-4 items-center">
            <Image
              src={value}
              alt="Uploaded image"
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-medium">
                {fileMetadata?.name || "Uploaded Image"}
              </p>
              <p className="text-xs text-muted-foreground">
                {fileMetadata?.size || ""}
              </p>
            </div>
          </div>
          <div className="text-muted-foreground flex gap-2">
            <Button
              type="button"
              variant={"ghost"}
              size={"icon"}
              className="rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                open();
              }}
            >
              <ImageUp className="size-6" />
            </Button>
            <Button
              type="button"
              variant={"ghost"}
              size={"icon"}
              className="rounded-full"
              onClick={handleRemove}
            >
              <Trash2 className="text-destructive size-6" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadDropzone;
