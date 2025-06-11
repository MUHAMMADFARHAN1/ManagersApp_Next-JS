import React from "react";
import coding from "./../assets/coding.png";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="grid grid-cols-2 h-screen min-w-full">
      <div className=" bg-[#23155b] ">
        <Image src={coding} className="m-auto pt-35" alt="" />
      </div>
      <div className=" bg-[#f4f4f4] ">
        <div className=" bg-white w-1/3 flex flex-col mx-auto mt-40 text-center gap-2 rounded py-8 px-2 min-w-min">
          <p className="pb-4">Join Coders Now!</p>
          <form
            action=""
            className="flex flex-col gap-2"
            // onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              //   value={First}
              //   onChange={(e) => setFirstName(e.target.value)}
              className=" bg-[#23155b] rounded py-1 text-white placeholder:p-2"
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              //   value={Last}
              //   onChange={(e) => setLastName(e.target.value)}
              className=" bg-[#23155b] rounded py-1 text-white placeholder:p-2"
            />
            <input
              type="text"
              name="Email"
              placeholder="Email"
              //   value={Mail}
              //   onChange={(e) => setEmail(e.target.value)}
              className=" bg-[#23155b] rounded py-1 text-white placeholder:p-2"
            />
            {/* {errorMessageMail && (
              <div className="error">{errorMessageMail}</div>
            )} */}
            <input
              type="text"
              name="Password"
              placeholder="Password"
              //   value={Pass}
              //   onChange={(e) => setPassword(e.target.value)}
              className=" bg-[#23155b] rounded py-1 text-white placeholder:p-2"
            />
            {/* {errorMessagePass && (
              <div className="error">{errorMessagePass}</div>
            )} */}
            <button type="submit" className="bg-blue-600">
              Sign Up
            </button>
          </form>
          <div>
            <p>
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
