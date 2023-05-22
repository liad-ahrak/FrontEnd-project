import React, { useState, Suspense } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { useSession } from "next-auth/react";
import ClipLoader from 'react-spinners/ClipLoader';

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data: session, status } = useSession();  
  const [disabledFile, setDisableFile] = useState(false);
  const formData = new FormData();
  
  const [showSpinner, setShowSpinner] = useState(false);
  let videoURL = "";
  let postId = "";


  const onChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    formData.append('inputFile', file);
  };

  let email = session?.user?.email;
  const submitData = async (e: React.SyntheticEvent) => {
    setShowSpinner(true);
    e.preventDefault();
    try {
      const body = { title, content, session, email };
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


    if(formData.has('inputFile')){
      
      
      try {
        const responseVideo = await fetch("/api/upload", {
          method: "POST",
          body: formData
        });
        const data = await responseVideo.json();
        videoURL = data;
      } catch (error) {
        setShowSpinner(false);
      } finally {
        setShowSpinner(false);
        // setShowVideo(true);
      }
    }

    // upload to mongoDB
    try{
      const d = new Date();
      let user = session?.user?.name
      let date_uploaded = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
      let post_id = postId
      let video_Link = videoURL
      const body = {user, date_uploaded}//, post_id, video_Link }
      const responseDB = await fetch("/api/uploadDB", {
        method: "POST",
        body:  JSON.stringify(body),
      });
      const data = await responseDB.json();
    } catch (error) {
      setShowSpinner(false);
    } finally {
      setShowSpinner(false);
      // setShowVideo(true);
    };
    
  };

  return (
    <Layout>
      {!showSpinner ?
        <div>
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