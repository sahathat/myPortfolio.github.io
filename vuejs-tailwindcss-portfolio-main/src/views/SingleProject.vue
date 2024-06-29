<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projectDetails.js'
import { useRoute } from 'vue-router'

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		const route = useRoute()
		return {
			id: route.params.id,
			data: projects
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="data[id - 1].singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="data[id - 1].projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="data[id - 1].projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="data[id - 1].relatedProject" />
	</div>
</template>

<style scoped></style>
