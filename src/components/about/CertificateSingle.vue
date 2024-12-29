<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div>
		<a :href="client.url">
			<img :src="client.img" :alt="client.title" :title="client.title"
				class="w-64 h-44 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light" />
		</a>
	</div>
</template>

<style lang="scss" scoped></style>
