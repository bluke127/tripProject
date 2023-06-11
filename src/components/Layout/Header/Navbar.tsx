import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import StatusInput from "@/components/Input/StatusInput";
import styles from "@/styles/Layout/Header/Navbar.module.scss";
export default function Navbar() {
  const { state: userState, action } = useAuthContext();
  const [user, setuser] = useState({ name: "", password: "" });
  const onNameChange = e => {
    setuser(u => {
      return { ...u, name: (e.target as HTMLInputElement).value };
    });
  };
  const onPasswordChange = e => {
    setuser(u => {
      return { ...u, password: (e.target as HTMLInputElement).value };
    });
  };
  const onUserStateChange = () => {
    action.setUser(item => {
      return {
        name: user.name,
        password: user.password
      };
    });
  };
  return (
    <>
      {JSON.stringify(userState)}
      <div className={styles.navbar_wrap}>
        <div className={styles.menu_wrap}>
          <div className={styles.link_item}>
            <Link to="/home">Home</Link>
          </div>
          <div className={styles.link_item}>
            <Link to="/table">table</Link>
          </div>
          <div className={styles.link_item}>
            <Link to="/needLogin">needLogin</Link>
          </div>
        </div>

        <div className={styles.user_info_wrap}>
          <StatusInput
            type="text"
            value={user.name}
            onChange={onNameChange}
            style={{ color: "black" }}
            onClear={e =>
              setuser(u => {
                return { ...u, name: "" };
              })
            }
          ></StatusInput>
          <StatusInput
            type="text"
            value={user.password}
            onChange={onPasswordChange}
            style={{ color: "black" }}
            validation={/^[0-9]+$/}
            onClear={e =>
              setuser(u => {
                return { ...u, password: "" };
              })
            }
          />
          <button onClick={onUserStateChange}>로그인</button>;
        </div>
      </div>
    </>
  );
}
