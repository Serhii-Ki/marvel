import React, { useState } from "react";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { selectUser, userThunks } from "../../store/userSlice.ts";
import { useAppDispatch } from "../../store/store.ts";
import { useSelector } from "react-redux";

function Wallet(props) {
  const [inputValue, setInputValue] = useState<string>("");
  const { balance } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const depositMoney = (value: number) => {
    if (value && !isNaN(value)) {
      dispatch(userThunks.depositMoney(value + balance));
    }
  };
  return (
    <div>
      <h2>User Name</h2>
      <div>
        <span>your balance: </span>
        <span>$ {balance}</span>
      </div>
      <CustomInput
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <CustomBtn
        title={"add"}
        mode="main"
        onClick={() => depositMoney(+inputValue)}
      />
    </div>
  );
}

export default Wallet;
