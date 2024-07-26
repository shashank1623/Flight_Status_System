import { Link } from "react-router-dom";
import { useState } from "react";
export const Auth = ({ type }) => {
    // const [loading, setLoading] = useState(false);
    const [postInputs, setPostInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    // async function sendRequest() {
    //     setLoading(true);
    //     // try {
    //     //     const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
    //     //     const token = response.data.jwt;
    //     //     const BearerToken = `Bearer ${token}`;
    //     //     localStorage.setItem("token", BearerToken);
    //     //     navigate("/blogs");
    //     // } catch (e) {
    //     //     // Handle error here
    //     //     console.log(e);
    //     // } finally {
    //     //     setLoading(false);
    //     // }
    // }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            {type === "signup" ? "Create an account" : "Sign in to your account"}
                        </div>
                        <div className="text-slate-500">
                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        {type === "signup" && 
                            <LabelledInput 
                                label="Name" 
                                placeholder="John Doe" 
                                onChange={(e) => {
                                    setPostInputs({
                                        ...postInputs,
                                        name: e.target.value
                                    });
                                }} 
                            />
                        }
                        <LabelledInput 
                            label="Email" 
                            placeholder="johndoe@gmail.com" 
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value
                                });
                            }} 
                        />
                        <LabelledInput 
                            label="Password" 
                            type="password" 
                            placeholder="123456" 
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                });
                            }} 
                        />
                        <button 
                            //onClick={sendRequest} 
                            type="button" 
                            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" 
                            //disabled={loading}
                        >
                            {type === "signup" ? "Sign up" : "Sign in"}
                            {/* {loading ? <Spinner /> : (type === "signup" ? "Sign up" : "Sign in")} */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


function LabelledInput({ label, placeholder, onChange, type }) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input 
                onChange={onChange} 
                type={type || "text"} 
                //id="input" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder={placeholder} 
                required 
            />
        </div>
    );
}
