import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { VscMention } from "react-icons/vsc";
import { IoAttachOutline } from "react-icons/io5";

const CommentBox = ({ x, y, commentId, onClose }) => {
  const [text, setText] = useState("");
  const [openCommentModal, setOpenCommentModal] = useState(false);

  return (
    <div className="absolute" style={{ top: y, left: x }}>
      {!openCommentModal && (
        <div
          onClick={() => setOpenCommentModal(true)}
          className="border inline-flex items-center bg-surface-primary rounded-lg w-[173px] px-3 h-10 py-1.5 text-sm font-medium text-icon-grey shadow-boxShadow"
        >
          Add Comment
        </div>
      )}
      {openCommentModal && (
        <div className="bg-surface-primary rounded-lg shadow-lg">
          <input
            className="w-[173px] text-text-dark-p py-1.5 text-sm px-3 rounded-t-lg h-10 p-1 focus:outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex py-1 px-3 h-8 border-t border-t-surface-grey justify-between items-center">
            <div className="flex items-center text-medium-dark gap-0.5">
              <VscMention className="w-5 h-5 cursor-pointer" />
              <IoAttachOutline className="w-5 h-5 cursor-pointer" />
            </div>
            <IoSendSharp className="text-blue h-5 w-5 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentBox;
