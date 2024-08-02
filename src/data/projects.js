// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Leafy',
		category: ['Web Application','Machine Learning'],
		img: require('@/assets/images/projects/1-Leafy.png'),
	},
	{
		id: 2,
		title: 'Moral IT Help Desk',
		category: ['Web Application','Dashboard'],
		img: require('@/assets/images/projects/2-ITHelpDesk.png'),
	},
	{
		id: 3,
		title: 'Google Certificate Salifort Motors Company - Why employee left?',
		category: ['Explorational Data Analysis','Dashboard',"Machine Learning"],
		img: require('@/assets/images/projects/3-SalifortMotors.png'),
	},
	{
		id: 4,
		title: 'OASIP (Online Appointment Scheduling System For Integrated Project Clinics)',
		category: ['Web Application'],
		img: require('@/assets/images/projects/4-OASIP.png'),
	},
	{
		id: 5,
		title: 'CSGO winner classification',
		category: ['Machine Learning'],
		img: require('@/assets/images/projects/ML.png'),
	},
	{
		id: 6,
		title: "Submarine",
		category: ["Web Application","Game Development"],
		img: require('@/assets/images/projects/6-helloworld.png')
	}
];

export default projects;
