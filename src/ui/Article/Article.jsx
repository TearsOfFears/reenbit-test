import React from "react";
import styles from "./Article.module.scss";

function Article(props) {
	const { title, subtitle, isBorder } = props;
	const titleShort = title.length > 20 ? `${title.slice(0, 16)}...` : title;
	return (
		<div className={isBorder ? styles.wrapper__withBorder : styles.wrapper__text}>
			<h1 className={styles.title}>{titleShort}</h1>
			<h2 className={styles.subTitle}>{subtitle}</h2>
		</div>
	);
}

export default Article;
