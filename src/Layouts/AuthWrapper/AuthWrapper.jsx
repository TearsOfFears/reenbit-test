import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

function AuthWrapper(props) {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	useEffect(() => {
		if (!token){
			return navigate("/login");
		}
	}, [token]);
	return props.children;
}

export default AuthWrapper;