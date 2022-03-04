import { GithubIcon } from '../assets/GithubIcon';
import { TwitterIcon } from '../assets/TwitterIcon';

export function Footer() {
	return (
		<>
			<a href='https://github.com/iShibi/color-slider' target='_blank' rel='noopener noreferrer'>
				<GithubIcon className='w-10 fill-black' />
			</a>
			<a href='https://twitter.com/iShiibi' target='_blank' rel='noopener noreferrer'>
				<TwitterIcon className='w-10 fill-black' />
			</a>
		</>
	);
}
