// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		title: 'Gofive Projects',
		category: ['Web Application','Desktop','Machine Learning','Dashboard'],
		img: require('@/assets/images/projects/7-Gofive-1.png'),
	},
	{
		title: 'Leafy',
		category: ['Web Application','Machine Learning'],
		img: require('@/assets/images/projects/1-Leafy.png'),
	},
	{
		title: 'Moral IT Help Desk',
		category: ['Web Application','Dashboard'],
		img: require('@/assets/images/projects/2-ITHelpDesk.png'),
	},
	{
		title: 'Google Certificate Salifort Motors Company - Why employee left?',
		category: ['Explorational Data Analysis','Dashboard',"Machine Learning"],
		img: require('@/assets/images/projects/3-SalifortMotors.png'),
	},
	{
		title: 'OASIP (Online Appointment Scheduling System For Integrated Project Clinics)',
		category: ['Web Application'],
		img: require('@/assets/images/projects/4-OASIP.png'),
	},
	{
		title: 'CSGO winner classification',
		category: ['Machine Learning'],
		img: require('@/assets/images/projects/ML.png'),
	},
	{
		title: "Submarine",
		category: ["Web Application","Game Development"],
		img: require('@/assets/images/projects/6-helloworld.png')
	}
];

function addIncrementingIds(projectArray) {
	return projectArray.map((project, index) => ({
		...project,
		id: index + 1, // Add an `id` property starting from 1
	}));
}
  
const updatedProjects = addIncrementingIds(projects);

export default updatedProjects;
