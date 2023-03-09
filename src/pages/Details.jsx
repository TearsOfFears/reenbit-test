import React from "react";
import {useCharacterDetails} from "../hooks/useCharacterDetails";
import Loader from "../components/Loader/Loader";
import MainLayout from "../Layouts/MainLayout/MainLayout";

function Details() {
	const {data,isLoading} = useCharacterDetails();
	if (isLoading){
		return <Loader/>;
	}
	return (
		<MainLayout>
			<div>{data.name}</div>
		</MainLayout>
	);
}

export default Details;
