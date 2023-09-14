import "./input.css";
// hooks
import { useState } from "react";
// !redux
import { useDispatch } from "react-redux";
import { addingLocation } from "../Status/statusSlice";
export default function Input() {
  let [inputLocation, setInputLocation] = useState("");
  let dispatch = useDispatch();
  return (
    <>
      <div className="w-[88%] flex justify-between mb-3">
        <input
          type="text"
          onChange={(e) => {
            setInputLocation((inputLocation = e.target.value));
          }}
          className="text-[1.7rem] pl-7 h-[4rem] w-[83%] outline-none rounded-full"
        />
        <button
          onClick={() => {
            dispatch(addingLocation(inputLocation));
          }}
          className="bg-white h-[4rem] w-[4rem] rounded-full grid place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            style={{ fill: "#222121" }}
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
