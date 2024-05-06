import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export const EditBook = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [music, setMusic] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const navigete = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getBookById = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/books/${id}`);
        setTitle(response.data.title);
        setSummary(response.data.summary);
        setMusic(response.data.music);
        setImage(response.data.image);
        setPreview(response.data.url);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getBookById();
  }, [id]);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  const loadMusic = (e) => {
    const music = e.target.files[0];
    setMusic(music);
  };

  const updateBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("file", music);
    formData.append("fileImage", image);
    try {
      await axios.patch(`http://localhost:8080/books/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data has been sent successfully.",
      });
      navigete("/deleteBook");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="self-center h-screen">
        <div className="border-2 border-indigo-600 h-sc w-35vw self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl">
          <p className=" bg-red-900">{msg}</p>
          <form onSubmit={updateBook}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tittle" className="input w-full mb-6" />
            <textarea value={summary} onChange={(e) => setSummary(e.target.value)} className="textarea textarea-warning w-full mb-6" placeholder="Summary"></textarea>
            <div className="p-2 flex sm:justify-around">
              <label className="text-lg">Music</label>
              <input onChange={loadMusic} type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3" />
              <label className="text-lg">Image</label>
              <input onChange={loadImage} type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
              {preview && <img src={preview} alt="preview" className="w-20 h-20" />}
            </div>
            <div className="flex justify-center mt-8">
              <Link to={`/deleteBook`} className=" hover hover:bg-indigo-600 justify-self-center border-2 border-indigo-600 rounded-lg p-2 mr-10">
                Back
              </Link>
              <button className="hover hover:bg-indigo-600  justify-self-center border-2 border-indigo-600 rounded-lg p-2 " type="submit">
                Edit!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
