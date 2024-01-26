import React from "react";
import logo from "../Img/logo.jpeg";
export default function NavBar() {
    return (
        <div>
            <nav class="bg-white border-gray-200 text-black">
                <div class="max-w-screen-xl flex items-center mx-4 gap-x-5 p-1">
                    <img src={logo} className="w-16"></img>
                    <h2 className="text-2xl tracking-wider font-poppins">FarmwiseAI</h2>
                </div>
            </nav>
        </div>
    )
}