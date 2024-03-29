// import Login from "./componens/Login";

// export default function LoginPage() {
//   const Bg = "url('')";

//   return (
//     <div className="text-white h-[100vh] flex justify-center items-center bg-cover" style={{ background: Bg }}>
//       <Login />
//     </div>
//   );
// }

import Login from "./componens/Login"; // assuming the correct path to the Login component
import bg1 from "./assets/bg1.jpg"; // import the background image

export default function LoginPage() {
  const bgStyle = {
    backgroundImage: `url(${bg1})`, // using template literal to set the background image URL
  };

  return (
    <div className=" text-white-A700 h-[100vh] flex justify-center items-center bg-cover" style={bgStyle}>
      <Login />
    </div>
  );
}
