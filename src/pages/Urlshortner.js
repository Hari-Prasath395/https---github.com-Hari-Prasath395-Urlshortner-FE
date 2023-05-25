import React, { useEffect, useState } from "react";
import axios from "axios";
// import BackgroundAnimation from "../BackgroundAnimation";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import NavBar from "../components/Navbar";

const Urlshortener = () => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/createShortUrl", {
        longUrl: value
      });
      const { shortUrl } = response.data.data;
      setShortenLink(`http://localhost:3000/${shortUrl}`);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [copied]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleCopy = () => {
    setCopied(true);
  }

  return (
    <div>  <NavBar/>
    <div className="inputContainer">
      
      {/* <BackgroundAnimation /> */}
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste link to shorten"
          value={value}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Shrink</button>
      </div>
      <div className="result">
        <p>{shortenLink}</p>
        <CopyToClipboard text={shortenLink} onCopy={handleCopy}>
          <button className={copied ? "copied" : ""}>Copy</button>
        </CopyToClipboard>
      </div>
    </div>
    </div>
  );
};

export default Urlshortener;
