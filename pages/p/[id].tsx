import React, { Suspense, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import prisma from '../../lib/prisma'
// import { useSession } from "next-auth/react";
import { FaVideo } from "react-icons/fa";
import ClipLoader from 'react-spinners/ClipLoader';
import Cookies from 'universal-cookie';
const jwt = require('jsonwebtoken')

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post ?? { author: { name: "Me" } }
  };
};

async function publishPost(id: number): Promise<void> {
  console.log(`Publish post: ${id}`);
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  
  await Router.push("/")
}

async function deletePost(id: number): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/")
}

const Post: React.FC<PostProps> = (props) => {
  const [cookieState, setCookieState] = useState(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [rerenderKey, setRerenderKey] = useState(0);
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(`/api/uploadDB?postId=${props.id}`);
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
  }, [props.id]);

  // const { data: session, status } = useSession();
  // if (status === 'loading') {
  //   return <div>Authenticating ...</div>;
  // }
  const cookies = new Cookies();
  const tokenLogin =  cookies.get('tokenLogin')// ||  props.token;
  const getToken = (tokenLogin: string | null ) => {
    try{
      return jwt.decode(tokenLogin, process.env.SECRET);
    }
    catch (error) {
      return undefined;
    }
  }
  const verToken = getToken(tokenLogin);
  useEffect(() => {
    setCookieState(getToken(tokenLogin));}, []);
  
  const userHasValidSession = Boolean(cookieState);
  const postBelongsToUser = cookieState?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  

  return (
    <Suspense fallback={<ClipLoader color={'#fff'} size={150}/>}>
      <Layout>
        <div>
          <h2>{videoSrc && <FaVideo/>} {title}</h2>
          <p>By {props?.author?.name || "Unknown author"}</p>
          <ReactMarkdown children={props.content} />
          {videoSrc && <video src={videoSrc} controls />}
          <br/>
          {!props.published && userHasValidSession && postBelongsToUser && (
            <button onClick={() => publishPost(props.id)}>Publish</button>
          )}
          {userHasValidSession && postBelongsToUser && (
            <button onClick={() => deletePost(props.id)}>Delete</button>
          )}
        </div>
        <style jsx>{`
          .page {
            background: white;
            padding: 2rem;
          }

          .actions {
            margin-top: 2rem;
          }

          button {
            background: #ececec;
            border: 0;
            border-radius: 0.125rem;
            padding: 1rem 2rem;
          }

          button + button {
            margin-left: 1rem;
          }
        `}</style>
      </Layout>
    </Suspense>
  );
};

export default Post;
