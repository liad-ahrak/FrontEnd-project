import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'
const jwt = require('jsonwebtoken')

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const tokenLogin =  req.cookies.tokenLogin;
  if (!tokenLogin) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }
  const data = jwt.decode(tokenLogin);
  const drafts = await prisma.post.findMany({
    where: {
      author: { email: data?.email}, //session.user?.email
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { drafts },
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  // const {data: session}= useSession();
  
  // if (!tokenLogin) {
  //   return (
  //     <Layout>
  //       <h1>My Drafts</h1>
  //       <div>You need to be authenticated to view this page.</div>
  //       <video src={"https://res.cloudinary.com/dsvjhuk25/video/upload/v1686492040/You_are_teasing_me_Naughty_Naughty_i9d4aw.mp4"} autoPlay />
  //     </Layout>
  //   );
  // }

  return (
    <Layout>
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Drafts;
