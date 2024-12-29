<script>
export default {
	props: ['relatedProject'],
	methods: {
		redirectToItem(id) {
			// Redirect to the item link using Vue Router's programmatic navigation
			this.$router.push('/' + id).then(() => {
				// Force a full page reload
				window.location.reload();
			});
		}
	}
};

</script>

<template>
	<div class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
		<p
			class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
			{{ relatedProject.relatedProjectsHeading }}
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
			<div v-for="item in relatedProject.relatedProjects" :key="item.id">
				<img v-lazy="item.img" class="rounded-xl cursor-pointer" @click="redirectToItem(item.id)"
					:alt="item.title" :title="item.title" /> <p class="font-general-regular text-ternary-dark dark:text-ternary-light">{{ item.title }}</p>
			</div>
		</div>
	</div>
</template>
