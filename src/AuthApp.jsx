import { useContext } from "react";
import { myContext } from "./LoginContext";

const AuthApp = () => {
    const { user, logout } = useContext(myContext);

    if (!user || !user.name) {
        return <h1>Loading user...</h1>;
    }

    return (
        <>
            <h1>Welcome: {user.name}!</h1>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default AuthApp;
