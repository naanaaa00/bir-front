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
    <div className='overflow-x-auto overflow-auto border-2 border-indigo-600 self-center p-8 rounded-3xl md:justify-center my-14 shadow-2xl h-full'>
      <table class="table">
      <thead>
      <tr>
        <th>bookID</th>
        <th>tittle</th>
        <th>summary</th>
      </tr>
      </thead>
      <tbody>
      <tr className=''>
        <th></th>
        <td></td>
        <td></td>
        <td><button className='hover hover:bg-indigo-600 rounded-lg border-2 border-indigo-600 p-2'>delete</button></td>
      </tr>
    </tbody>
    </table>
  </div>
  </div>
  );
};
