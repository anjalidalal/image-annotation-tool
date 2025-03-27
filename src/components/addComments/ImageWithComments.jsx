import React, { useState } from "react";
import { IoMdImage } from "react-icons/io";
import CommentBox from "./CommentBox";
import { IoCrop } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import commentPosted from "./../../images/comment-posted.svg";
import { v4 as uuidv4 } from "uuid";

const ImageWithComments = ({ image, onClose }) => {
  const comments = useSelector((state) => state.comments.comments);
  const [openCommentBoxes, setOpenCommentBoxes] = useState([]);
  const [hoverPosition, setHoverPosition] = useState(null);
  const [openCommentsThreadModal, setOpenCommentsThreadModal] = useState(null);

  const handleAddCommentBoxClick = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const newCommentBox = { id: uuidv4(), x, y };
    setOpenCommentBoxes((prev) => [...prev, newCommentBox]);
  };

  const closeCommentBox = (id) => {
    setOpenCommentBoxes((prev) => prev.filter((box) => box.id !== id));
  };

  return (
    <main className="w-full fixed top-0 z-50 h-screen">
      <header className="py-5 px-8 xl:px-12 h-[64px] flex w-full justify-between items-center bg-black text-surface-primary">
        <p className="text-sm font-medium inline-flex gap-1 items-center">
          <IoMdImage className="text-[#FFB444] w-5 h-5" /> {image.name}
        </p>
        <div className="flex gap-5 items-center">
          <IoCrop className="w-5 h-5 cursor-pointer" />
          <MdOutlineEdit className="w-5 h-5 cursor-pointer" />
          <BiCommentAdd className="w-5 h-5 cursor-pointer" />
          <LuDownload className="w-5 h-5 cursor-pointer" />
          <IoClose className="w-5 h-5 cursor-pointer" onClick={onClose} />
        </div>
      </header>
      <section className="h-[calc(100vh-64px)] bg-[rgb(13,13,13)] w-full p-12">
        <div className="relative w-full">
          <img
            src={image.url}
            alt="Clickable Image"
            className="w-full h-[calc(100vh-160px)] object-cover rounded relative"
            onClick={handleAddCommentBoxClick}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setHoverPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            onMouseLeave={() => setHoverPosition(null)}
          />
          {hoverPosition && (
            <div
              className="absolute w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg"
              style={{
                top: hoverPosition.y,
                left: hoverPosition.x,
                transform: "translate(-50%, -50%)",
              }}
            >
              <BiCommentAdd className="w-5 h-5 text-surface-primary" />
            </div>
          )}
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="absolute group cursor-pointer"
              style={{ top: comment.y, left: comment.x }}
            >
              {openCommentsThreadModal === comment.id ? (
                <CommentBox
                  x={comment.x}
                  y={comment.y}
                  id={openCommentsThreadModal}
                  commentData={comment}
                />
              ) : (
                <>
                  <img
                    src={commentPosted}
                    alt={`comment-${comment.id}`}
                    className="object-cover group-hover:hidden"
                    width={30}
                    height={30}
                  />
                  <div
                    onClick={() => setOpenCommentsThreadModal(comment.id)}
                    className="relative z-40 max-w-[240px] hidden group-hover:block text-text-dark-p bg-surface-primary rounded-xl p-2 shadow-boxShadow"
                  >
                    <div className="items-center gap-1 flex">
                      <div className="bg-[#1E7631] text-surface-primary rounded-full h-6 w-6 flex justify-center items-center">
                        A
                      </div>
                      <p className="text-xs whitespace-nowrap text-text-dark-p font-medium">
                        Akanksha Sagar
                      </p>
                    </div>
                    <p className="text-xs ml-7 text-text-dark-p font-normal">
                      {comment.text}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
          {openCommentBoxes.map(({ id, x, y }) => (
            <CommentBox
              key={id}
              x={x}
              y={y}
              onClose={() => closeCommentBox(id)}
              id={null}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ImageWithComments;
