import React, { useState } from "react";
import { PrimaryNavbar } from "./PrimaryNavbar";
import emptyState from "./../images/empty-state.svg";
import { FiUpload } from "react-icons/fi";

export const Home = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <section>
      <PrimaryNavbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-72px)] bg-primary-bg">
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
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
    </section>
  );
};
