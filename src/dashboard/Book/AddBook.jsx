import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

export const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setMusic] = useState("");
  const [fileImage, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  const loadMusic = (e) => {
    const music = e.target.files[0];
    setMusic(music);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("file", file);
    formData.append("fileImage", fileImage);
    try {
      await axios.post("http://localhost:8080/books", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data has been sent successfully.",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className=" flex flex-col h-screen ">
      <Navbar />
      <div className="bg-neutral-100 border-2 border-neutral-400 h-55vh w-35vw self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl">
        <form onSubmit={handleSubmit}>
          <p className=" bg-red-900">{msg}</p>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="input w-full mb-6 p-8" />
          <textarea value={summary} name="summary" onChange={(e) => setSummary(e.target.value)} className="textarea textarea-warning w-full mb-6 h-32" placeholder="Summary"></textarea>
          <div className="p-2 flex sm:justify-around">
            <label className="text-lg">Music</label>
            <input type="file" onChange={loadMusic} className="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3" />
            <label className="text-lg">Image</label>
            <input type="file" onChange={loadImage} className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
            {preview && <img src={preview} alt="preview" className="w-20 h-20" />}
          </div>
          <div className="grid justify-items-stretch mt-8">
            <button type="submit" className="justify-self-center font-bold hover hover:border-neutral-600 hover:text-white-A700 hover:bg-neutral-600 rounded-lg p-2">
              Submit!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
