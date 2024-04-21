import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const footer = ["pointone", "pointtwo", "pointthree", "pointfour"];
    return(
        <div className='footer'>
				<div className='footerContent'>
					<div className='footerSection1'>
						<div className='footerLogo'>
							<img loading='lazy' srcSet='...' alt='Footer Logo' />
						</div>
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
					</ul>
					<div className='footerSection2'>
						<div className='col1'>
							{footer.map((item) => (
								<div className='columns'>
									<div className='col1'> {item}</div>
								</div>
							))}
						</div>
						<div className='col2 '>
							{footer.map((item) => (
								<div className='columns'>
									<div className='col1'> {item}</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='footerText'>
					© 2023 Your Company. All rights reserved.
				</div>
                </div>
    )
}