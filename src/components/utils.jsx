import { useState, useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export const UploadLoadingModal = ({
  uploadedQueue,
  setOpen,
  cancelUpload,
}) => {
  const [progressIndex, setProgressIndex] = useState(0);

  useEffect(() => {
    if (progressIndex < uploadedQueue.length) {
      const timer = setTimeout(() => {
        setProgressIndex((prev) => prev + 1);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      const hideTimer = setTimeout(setOpen(false), uploadedQueue.length * 100);
      return () => clearTimeout(hideTimer);
    }
  }, [progressIndex, uploadedQueue.length, setOpen]);

  return (
    <div className="fixed bottom-0 right-4 w-[408px] bg-white shadow-lg rounded-t-xl border border-gray-200">
      <div className="flex justify-between px-5 py-3 text-text-dark-p items-center">
        <span className="font-medium text-xl">
          Uploading {uploadedQueue.length} Item
          {uploadedQueue.length > 1 ? "s" : ""}
        </span>
        <IoClose
          onClick={() => setOpen(false)}
          className="w-5 h-5 cursor-pointer"
        />
      </div>
      <div className="px-5 py-2 bg-surface-hover flex items-center justify-between">
        <p className="text-surface-stroke text-base">Less than a minute left</p>
        <button
          className="text-blue text-base font-medium"
          onClick={() => {
            cancelUpload();
            setOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
      <div className="">
        {uploadedQueue.map((img, index) => (
          <div
            key={img.id}
            className="flex items-center hover:bg-gray-50 cursor-pointer justify-between px-5 py-4 gap-3"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={img.url}
                alt={img.name}
                className="w-8 h-8 rounded-md object-cover"
              />
              <p className="text-base font-medium text-surface-stroke">
                {img.name}
              </p>
            </div>

            {index < progressIndex ? (
              <BsFillCheckCircleFill className="text-emerald-600" />
            ) : (
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-t-2 border-t-emerald-600 border-gray-200 rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
