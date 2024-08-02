<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li v-for="info in projectInfo.companyInfos" :key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light">
						<span>{{ info.title }}:
							<button type="button" v-if="info.title == 'Website' || info.title == 'Phone' || info.title == 'Github'"
								class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
								<a :href="info.details" class='hover:underline cursor-pointer items-center'
									aria-label="Project Website and Phone">
									Link<i data-feather="external-link"></i> 
								</a>
							</button>

							<span v-else> {{ info.details }}</span>
						</span>
					</li>
				</ul>
			</div>

			<!-- Single project objectives -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.objectivesHeading }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo.objectivesDetails }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.technologies[0].title }}
				</p>

				<ul v-for="(tech, i) in projectInfo.technologies[0].techs" :key="i"
					class="list-disc ml-2 font-general-regular text-primary-dark dark:text-ternary-light">
					<li>
						<p>{{ tech }}</p>
					</li>
				</ul>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a v-for="social in projectInfo.socialSharings" :key="social.id" :href="social.url" target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"><i
							:data-feather="social.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i></a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
				{{ projectInfo.projectDetailsHeading }}
			</p>
			<p v-for="projectDetail in projectInfo.projectDetails" :key="projectDetail.id" 
				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				{{ projectDetail.details }}
			</p>
		</div>
	</div>
</template>
