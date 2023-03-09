import React from "react";
import styles from "./List.module.scss";
import {useNavigate} from "react-router-dom";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
function List(props) {
	const {data,isLoading} =props;
	const navigate = useNavigate();
	const handleDetail = (id)=>{
		navigate(`details/${id}`);
	};
	if (isLoading){
		return <Loader/>;
	}
	return (
		<ul className={styles.list}>
			{data.map((character)=>{
				const {id,name,image,species} =character;
				return <Item key={id} id={id} name={name} image={image} species={species} handleDetail={handleDetail} />;
			})}
		</ul>
	);
}

export default List;
