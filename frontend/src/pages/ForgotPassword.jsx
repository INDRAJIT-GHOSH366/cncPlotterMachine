import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LineWaves from "../components/LineWaves";
import { ClipLoader } from "react-spinners";
import { serverUrl } from "../App";
import { Eye, EyeOff } from "lucide-react";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = async () => {
    setLoading(true);
    setErr("");

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/send-otp`,
        { email },
        { withCredentials: true },
      );

      
      setStep(2);
    } catch (error) {
      console.log("Backend error message:", error);
      setErr(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setErr("");

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/verify-otp`,
        { email, otp },
        { withCredentials: true },
      );

    
      setStep(3);
    } catch (error) {
      console.log("Backend error message:", error.response?.data);
      setErr(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setErr("");

    if (newPassword !== confirmPassword) {
      setErr("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/reset-password`,
        { email, newPassword },
        { withCredentials: true },
      );


      navigate("/signin");
    } catch (error) {
      console.log("Backend error message:", error.response?.data);
      setErr(error.response?.data?.message || "Failed to reset password");
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

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <IoIosArrowRoundBack
              className="text-white text-5xl cursor-pointer hover:text-gray-300 transition"
              onClick={() => navigate("/signin")}
            />

            <div>
              <h1 className="text-3xl font-bold text-white">Forgot Password</h1>

              <p className="text-gray-400 mt-1">Reset your account password</p>
            </div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendOtp();
                  }
                }}
              />

              <button
                onClick={handleSendOtp}
                disabled={loading}
                className="w-full mt-5 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-50"
              >
                {loading ? (
                  <ClipLoader size={20} color="#000000" />
                ) : (
                  "Send OTP"
                )}
              </button>

              {err && (
                <div className="p-3 mt-4 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl">
                  {err}
                </div>
              )}
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Enter OTP
              </label>

              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
              />

              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="w-full mt-5 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-50"
              >
                {loading ? (
                  <ClipLoader size={20} color="#000000" />
                ) : (
                  "Verify OTP"
                )}
              </button>

              {err && (
                <div className="p-3 mt-4 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl">
                  {err}
                </div>
              )}
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                New Password
              </label>

              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter New Password"
                  className="w-full px-4 py-3 pr-12 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <label className="block text-sm font-medium text-gray-300 mt-5 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 pr-12 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              <button
                onClick={handleResetPassword}
                disabled={loading}
                className="w-full mt-5 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-50"
              >
                {loading ? (
                  <ClipLoader size={20} color="#000000" />
                ) : (
                  "Reset Password"
                )}
              </button>

              {err && (
                <div className="p-3 mt-4 text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl">
                  {err}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
