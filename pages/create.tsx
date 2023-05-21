import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { useSession } from "next-auth/react";
import { useRef , useEffect} from "react";
import { Spinner } from "../components/Spinner";
import mongoose from 'mongoose';

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data: session, status } = useSession();  
  const formData = new FormData();
  
  const [showSpinner, setShowSpinner] = useState(false);
  // const [videoPublicId, setPublicId] = useState("");
  // const [postId, setPostId] = useState("");

  
  //mongoDB part
  // const mongoose = require('mongoose');
  const url = 'mongodb+srv://Lihiad:Lihiad@lihiad.vkfaddd.mongodb.net/?retryWrites=true&w=majority';
  mongoose.set('strictQuery', false)
  mongoose.connect(url)
  const noteSchema = new mongoose.Schema({
    user: String,
    date_uploaded: Date,
    post_id: Number,
    video_Link: String
  });
  const MetaData = mongoose.model('MetaData', noteSchema);

  
  const onChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    formData.append('inputFile', file);
  };

  let email = session?.user?.email;
  const submitData = async (e: React.SyntheticEvent) => {
    // setShowSpinner(true);
    e.preventDefault();
    try {
      const body = { title, content, session, email };
      const responsePost = await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await responsePost.json();
      // setPostId(data.id);
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
    if(formData.has('inputFile')){
      try {
        const responseVideo = await fetch("/api/upload", {
          method: "POST",
          body: formData
        });
        const data = await responseVideo.json();
        // setPublicId(data.public_id);
      } catch (error) {
        // setShowSpinner(false);
      } finally {
        // setShowSpinner(false);
        // setShowVideo(true);
      }
    }

    // try{
    //   const d = new Date();

    //   const metaDate = new MetaData({
    //     user: session?.user?.name,
    //     date_uploaded: d.getDate(),
    //     post_id: postId,
    //     video_Link: `https://res.cloudinary.com/dsvjhuk25/video/upload/v1684678468/${videoPublicId}.mp4`
    //   });
    // }catch (error) {
    // }
    
  };

  return (
    <Layout>
      <div>
        <Spinner displayed={showSpinner} />
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            autoFocus
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
      `}</style>
    </Layout>
  );
};


export default Draft;