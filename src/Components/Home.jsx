import { useContext } from "react";
import { AuthContext } from "./Provider/Authprovider";


const Home = () => {
    const authinfo=useContext(AuthContext);
    console.log(authinfo)
    return (
        <div>
            <h2 className="text-2xl">{authinfo.name}</h2>
        </div>
    );
};

export default Home;