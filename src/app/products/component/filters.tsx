import React from 'react';

const Filters = () => {
  return (
    <div>
      <div className="w-[1440px] h-[64px] flex items-center">
        <ul className="flex space-x-10">
          <li>
            <select className="p-2 border rounded hover:bg-blue-950 hover:text-white">
              <option value="">Category</option>
              <option value="electronics">Dandy chairs</option>
              <option value="fashion">Vases</option>
              <option value="home">Lucy Lamps</option>
            </select>
          </li>

          <li>
            <select className="p-2 border rounded hover:bg-blue-950 hover:text-white">
              <option value="">Products</option>
              <option value=" Furniture"> Furniture</option>
              <option value="Sofas"> Sofas</option>
              <option value="Light fittings">Light fittings</option>
              <option value="Accessories">Accessories</option>
            </select>
          </li>
         
          



          <li>
            <select className="p-2 border rounded hover:bg-blue-950 hover:text-white">
              <option value="">Price</option>
              <option value=" 0 - 100"> 0 - 100</option>
              <option value="101 - 250">101 - 250</option>
              <option value="250 +">250 +</option>
            </select>
          </li>
          <li>
            <select className="p-2 border rounded hover:bg-blue-950 hover:text-white">
              <option value="">Brand</option>
              <option value="nike">Nike</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
            </select>
          </li>
          <li>
            <select className=" mx-[620px] pt-2 hover:bg-blue-950 hover:text-white">
              <option value="">Date Added</option>
              </select>
              </li>

        </ul>
      </div>
    </div>
  );
};

export default Filters;
