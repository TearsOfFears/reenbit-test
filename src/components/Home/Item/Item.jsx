import React from "react";
import styles from "./Item.module.scss";
import Article from "../../../ui/Article/Article";
function Item(props) {
	const { id, name, image, species, handleDetail } = props;
	return (
		<li className={styles.wrapper} onClick={() => handleDetail(id)}>
			<div className={styles.image__wrapper}>
				<img src={image} alt={image} />
			</div>
			<Article title={name} subtitle={species} />
		</li>
	);
}

export default Item;
