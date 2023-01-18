import styles from "../Style/Login.module.css"
import logo from "../Png/logo-default.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../config";
import { signInWithEmailAndPassword } from "firebase/auth"


export const Login = () => {
const navigate = useNavigate

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const onSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.Code;
        const errorMessage = error.Message;
        console.log(errorCode, errorMessage);
      });
};

    return (
        <div className={styles.container}>
            <div className={styles.tut}><b>Хэрхэн ажилладаж вэ?</b></div>
            <div className={styles.down}>
                <div className={styles.login}>
                    <div className={styles.logo}><img src={logo} alt=""></img></div>
                    <div className={styles.txt}>Нэвтрэх</div>
                    <div className={styles.input}>
                    Цахим хаяг
                        <input
                            className={styles.inp}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@mail.domein"
                        ></input>
                    </div>
                    <div className={styles.input}>
                    Нууц үг
                        <input 
                        className={styles.inp}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••"
                        ></input>
                    </div>
                    <div className={styles.tips}>
                        <div className={styles.rem}>
                            <input 
                            type="checkbox"
                            className={styles.check}
                            ></input>
                            <p className={styles.txt2}>Намайг сана</p>
                        </div>
                        <div className={styles.for}>
                            <NavLink to="/Forgot"><p className={styles.txt4}>Нууц үгээ мартсан</p></NavLink>
                        </div>
                    </div>
                    <div className={styles.logb}>
                        <button
                        type="submit"
                        onClick={onSubmit}
                        className={styles.nevtreh}
                        ><p className={styles.txt3}>НЭВТРЭХ</p></button>
                    </div>
                    <div className={styles.signb}>
                    <NavLink to="/Signup"><p className={styles.txt5}>Шинэ хэрэглэгч бол энд дарна уу?</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
 

  