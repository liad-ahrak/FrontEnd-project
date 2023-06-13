import React, { ChangeEvent, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Link from "next/link";
const jwt = require('jsonwebtoken')
import Cookies from "universal-cookie";


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const myToken = req.cookies.tokenLogin;
    const data = jwt.decode(myToken)
    return {
        props: { data },
    };
};

export type DecodeToken = {
    data :{
        id: number;
        email: string;
        name: string;
        username: string;
        photo: string;
  };
}


const Profile: React.FC <DecodeToken> = (props) => {
    const [imageUrl, setImageUrl] = useState(props.data?.photo);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cookies = new Cookies();
    const userId = props.data?.id;
    const image_src = imageUrl ? imageUrl : "https://res.cloudinary.com/dsvjhuk25/image/upload/v1686493759/profileImage_dufqya.png"
    const shoot = async (e : React.SyntheticEvent) => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }
    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        let photo = null;
        
        if (file) {
            const formData = new FormData();
            formData.append('inputFile', file);
            try {
                const responsePhoto = await fetch("/api/uploadPhoto", {
                method: "POST",
                body: formData
                });
                const data = await responsePhoto.json();
                photo = data;
            } catch (error) {
                console.error(error);
            }
            // alert("userId is " + userId + " andit undefined? " + (userId === undefined))
            if(photo){
                try{
                    const body = {userId, photo};
                    const responsePost = await fetch(`/api/changeProfileP`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body),
                    });
                    
                    const data = await responsePost.json();
                    cookies.set('tokenLogin', data.token);
                    setImageUrl(photo);
                }catch(error){    
                    console.error(error);
                }
            }
        }
      };
    return(
        <Layout>
            <div className="profile">
            {/* <img className="profile-picture" src={image_src} alt="Profile" /> */}
            <input type="file" id="file" onChange={handleFileChange} accept="image/*" ref={fileInputRef} style={{ display: 'none' }}/>
            <button className="profile-button" onClick={shoot} >
                <img className="profile-picture" src={image_src} alt="Profile" />
            </button>
            <h2 className="name">{props.data?.name}</h2>
            <p className="email">{props.data?.email}</p>
            <p className="username">{props.data?.username}</p>
            <style jsx>{`
                .profile-button {
                    border: none;  
                    background-color: transparent;
                }
                .profile {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                }
                
                .profile-picture {
                width: 200px;
                height: 200px;
                object-fit: cover;
                border-radius: 50%;
                }
                
                .name {
                font-size: 24px;
                margin-top: 20px;
                }
                
                .email,
                .username {
                font-size: 16px;
                margin-top: 10px;
                }
            `}</style>
            </div>
        </Layout>
    );
    };

export default Profile;