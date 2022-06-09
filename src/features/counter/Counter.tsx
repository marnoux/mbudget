import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store/store';

const Counter = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

		return <div>Counter</div>;
};

export default Counter;
