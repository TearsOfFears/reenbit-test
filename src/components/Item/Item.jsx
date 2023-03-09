import React from "react";
import styles from  "./Item.module.scss";
function Item(props) {
	const {id,name,image,species,handleDetail}= props;
	let nameShort = name.length>20 ? name.slice(0,16)+"..." : name;
	return (
		<li className={styles.wrapper} onClick={()=>handleDetail(id)}>
			<div className={styles.image__wrapper}>
				<img src={image} alt={image}/>
			</div>
			<div className={styles.wrapper__text}>
				<h1 className={styles.title}>{nameShort}</h1>
				<h2 className={styles.subTitle}>{species}</h2>
			</div>
		</li>
	);
}

export default Item;
