import {
	FaFacebook,
	FaInstagram,
	FaTelegram,
	FaTwitter,
	FaArrowRight,
} from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { ImTree } from "react-icons/im";
import { LiaHourglassHalfSolid } from "react-icons/lia";
import { RiAuctionFill } from "react-icons/ri";

function Services() {
	const services = [
		{
			title: "Tracking proprty",
			icons: <MdEventNote />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			title: "Auction and bidding",
			icons: <RiAuctionFill />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			title: "Managing property",
			icons: <ImTree />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			title: "Simplifying work",
			icons: <LiaHourglassHalfSolid />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
	];
	const explore = [
		{
			title: "Property management",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utnim ad minim veniam, quis nostrud exercitation ullamco laboris",
		},
		{
			title: "Placing auction",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utnim ad minim veniam, quis nostrud exercitation ullamco laboris",
		},
		{
			title: "Register bidders",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utnim ad minim veniam, quis nostrud exercitation ullamco laboris",
		},
		{
			title: "Tracking companies property",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utnim ad minim veniam, quis nostrud exercitation ullamco laboris.",
		},
		{
			title: "Managing request",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utnim ad minim veniam, quis nostrud exercitation ullamco laboris.",
		},
		{
			title: "Managing employee",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utnim ad minim veniam, quis nostrud exercitation ullamco laboris.",
		},
	];

	return (
		<div className='service'>
			<h3 className='title'>Services provided for a company </h3>
			<h4> Explore services</h4>
			<div className='part-two'>
				{explore.map((item) => (
					<div className='cols'>
						<h2> {item.title} </h2>
						<p> {item.desc} </p>
						<div className='icon-wrapper'>
							<span><LiaHourglassHalfSolid /></span>
						</div>
					</div>
				))}
			</div>
			<div className='part-three'>
				<div className='title'>
					<h5>
						Revolutionary solutions <h3> For companies </h3>
					</h5>
					<span>
						All in one place
						<FaArrowRight style={{ marginLeft: "20px", color: "grey" }} />
					</span>
				</div>
				<div className='lists'>
					{services.map((item) => (
						<div className='mapped'>
							<h2> {item.title} </h2>
							<p> {item.desc} </p>
							<span> {item.icons} </span>
						</div>
					))}
				</div>
			</div>
			<div className='part-four'>
				<h2 className='dynamic-process'>Is your company facing problmes?</h2>
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

export default Services;
