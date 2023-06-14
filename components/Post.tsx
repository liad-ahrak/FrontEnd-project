//components/post
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState ,Suspense} from "react";
import { FaVideo } from "react-icons/fa";
import ClipLoader from 'react-spinners/ClipLoader';

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
    photo: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const noImage = "https://res.cloudinary.com/dsvjhuk25/image/upload/v1686493759/profileImage_dufqya.png"
  const authorName = post.author ? post.author.name : "Unknown author";
  // const authorEmail = post.author ? post.author.email ? post.author.email : "I don't have email" : "Unknown email";
  const authorPhoto = post.author ? post.author.photo ? post.author.photo : noImage: noImage ;
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
    <Suspense fallback={<ClipLoader color={'#fff'} size={150}/>}>
      <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
        <h2><img className="profile-picture" src={authorPhoto} alt="Profile" />{videoSrc && <FaVideo/>}{post.title}</h2>
        <small>By {authorName}</small>
        {/* <p>{authorEmail}</p> */}
        <ReactMarkdown children={post.content} />
        {/* <video src="https://res.cloudinary.com/dsvjhuk25/video/upload/v1684854201/1684854201663.mp4" controls /> */}
        {videoSrc && <video src={videoSrc} controls />}
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
          .profile-picture {
            width: 35px;
            height: 35px;
            object-fit: cover;
            border-radius: 50%;
            }
          // #light {
          //   background: rgba(0, 0, 0, 0.05);
          // }
          // #dark  {
          //   background: rgba(0, 0, 0, 0.55);
          // }
        `}</style>
      </div>
    </Suspense>
  );
};

export default Post;