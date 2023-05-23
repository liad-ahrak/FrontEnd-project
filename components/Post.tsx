//components/post
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [rerenderKey, setRerenderKey] = useState(0);


  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(`/api/uploadDB?postId=${post.id}`);
        if (res.ok) {
          const videoData = await res.json();
          setVideoSrc(videoData.cloudinaryLink);
          setRerenderKey(r => r+1);
        }
      } catch (error) {
        console.error("Error fetching video: ", error);
      }
    };

    fetchVideo();
  }, [post.id]);

  

  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{videoSrc && <FaVideo/>}{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content} />
      {/* <video src="https://res.cloudinary.com/dsvjhuk25/video/upload/v1684854201/1684854201663.mp4" controls /> */}
      {videoSrc && <video src={videoSrc} controls />}
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;