import styles from "../Style/Signup.module.css"
import logo from "../Png/logo-default.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const onSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
};
    return (
        <div className={styles.container}>
            <div className={styles.tut}><b>Хэрхэн ажилладаж вэ?</b></div>
            <div className={styles.down}>
                <div className={styles.login}>
                    <div className={styles.logo}><img src={logo} alt=""></img></div>
                    <div className={styles.txt}>Бүртгүүлэх</div>
                    <div className={styles.input}>
                    Цахим хаяг
                        <input
                            className={styles.inp}
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="name@mail.domein"
                        ></input>
                    </div>
                    <div className={styles.input}>
                    Нууц үг
                        <input 
                        className={styles.inp}
                        type="password"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••••"
                        ></input>
                    </div>
                    <div className={styles.input}>
                    Нууц үг
                        <input 
                        className={styles.inp}
                        type="password"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••••"
                        ></input>
                    </div>
                    <div className={styles.logb}>
                        <button
                        type="submit"
                        onClick={onSubmit}
                        className={styles.nevtreh}
                        ><p className={styles.txt3}>Бүртгүүлэх</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
 

  