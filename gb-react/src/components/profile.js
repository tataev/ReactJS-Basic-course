import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckbox } from "../store/profile/actions";

export const Profile = () => {
  const checkboxValue = useSelector(state => state.checkbox);
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleCheckbox);
  }

  return (
    <>
      <h3 align="center">Профиль</h3>
      <input class = "go_right " align="center" type="checkbox" checked={checkboxValue} onChange={handleChange} />
      <span>{name}</span>
        <br/>
        {/*<input align="center" type="checkbox" checked={checkboxValue} onChange={handleChange} />*/}
        {/*<span>женщина</span>*/}
    </>
  );
};
