import image from "./home.jpeg";

function Signup() {
	return (
		<div className='signup-page'>
			<div className='image-cont'>
				<img src={image} alt='img' />
				<h1>Next-Gen Property Management</h1>
			</div>
			<div className='fields'>
				<h2> Sign up</h2>
				<h3>Enter your account details below</h3>
				<div className='inputs'>
					<h4>Email</h4>
					<input placeholder='Enter your email' />
					<h4>Password</h4>
					<input placeholder='Enter your password' />
					<button>Sign up</button>
				</div>
			</div>
		</div>
	);
}

export default Signup;
