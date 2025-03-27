import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedComments = localStorage.getItem("comments");
    return storedComments ? JSON.parse(storedComments) : [];
  }
  return [];
};

const initialState = {
  comments: loadFromLocalStorage(),
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const newComment = { ...action.payload, id: uuidv4(), replies: [] };
      state.comments.push(newComment);
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    addReply: (state, action) => {
      const { parentId, text } = action.payload;
      const findAndAddReply = (comments) => {
        for (let comment of comments) {
          if (comment.id === parentId) {
            comment.replies.push({
              id: uuidv4(),
              text,
              x: 0,
              y: 0,
              replies: [],
            });
            return;
          }
          findAndAddReply(comment.replies);
        }
      };
      findAndAddReply(state.comments);
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    editComment: (state, action) => {
      const findAndEdit = (comments) => {
        for (let comment of comments) {
          if (comment.id === action.payload.id) {
            comment.text = action.payload.newText;
            return;
          }
          findAndEdit(comment.replies);
        }
      };
      findAndEdit(state.comments);
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    deleteComment: (state, action) => {
      const removeComment = (comments) =>
        comments
          .filter((comment) => comment.id !== action.payload)
          .map((comment) => ({
            ...comment,
            replies: removeComment(comment.replies),
          }));

      state.comments = removeComment(state.comments);
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
  },
});

export const { addComment, addReply, editComment, deleteComment } =
  commentsSlice.actions;
export default commentsSlice.reducer;
