import React from 'react';
import '../css/TempIndicator.css';
import { useDispatch } from 'react-redux';
import { changetocelcis } from '../reducers/weatherSlice';

function TempIndicator({ title, type }) {
	const dispatch = useDispatch();
	return (
		<div className={`tempIndicator tempIndicator__${type}`} onClick={() => {
			dispatch(changetocelcis());
		}}>
			{title}
		</div>
	)
}

export default TempIndicator;
