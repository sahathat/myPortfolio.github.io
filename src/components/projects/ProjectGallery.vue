<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div class="mb-10 sm:mb-0" v-for="projectImage in projectImages" :key="projectImage.id">
			<img v-lazy="projectImage.img" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				:alt="projectImage.title" @click="showModal(projectImage.img)" />
		</div> {{ selectedImage }}

		<div v-if="selectedImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
			<div class="relative w-4/5">
				<img v-lazy="selectedImage" class="rounded-xl w-full max-h-full" />
				<button @click="closeModal" class="absolute top-2 right-2 text-white text-2xl">X</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['projectImages'],
	data() {
		return {
			selectedImage: null,
		};
	},
	methods: {
		showModal(image) {
			this.selectedImage = image;
		},
		closeModal() {
			this.selectedImage = null;
		}
	},
};
</script>

<style scoped>
/* Additional styling for modal */
.fixed {
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.75);
}

.relative {
	width: 80%;
}

.w-full {
	width: 100%;
}

.max-h-full {
	max-height: 100%;
}

button {
	background: none;
	border: none;
	cursor: pointer;
}
</style>