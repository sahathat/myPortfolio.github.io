<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Through learning and developing many things to meet my goals, I Sahathat Yingsakulkiet or called Benz have ambitiously pursued a career in software development related to solving logical solving problems. This involves full cycle development, end-to-end testing, fixing all possible bugs, and enabling rapid deployment through adapting to frameworks.',
				},
				{
					id: 2,
					bio:
						'By default, I like to solve problems to define the root cause and creatively use them especially challenging myself on the project or work to reach the organization\'s goal with a learning effort',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-72"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
