import { GithubIcon } from '../assets/GithubIcon';
import { TwitterIcon } from '../assets/TwitterIcon';

export function Footer() {
	return (
		<>
			<a href='https://github.com/iShibi/color-slider'>
				<GithubIcon className='w-10 fill-black' />
			</a>
			<a href='https://twitter.com/iShiibi'>
				<TwitterIcon className='w-10 fill-black' />
			</a>
		</>
	);
}
