import React, { useState, Suspense, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import Cookies from "universal-cookie";
const jwt = require('jsonwebtoken')
// import { useSession } from "next-auth/react";
import ClipLoader from 'react-spinners/ClipLoader';

const getCookie = () => {
  const cookies = new Cookies();
  return jwt.decode(cookies.get('tokenLogin'));
}

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const { data: session, status } = useSession();  
  const [disabledFile, setDisableFile] = useState(false);
  const [srcVideo, setSrcVideo] = useState<File | null>(null);
  const cookies = new Cookies();
  
  const [showSpinner, setShowSpinner] = useState(false);
  let videoURL = "";
  let postId = "";
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current){
      ref.current.focus();
    }
  },[]);

  const onChange = async (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];
    setSrcVideo(file);
    // formData.append('inputFile', file);
  };
  const token = jwt.decode(cookies.get('tokenLogin'));
  let email = token?.email;//session?.user?.email;
  const submitData = async (e: React.SyntheticEvent) => {
    setShowSpinner(true);
    e.preventDefault();
    try {
      const body = { title, content,  email };//session,
      const responsePost = await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await responsePost.json();
      postId = data.id;
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }


    if(srcVideo){//formData.has('inputFile'
      const formData = new FormData();
      formData.append('inputFile', srcVideo);
      try {
        const responseVideo = await fetch("/api/upload", {
          method: "POST",
          body: formData
        });
        const data = await responseVideo.json();
        console.log('return data',data)
        videoURL = data;//`https://res.cloudinary.com/dsvjhuk25/video/upload/h_150,w_200/${data}.mp4`;
      } catch (error) {
        setShowSpinner(false);
      } finally {
        setShowSpinner(false);
        // setShowVideo(true);
      }
  
      // upload to mongoDB
      try{
        const videoMetadata = {
          user: token?.name,
          dateUploaded: new Date(),
          postId: postId, 
          cloudinaryLink: videoURL, 
        };
        const metadataResponse = await fetch("/api/uploadDB", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(videoMetadata),
        });
      } catch (error) {
        setShowSpinner(false);
      } finally {
        setShowSpinner(false);
        // setShowVideo(true);
      };
    }
  };

  return (
    <Layout>
      {!showSpinner ?
        <div>
          <form onSubmit={submitData}>
            <h1>New Draft</h1>
            <input
              ref={ref}
              // autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
            />
            <textarea
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={8}
              value={content}
            />
            <input 
              type="file"
              onChange={onChange}//{(e) => setVideo(e.target.value)}
              accept="video/*"
              // disabled = {disabledFile}
              // placeholder="Video"
              // id="video" 
              // name="video" 
              // value={video}
            />
            <br/>
            <br/>
            <input disabled={!content || !title} type="submit" value="Create" />
            <a className="back" href="#" onClick={() => Router.push("/")}>
              or Cancel
            </a>
          </form>
        </div>
        :
        <div className="uploading_spinner">
          <h1>uploading</h1>
          <ClipLoader color={'#fff'} size={150}/>
          
        </div>
        
      }
      
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }

        .uploading_spinner{
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};


export default Draft;