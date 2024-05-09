import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/index";

const User = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userData = useSelector((state) => state.user.users);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddUser = () => {
    const userData = {
      name: name,
      email: email,
    };
    dispatch(actionCreators.addUser(userData));
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="flex h-[60vh] w-[100vw] justify-center items-center">
        <div className="grid bg-slate-400 justify-items-center h-56 w-72 justify-center border border-black rounded-lg">
          <h1 className="font-bold text-lg">Add User</h1>
          <input
            type="text"
            placeholder="Enter User Name"
            className="border-black border h-1/2"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Enter User Email"
            className="border-black border h-1/2"
            value={email}
            onChange={handleEmailChange}
          />

          <button
            className="bg-blue-600 h-10 border rounded-lg p-1"
            onClick={handleAddUser}
          >
            Add
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto flex justify-center ">
        <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((data) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <td className="px-6 py-4">{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
