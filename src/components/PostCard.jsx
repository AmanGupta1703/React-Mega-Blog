import React from "react";

import { Link } from "react-router-dom";

import appwriteService from "../appwrite/config";

// $id => id for the post
// featuredImage => the image id for the post
const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl bg-gray-100 p-4">
        <div className="mb-4 w-full justify-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
