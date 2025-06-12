import React from "react";
//import coding from "./../assets/coding.png";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className=" bg-white w-1/3 flex flex-col mx-auto mt-40 text-center gap-2 rounded py-8 px-2 min-w-min">
        <p className="pb-4">Join Coders Now!</p>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <input
            placeholder="Email"
            className=" bg-[#23155b]  rounded py-1 text-white placeholder:p-1"
          />
          <input
            className=" bg-[#23155b]  rounded py-1 text-white placeholder:p-1"
            type="text"
            placeholder="Password"
          />
          <button type="submit" className="bg-blue-600 rounded">
            Login
          </button>
        </form>
        <div>
          <p>
            New to CodeCLA? <Link href="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
}
