import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


function Privacyaccountsettings() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [newpassword, setNewpassword] = useState("");
  const [confirmnewpassword, setConfirmnewpassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [currentpassword,setCurrentpassword]=useState("")

  const validatePasswordStrength = (password) => {
    let error = "";
    if (password.length < 8) {
      error = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      error = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      error = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      error = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      error = "Password must contain at least one special character.";
    }
    return error;
  };

  const validatePasswordMatch = (newPass, confirmPass) => {
    if (newPass && confirmPass && newPass !== confirmPass) {
      setError("New password and confirm password do not match.");
    } else {
      setError("");
    }
  };

  const passwordchange = (e) => {
    const password = e.target.value;
    setNewpassword(password);

    const strengthError = validatePasswordStrength(password);
    setPasswordError(strengthError);

    if (!strengthError && confirmnewpassword) {
      validatePasswordMatch(password, confirmnewpassword);
    }
  };

  const confirmpasswordchange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmnewpassword(confirmPassword);
    validatePasswordMatch(newpassword, confirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && !passwordError && newpassword && confirmnewpassword) {
      console.log("Password successfully updated!");
      // Handle password update logic here
    }
  };

  const clearFields = () => {
    setNewpassword("");
    setConfirmnewpassword("");
    setCurrentpassword("");
    setError("");
    setPasswordError("");
  };

  const openDialog = () => setIsDialogOpen(true);
 

  return (
    <div className="flex flex-col gap-11">
      {/* Password Section */}
      <div className="flex justify-between">
        <div>
          <p className="text-[#1D2129] text-[20px] font-medium">Password</p>
          <p className="text-[#1D2129] text-[16px] font-normal">
            Change Your Password
          </p>
        </div>
        <div>
        <Dialog className="!border !rounded-md">
        <DialogTrigger asChild>
          <button
            onClick={openDialog}
            className="gap-[10px] bg-[#1D2129] rounded-[4px] text-[#FFFFFF] items-center px-4 py-2"
          >
            <span>Change Password</span>
          </button>
          </DialogTrigger>
          <DialogContent className="bg-white max-h-[90vh] overflow-y-auto border rounded-[32px]">
          <div className="flex flex-col gap-8">
        <div>
          <p className="text-[#165DFF] font-inter font-semibold 2xl:text-[32px] lg:text-[26px] md:text-[20px] sm:text-[14px]">
            Change Password
          </p>
          <p className="text-[16px] font-inter font-medium text-[#4E5969]">
            Create a new password
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Current Password */}
            <div>
              <label
                className="text-[16px] font-inter font-medium text-[#1D2129]"
                htmlFor="current-password"
              >
                Current Password
              </label>
              <input
                id="current-password"
                type="password"
                value={currentpassword}
                onChange={(e)=>{
setCurrentpassword(e.target.value)
                }}
                className="w-full border border-[#E5E6EB] rounded-[4px] px-[16px] py-[10px] placeholder:text-[#86909C] text-[14px] font-normal font-inter"
                placeholder="Type current password"
                required
              />
            </div>

            {/* New Password */}
            <div>
              <label
                className="text-[16px] font-inter font-medium text-[#1D2129]"
                htmlFor="new-password"
              >
                New Password
              </label>
              <input
                id="new-password"
                type="password"
                value={newpassword}
                onChange={passwordchange}
                className={`w-full border border-[#E5E6EB] rounded-[4px] px-[16px] py-[10px] placeholder:text-[#86909C] text-[14px] font-normal font-inter ${
                  passwordError ? "border-red-500" : ""
                }`}
                placeholder="Type your new password"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="text-[16px] font-inter font-medium text-[#1D2129]"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmnewpassword}
                onChange={confirmpasswordchange}
                className={`w-full border border-[#E5E6EB] rounded-[4px] px-[16px] py-[10px] placeholder:text-[#86909C] text-[14px] font-normal font-inter ${
                  error ? "border-red-500" : ""
                }`}
                placeholder="Confirm new password"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex gap-[12px] ">
  <button
    type="button"
    onClick={clearFields}
    className="bg-white text-[#165DFF] py-2 px-4 rounded-[4px] border border-[#165DFF] w-full"
  >
    Clear
  </button>
              <button
                type="submit"
                disabled={!!error || !!passwordError}
                className={`bg-[#165DFF] text-[#FFF] py-2 px-4 rounded-[4px] w-full ${
                  error || passwordError ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
                  </DialogContent>
                </Dialog>
        </div>
      </div>

     

      {/* Additional Sections */}
      <div className="flex justify-between">
        <div>
          <p className="text-[#1D2129] text-[20px] font-medium">
            All Ticket Notification
          </p>
          <p className="text-[#1D2129] text-[16px] font-normal">
            Turn On All Ticket Notifications
          </p>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div className="relative w-11 h-6 bg-[#C9CDD4] peer-focus:outline-none
               rounded-full peer 
             peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
              after:content-[''] after:absolute after:top-[2px] 
              after:start-[2px] after:bg-white after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009A29]"></div>

          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[#1D2129] text-[20px] font-medium">
            My Ticket Notification
          </p>
          <p className="text-[#1D2129] text-[16px] font-normal">
            Enable All Notifications For My Tickets
          </p>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div className="relative w-11 h-6 bg-[#C9CDD4] peer-focus:outline-none 
               rounded-full peer 
             peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
              after:content-[''] after:absolute after:top-[2px] 
              after:start-[2px] after:bg-white after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009A29]"></div>

          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[#1D2129] text-[20px] font-medium">
            Activity Notification
          </p>
          <p className="text-[#1D2129] text-[16px] font-normal">
            Enable All Activity Notification
          </p>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div className="relative w-11 h-6 bg-[#C9CDD4] peer-focus:outline-none 
               rounded-full peer 
             peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
              after:content-[''] after:absolute after:top-[2px] 
              after:start-[2px] after:bg-white after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009A29]"></div>

          </label>
        </div>
      </div>
    </div>
  );
}

export default Privacyaccountsettings;