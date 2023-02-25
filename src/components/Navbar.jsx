// import React from "react";

// function Navbar() {
//   return (
//     <header className="flex flex-row justify-between p-4 bg-slate-300">
//       <h1 className="flex items-center font-heebo text-4xl font-extrabold">Edie</h1>
//       <nav className="flex sm:justify-center space-x-4">
//         {[
//           ["Home", "#"],
//           ["Services", "#"],
//           ["Our Works", "#"],
//           ["Clients", "#"],
//           ["Contact", "#"],
//         ].map(([title, url]) => (
//           <a
//             href={url}
//             className="font-poppins rounded-lg px-3 py-2 text-slate-700 font-medium text-2xl hover:bg-slate-100 hover:text-slate-900"
//           >
//             {title}
//           </a>
//         ))}
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
import React, {useState} from "react";

function Navbar() {

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="font-heebo text-4xl font-bold">Edie</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="font-poppins font-medium	text-2xl items-center gap-5 justify-center space-y-8 md:flex max-md:flex max-md:flex-col max-md:justify-center mx-d:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Services</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Our Works</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Clients</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
