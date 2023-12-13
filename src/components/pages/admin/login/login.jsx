import CustomInput from "@/components/ui/custom_input/custom_input";
import styles from "./login.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const session = useSession();

  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSignin = async () => {
    setError(false);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        ...values,
      });
      if (res.status === 401) {
        setError(true);
      } else {
        router.push("admin/g");
      }
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className={styles.login}>
      <form>
        {/* {error && <p>error</p>} */}
        <p>LOGIN</p>
        <CustomInput
          placeHolder="Email"
          type="email"
          value={values.email}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, email: e.target.value }));
          }}
          error={error}
        />
        <CustomInput
          placeHolder="Password"
          value={values.password}
          type="password"
          onChange={(e) => {
            setValues((prev) => ({ ...prev, password: e.target.value }));
          }}
          error={error}
        />
        <CustomButton
          clickHandler={handleSignin}
          //   disabled={!values.email || !values.password}
        >
          Login
        </CustomButton>
        <CustomButton
          clickHandler={async () => {
            await signOut();
          }}
          //   disabled={!values.email || !values.password}
        >
          Logout
        </CustomButton>
      </form>
    </div>
  );
};

export default Login;
