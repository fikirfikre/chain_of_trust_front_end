import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

function About() {
	return (
		<div className='about-page'>
			<h3 className='title'>About chain of trust</h3>
			<div className='goal'>
				<h2> Our Goal </h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.adipiscing elit. Sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className='part-three'>
				<h2 className='dynamic-process'>The dynamic of the process</h2>
				<div className='process-details'>
					<div className='column1'>
						<p className='content1'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure
						</p>
						<p className='content2'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>
					<div className='column2'>
						<div className='layer'>
							<h2>We are one</h2>
							<h3>Message away</h3>
						</div>
					</div>
				</div>
			</div>
			<footer className='footer'>
				<div className='footerLogo'>
					<img loading='lazy' srcSet='...' alt='Footer Logo' />
                    <h3> Chain of trust </h3>
				</div>
				<ul className='footermenu'>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/services'>Services</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
                    <li>
						<a href='/contact'>Contact</a>
					</li>
				</ul>
				<div className='footerlinks'>
					<span>
						<FaInstagram />
					</span>
					<span>
						<FaTelegram />
					</span>
					<span>
						<FaTwitter />
					</span>
					<span>
						<FaFacebook />
					</span>
				</div>
				<div className='footer-text'>copy right reserved @2023</div>
			</footer>
		</div>
	);
}

export default About;
