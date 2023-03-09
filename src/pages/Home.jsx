import React, {useState} from "react";
import useCharacters from "../hooks/useCharacters";
import List from "../components/List/List";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Input from "../components/Input/Input";
import Logo from "../assets/logo.png";
import {useSearchParams} from "react-router-dom";
function Home() {
	const [searchParams] = useSearchParams();
	const [value, setValue] = useState(searchParams.get("name"));
	const {data,isLoading} = useCharacters(value);
	return (
		<MainLayout>
			<img src={Logo}/>
			<Input setValue={setValue} value={value} isLoading={isLoading}/>
			<List data={data} isLoading={isLoading} />
		</MainLayout>
	);
}

export default Home;
