<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link :to="'/' + project.id"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div class="justify-center">
			<img :src="project.img" :alt="project.title" :title="project.title" class="rounded-t-xl border-none m-auto h-56 "/>
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
			<!-- <span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ project.category }}</span
			> -->

			<div class="flex flex-wrap justify-center">
				<div v-for="(c, i) in project.category" :key="i" class="m-1">
					<span class="bg-blue-100 text-blue-800 text-m font-general-medium px-2.5 
			py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ c }}</span>
				</div>
			</div>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
