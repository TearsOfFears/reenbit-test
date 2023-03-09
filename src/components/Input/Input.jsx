import React, { useCallback } from "react";
import styles from "./Input.module.scss";

function Input(props) {
	const { value, setValue, isLoading} = props;
	const handleInput = useCallback((e) => {
		setValue(e.target.value);
	}, [value]);
	return <input className={styles.input} value={value} disabled={isLoading} onChange={handleInput} type="text" name="input" placeholder="Filter by name..." />;
}

export default Input;
