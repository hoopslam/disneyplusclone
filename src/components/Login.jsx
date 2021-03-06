import styled from "styled-components";

const Login = () => {
	return (
		<Container>
			<Content>
				<CTA>
					<CTALogoOne src='/assets/images/cta-logo-one.svg' alt='' />
					<Description>
						<strong>Disclaimer: </strong>This is not actually Disney +. This is a portfolio project to build a Disney
						+ look-a-like using React, styled components, Redux, and Firebase. Log in with your google account and take a look!
					</Description>
                    <CTALogoTwo src="/assets/images/cta-logo-two.png" alt="" />
				</CTA>
				<BgImage />
			</Content>
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

const BgImage = styled.div`
	height: 100%;
	position: absolute;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url("/assets/images/login-background.jpg");
	z-index: -1;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
`;

const CTA = styled.div`
	max-width: 650px;
	flex-wrap: wrap;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const CTALogoOne = styled.img`
	margin-bottom: 12px;
	min-height: 1px;
	display: block;
	width: 100%;
`;

const Description = styled.p`
	color: hsla(0, 0, 95.3%, 1);
	font-size: .85rem;
	margin: 0 0 24px;
	line-height: 1.5;
	letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    width: 100%;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`

export default Login;
