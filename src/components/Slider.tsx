import { useTypedDispatch } from '../store/Store';
import { changeColorValue } from '../store/ColorSlice';

export function Slider(props: SliderProps) {
	const dispatch = useTypedDispatch();

	return (
		<div className='text-center'>
			<label className='block' htmlFor={props.name}>
				{props.name}
			</label>
			<input
				className='w-56'
				type='range'
				min={props.min}
				max={props.max}
				value={props.value}
				id={props.name}
				onChange={e => dispatch(changeColorValue({ colorName: props.name, colorValue: parseInt(e.target.value) }))}
			/>
			<span className='block'>{props.value}</span>
		</div>
	);
}

export interface SliderProps {
	min: number;
	max: number;
	value: number;
	name: string;
}
