import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';


export const AddPages = () => {
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
  const [storytext, setStorytext] = useState("");
  const [image, setImage] = useState("");
  // const [relatedBookId, setRelatedBookId] = useState("");
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState("");
  const { bookid } = useParams();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("storytext", storytext);
    formData.append("fileImage", image);
    try {
      await axios.post(`http://localhost:8080/pages/${bookid}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data has been sent successfully.",
      });
      navigate("/dashboard2");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className=" flex flex-col bg-hijau h-screen">
     <div className="bg-hijauCustom h-16">
    <Link to="/dashboard2">
        <ArrowBackIcon style={{ color: 'white',margin: '15px' }} />
    </Link>
</div>
      <div className="bg-neutral-100 border-2 border-neutral-400  w-35vw self-center p-8 rounded-3xl md:justify-center shadow-2xl mt-12">
        <p className=" bg-red-900">{msg}</p>
        <form onSubmit={handleSubmit}>
          <textarea value={storytext} name="storytext" onChange={(e) => setStorytext(e.target.value)} className="textarea textarea-bordered w-full mb-6 h-80" placeholder="Summary"></textarea>
          <div className="p-2 flex flex-col sm:flex-row sm:justify-around">
            <input type="text" name="relatedBookId" className="font-bold file-input file-input-bordered file-input-xs w-full max-w-xs mr-3 mb-6" value={bookid} placeholder="relatedBookId" readOnly />
          
            <div className="relative w-full max-w-xs">
    <div className="absolute left-2 flex items-center">
        <ImageIcon  />
    </div>
    <input
        type="file"
        onChange={loadImage}
        className="file-input file-input-bordered file-input-xs w-full pl-10"
    />
</div>

            {preview && <img src={preview} alt="preview" className="w-20 h-20" />}
          </div>
          <div className="grid justify-items-stretch mt-8">
            <button className=" border-2 border-hijauCustom justify-self-center font-bold hover hover:border-hijauCustom hover:text-white-A700 hover:bg-hijauCustom rounded-lg p-2" type="submit">
              Submit!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
