import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiExternalLinkLine, RiDeleteBinLine } from "react-icons/ri";
import NavBar from "../components/Navbar";

const ShortUrlLink = ({ url }) => {
  const handleLinkClick = () => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <a href={url} onClick={handleLinkClick}>
      {url} <RiExternalLinkLine />
    </a>
  );
};

const URLTable = () => {
  const [urls, setUrls] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/urls");
        const urlsData = response.data;
        setUrls(urlsData);
      } catch (error) {
        console.error("Error fetching URLs:", error);
        setError("Error fetching URLs. Please try again.");
      }
    };

    fetchUrls();
  }, [deleteSuccess]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this URL?"
    );
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:8000/api/${id}`);
      setUrls(urls.filter((url) => url._id !== id));
      setDeleteSuccess(true);
    } catch (error) {
      console.error("Error deleting URL:", error);
      setError("Error deleting URL. Please try again.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container table-responsive">
        {deleteSuccess && (
          <div className="alert alert-success" role="alert">
            URL deleted successfully!
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <h4 className="text-center">Created URLs</h4>
        <table className="table table-bordered table-hover">
          <thead className="bg-success text-white">
            <tr>
              <th>Original URL</th>
              <th>Shortened URL</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url._id}>
                <td>{url.longUrl}</td>
                <td>
                  <ShortUrlLink url={`http://localhost:3000/${url.shortUrl}`} />
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(url._id)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default URLTable;
