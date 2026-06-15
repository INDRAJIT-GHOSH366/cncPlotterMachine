import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { serverUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
import LineWaves from "../components/LineWaves";


function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignIn();
  };

  const handleSignIn = async () => {
    try {
      setError("");

      if (!formData.email || !formData.password) {
        setError("Please fill in all fields");
        return;
      }

      setLoading(true);

      const result = await axios.post(
        `${serverUrl}/api/auth/signin`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(setUserData(result.data));

  

      navigate("/");
    } catch (error) {
      console.error("Signin Error:", error);

      setError(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.1}
         color1="#1D0050"
         color2="#877889"
          color3="#ffffff"
        />
      </div>

      {/* Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">

        <div className="w-full max-w-md p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Welcome Back
            </h2>

            <p className="mt-3 text-gray-400">
              Sign in to your account
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 p-3 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl">
              {error}
            </div>
          )}

          {/* Form */}
          <form
            className="mt-8 space-y-5"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              <div className="flex justify-end mt-3">
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signUp"
              className="text-white font-medium hover:text-gray-300"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignIn;