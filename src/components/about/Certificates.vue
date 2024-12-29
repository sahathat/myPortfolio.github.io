<script>
import CertificateSingle from './CertificateSingle.vue';

export default {
	components: {
		CertificateSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Certificate list',
			clients: [
				{
					id: 1,
					title: 'ChaiyoGPT Skill baged - tier 1',
					url: 'https://www.cloudskillsboost.google/public_profiles/45257873-a53c-46a8-a4bc-8597aaf64973',
					img: require('@/assets/images/certificates/certificate-1.png'),
				},
				{
					id: 2,
					title: 'Google certificate - Advanced data analytic',
					url: 'https://www.coursera.org/account/accomplishments/verify/ZPRJ6N5QW264',
					img: require('@/assets/images/certificates/certificate-2.png'),
				},
				{
					id: 3,
					title: 'Google certificate - IT support specialist',
					url: 'https://www.coursera.org/account/accomplishments/certificate/VENKF2K8Y9H5',
					img: require('@/assets/images/certificates/certificate-3.png'),
				},
				{
					id: 4,
					title: 'Google certificate - Data Analytic',
					url: 'https://www.coursera.org/account/accomplishments/verify/Q2ZG5BPPKYPS',
					img: require('@/assets/images/certificates/certificate-4.png'),
				},
				{
					id: 5,
					title: 'Microsoft Office Specialist - Microsoft excel 2016',
					url: 'https://www.certiport.com/portal/Pages/ViewTranscript.aspx?printview=true&defaultlang=THA',
					img: require('@/assets/images/certificates/certificate-5.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<CertificateSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
