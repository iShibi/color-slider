import { useEffect } from 'react';
import { Slider } from './components/Slider';
import { useTypedSelector } from './store/Store';

export function App() {
	const { red, green, blue } = useTypedSelector(state => state.color);

	useEffect(() => {
		document.documentElement.style.setProperty('--dynamic-color', `rgb(${red}, ${green}, ${blue})`);
	}, [red, green, blue]);

	return (
		<>
			<div className='bg-dynamic flex h-[50vh] items-center justify-center text-3xl text-white'>
				rgb({red}, {green}, {blue})
			</div>
			<div className='my-10 flex flex-col space-y-10 md:mt-24 md:flex-row md:justify-evenly md:space-y-0'>
				<Slider min={0} max={255} name='red' value={red} />
				<Slider min={0} max={255} name='green' value={green} />
				<Slider min={0} max={255} name='blue' value={blue} />
			</div>
		</>
	);
}
