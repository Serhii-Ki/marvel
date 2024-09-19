import React from "react";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";

function Wallet(props) {
  return (
    <div>
      <h2>User Name</h2>
      <div>
        <span>your balance: </span>
        <span>1000 $</span>
      </div>
      <CustomInput />
      <CustomBtn title={"add"} mode="main" />
    </div>
  );
}

export default Wallet;
