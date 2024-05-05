import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const AddPages = () => {
  const [storytext, setStorytext] = useState("");
  const [image, setImage] = useState("");
  const [relatedBookId, setRelatedBookId] = useState("");
  const [msg, setMsg] = useState("");
  const { bookid } = useParams();

  const navigate = useNavigate();

  const handelsubmit = async (e) => {
    e.prevendefault();
    try {
      await axios.post(`http://localhost:8080/pages/${bookid}`, {
        storytext,
        image,
        relatedBookId,
      });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data has been sent successfully.",
      });
      navigate("/deletePages");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="border-2 border-indigo-600 h-45vh w-35vw self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl">
        <p className=" bg-red-900">{msg}</p>
        <form onSubmit={handelsubmit}>
          <textarea value={storytext} onChange={(e) => setStorytext(e.target.value)} className="textarea textarea-warning w-full mb-6" placeholder="Summary"></textarea>
          <div className="p-2 flex flex-col sm:flex-row sm:justify-around">
            <input type="text" className="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3 mb-6" value={bookid} onChange={(e) => setRelatedBookId(e.target.value)} placeholder="relatedBookId" readOnly />
            <label className="text-lg">Image</label>
            <input type="file" value={image} onChange={(e) => setImage(e.target.value)} className="file-input file-input-bordered file-input-xs w-full max-w-xs mr-3" />
          </div>
          <div className="grid justify-items-stretch mt-8">
            <button className="justify-self-center border-2 border-indigo-600 rounded-lg p-2" type="submit">
              Submit!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
