import { useState } from "react";
import Verfiyer from "../verify/Verifyer";

const PasswordGenerator = () => {
  const [passwordGen, setPasswordGen] = useState("");
  var password = "";

  function makePassword() {
    const chars: string =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength: number = 10;
    for (let i = 0; i < passwordLength; i += 1) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }

    setPasswordGen(password);
    return passwordGen;
  }

  return (
    <>
      <button className="generateButton" onClick={makePassword}>
        Generator
      </button>
      <p> password: {passwordGen}</p>
      <Verfiyer />
    </>
  );
};

export default PasswordGenerator;
