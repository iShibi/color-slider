import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { Slider } from './components/Slider';
import { useTypedSelector } from './store/Store';

export function App() {
	const { red, green, blue } = useTypedSelector(state => state.color);

	useEffect(() => {
		document.documentElement.style.setProperty('--dynamic-color', `rgb(${red}, ${green}, ${blue})`);
	}, [red, green, blue]);

	return (
		<div className='flex min-h-screen flex-col justify-between'>
			<main>
				<div className='bg-dynamic mb-14 flex h-36 items-center justify-center text-3xl text-white'>
					rgb({red}, {green}, {blue})
				</div>
				<div className='flex flex-col gap-y-14 md:flex-row md:justify-evenly'>
					<Slider min={0} max={255} name='red' value={red} />
					<Slider min={0} max={255} name='green' value={green} />
					<Slider min={0} max={255} name='blue' value={blue} />
				</div>
			</main>
			<footer className='flex items-center justify-center gap-x-10 border-t border-gray-900 border-opacity-5 p-4 text-white'>
				<Footer />
			</footer>
		</div>
	);
}
