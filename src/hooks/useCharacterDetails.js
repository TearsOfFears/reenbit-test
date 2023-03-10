import { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
export function useCharacterDetails() {
	const { characterId } = useParams();
	const [details, setDetails] = useState({ data: {}, isLoading: true, error: "" });
	useEffect(() => {
		axios.get(`character/${characterId}`)
			.then(({ data }) => {
				setDetails({ data, isLoading: false });
			})
			.catch((e) => setDetails({ data: {}, isLoading: false, error: e.response.data.error }));
	}, []);
	return details;
}
