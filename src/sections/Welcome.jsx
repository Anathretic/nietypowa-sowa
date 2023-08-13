import CardItem from '../components/CardItem'
import CardData from '../data/CardData'

const Welcome = () => {
	return (
		<div className='flex w-full justify-center items-center pt-[80px]'>
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-center items-center flex-col mf:mr-20'>
					<h2 className='text-4xl sm:text-5xl text-white text-gradient py-1 max-rsm:text-left text-center min-[400px]:text-left'>
						Novice frontend <br /> developer with..
						<br />
						Fancy gradients!
					</h2>
					<div className='text-left mt-5 text-white font-light text-base max-[350px]:text-left text-center mf:text-left'>
						<p className='mt-2'>Currently working on several commercial projects..</p>
						<br />
						<p>But I am still looking for a full time job!</p>
						<br />
						<p>Do you have any questions?</p>
						<br />
						<p className='mb-2'>Click the button below and contact me!</p>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-start w-full sm:w-96 mf:mt-0 mf:ml-18 lg:ml-20 mt-10'>
					{CardData.map((id, title) => (
						<CardItem
							key={id + title}
							title={id.title}
							countdownMs={id.countdown}
							webHandle={id.webHandle}
							text={id.text}
							bgImg={id.id}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Welcome
