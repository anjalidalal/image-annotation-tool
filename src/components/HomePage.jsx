import React, { useState } from "react";
import { PrimaryNavbar } from "./PrimaryNavbar.jsx";
import emptyState from "./../images/empty-state.svg";
import { FiUpload } from "react-icons/fi";
import { ImageGrid } from "./ImageGrid.jsx";
import { UploadLoadingModal } from "./utils.jsx";

export const HomePage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [uploadQueue, setUploadQueue] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const uploadedFiles = Array.from(files);

      if (uploadedFiles.length > 10) {
        alert("You can only upload up to 10 images at once.");
        return;
      }

      const imagesWithDetails = uploadedFiles.map((file, index) => {
        const totalIndex = selectedImages.length + index + 1;
        const fileExtension = file.name.split(".").pop();
        const newName = `Photo ${totalIndex
          .toString()
          .padStart(2, "0")}.${fileExtension}`;
        return {
          id: `${newName}_${index}`,
          name: newName,
          url: URL.createObjectURL(file),
        };
      });
      setUploadQueue(imagesWithDetails);
      setSelectedImages((prev) => [...prev, ...imagesWithDetails]);
      setOpenUploadModal(true);
    }
  };

  const handleCancelUpload = (confirmUpload) => {
    if (confirmUpload) {
      setSelectedImages((prev) => [...prev, ...uploadQueue]);
    }
    setUploadQueue([]);
    setOpenUploadModal(false);
  };

  return (
    <section>
      <PrimaryNavbar
        hasImages={selectedImages.length > 0}
        handleFileChange={handleFileChange}
      />
      <div
        className={`flex flex-col h-[calc(100vh-72px)] bg-primary-bg ${
          !selectedImages.length
            ? "justify-center items-center"
            : "items-start xl:items-center"
        }  ${openUploadModal ? "opacity-40" : ""}`}
      >
        {selectedImages.length > 0 ? (
          <ImageGrid images={selectedImages} />
        ) : (
          <div className="flex gap-3 justify-center flex-col items-center">
            <div className="flex gap-3 justify-center flex-col items-center">
              <img
                src={emptyState}
                alt="Upload"
                className="object-cover"
                width={247}
                height={224}
              />
              <p className="text-text-dark-h2 font-semibold text-lg">
                Drop images here
              </p>
              <p className="text-medium-dark text-sm">
                or use Upload button to upload images
              </p>
            </div>
            <label className="inline-flex items-center gap-1 px-4 py-3 text-base font-medium bg-blue text-surface-primary rounded-lg cursor-pointer">
              <FiUpload className="w-[18px] h-[18px]" />
              Upload
              <input
                type="file"
                multiple
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}
      </div>
      {openUploadModal && uploadQueue.length > 0 && (
        <UploadLoadingModal
          uploadedQueue={uploadQueue}
          cancelUpload={handleCancelUpload}
          setOpen={setOpenUploadModal}
        />
      )}
    </section>
  );
};
