import React from "react";
import { Navbar } from "../navbar/Navbar";
import axios from "axios";

export const DeleteBook = () => {
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/books/${id}`);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="border-2 border-indigo-600 self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl">
        <form action={deleteBook}>
          <input type="text" placeholder="ID Book" value={id} class="self-start input w-2/4 mr-6" />
          <button className="-mr-12 border-2 border-indigo-600 rounded-lg p-4  ">Submit!</button>
        </form>
      </div>
    </div>
  );
};
