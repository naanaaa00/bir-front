import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ImageIcon from '@mui/icons-material/Image';



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
      navigete("/dashboard2");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className=" flex flex-col h-screen bg-hijau">
     <div className="bg-hijauCustom h-16">
    <Link to="/dashboard2">
        <ArrowBackIcon style={{ color: 'white',margin: '15px' }} />
    </Link>
</div>

      <div className="self-center h-screen">
        <div className="bg-custom border-2 border-neutral-400  w-35vw self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl">
          <p className=" bg-red-900">{msg}</p>
          <form onSubmit={updateBook}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tittle" className="input w-full mb-6" />
            <textarea value={summary} onChange={(e) => setSummary(e.target.value)} className="h-44 textarea textarea-bordered w-full mb-6" placeholder="Summary"></textarea>
            <div className="p-2 flex sm:justify-around">
              {/* <label className="text-lg">Music</label>
              <input onChange={loadMusic} type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3" /> */}
              <div className="relative">
        <MusicNoteIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 " />
        <input
          type="file"
          onChange={loadMusic}
          className="file-input file-input-bordered file-input-xs w-full max-w-xs pl-10"
        />
      </div>
              {/* <label className="text-lg">Image</label>
              <input onChange={loadImage} type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" /> */}
              <div className="relative w-full max-w-xs">
        <ImageIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 " />
        <input
          type="file"
          onChange={loadImage}
          className="file-input file-input-bordered file-input-xs w-full pl-10"
        />
      </div>
              {preview && <img src={preview} alt="preview" className="w-20 h-20" />}
            </div>
            <div className="flex justify-center mt-8">
              <button className="border-2 border-hijauCustom justify-self-center font-bold hover hover:border-hijauCustom hover:text-white-A700 hover:bg-hijauCustom rounded-lg p-2" type="submit">
                Edit!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
