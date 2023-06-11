import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import StatusInput from "@/components/Input/StatusInput";
import styles from "@/styles/Layout/Header/Navbar.module.scss";
import Button from "@/components/Button";
import useDebounce from "@/hooks/useDebounce";
export default function Navbar() {
  const [num, setNum] = useState(0); //숫자 테스트 ( debounce )
  const { userInfo, setUserInfo, isLogin, setIsLogin } = useAuthContext(); // 회원정보
  const [user, setUser] = useState({ name: "", password: "" });
  const [login, setLogin] = useState(false);
  const onNameChange = e => {
    setUser(u => {
      return { ...u, name: (e.target as HTMLInputElement).value };
    });
  };
  const onPasswordChange = e => {
    setUser(u => {
      return { ...u, password: (e.target as HTMLInputElement).value };
    });
  };
  const onLogin = () => {
    console.log(userInfo);
    setIsLogin(e => true);
    setUserInfo(item => {
      return {
        ...item,
        name: user.name,
        password: user.password
      };
    });
  };
  const alertFunc = () => {
    setNum(n => {
      n = n + 1;
      return n;
    });
  };
  const a = v => {
    console.log("Test", v);
  };
  useDebounce(a, 1000, [num]);

  useEffect(() => {
    console.log(num);
  }, [num]);
  return (
    <>
      {JSON.stringify(userInfo)}
      {JSON.stringify(user)}
      <div className={styles.navbar_wrap}>
        <div className={styles.menu_wrap}>
          <div className={styles.link_item}>
            <Link to="/home">Home</Link>
          </div>
          <div className={styles.link_item}>
            <Link to="/temp">Temp</Link>
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
              setUser(u => {
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
              setUser(u => {
                return { ...u, password: "" };
              })
            }
          />
          <Button onClick={onLogin}>로그인</Button>
          <Button onClick={alertFunc} useDebounce={false}>
            체스츠
          </Button>
          ;
        </div>
      </div>
    </>
  );
}
