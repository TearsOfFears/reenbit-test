import React, { useCallback } from "react";
import styles from "./Button.module.scss";

function Button(props) {
	const { children,handleClick } = props;
	return <button className={styles.button}  onClick={handleClick}> {children}</button>;
}

export default Button;
