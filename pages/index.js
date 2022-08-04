import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const DURATION = "permanent";
  const SCOPE = "identity edit flair history read vote wikiread wikiedit";
  const REDIRECT_URI = "http://localhost:3000/profile";
  const RANDOM_STRING = "randomestringhere";
  const RESPONSE_TYPE = "code";
  const CLIENT_ID = "";
  const CLIENT_SECRET = "";

  const URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}`;
  return (
    <div className="sign-in">
      <div>
        <h1>Welcome to Reddit OAuth demo</h1>
        <p>Sign in to continue!</p>
      </div>
      <a
        style={{
          margin: "20px",
          background: "red",
          color: "#FFFFFF",
          borderRadius: "3px",
          padding: "8px",
        }}
        href={URL}
      >
        Sign in with Reddit
      </a>
    </div>
  );
}
