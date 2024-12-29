<script>
import axios from 'axios';
import counter from 'vue3-autocounter';
export default {
	components: {
		counter,
	},
	data: () => {
		return {
			username: "sahathat",
			repos: 0,
			suffix: '',
			experienceTitle: 'Years of experience (Month)',
			githubTitle: 'Stars on GitHub',
			feedbackTitle: 'Positive feedback',
			projectsTitle: 'Projects completed',
		};
	},
	methods: {
		async fetchStarredRepos() {
			if (!this.username) {
				this.error = 'Please enter a username.';
				return;
			}

			this.loading = true;
			this.error = null;

			try {
				const response = await axios.get(
					`https://api.github.com/users/${this.username}/starred`, {
						header: { Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}` }
					}
				);
				this.repos = response.data.length;
				this.suffix = this.repos > 999999 ? '+m' : this.repos > 999 ? '+k' : ''
			} catch (err) {
				this.error =
				err.response?.data?.message || 'An error occurred while fetching data.';
			} finally {
				this.loading = false;
			}
		},
	},
	mounted() {
		// Debounce API call to avoid too many requests
		clearTimeout(this.debounceTimeout);
		this.debounceTimeout = setTimeout(() => {
			this.fetchStarredRepos();
		}, 500); // Adjust debounce time as needed
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div
			class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
		>
			<!-- Years of experience counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="4"
					:duration="1"
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="About Status Counter"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ experienceTitle }}
				</span>
			</div>

			<!-- GitHub stars counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="repos"
					:duration="1"
					:suffix="suffix"
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>{{ githubTitle }}</span
				>
			</div>

			<!-- Positive feedback counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="75"
					:duration="1"
					suffix="%"
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ feedbackTitle }}
				</span>
			</div>

			<!-- Projects completed counter -->
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="7"
					:duration="1"
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ projectsTitle }}
				</span>
			</div>
		</div>
	</div>
</template>
