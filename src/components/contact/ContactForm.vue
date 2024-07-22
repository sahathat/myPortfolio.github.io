<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
import emailjs from '@emailjs/browser'

export default {
	components: { Button, FormInput, FormTextarea },
	data() {
		return {
			isSend: false
		}
	},
	methods: {
		sendMail() {
			// console.log(this.$refs.form)
			emailjs.sendForm('service_qfg7jvx', 'template_xmqtd8a', this.$refs.form, {
				publicKey: 'A6o00msX4jSa779jU'
			})
				.then(
					() => {
						console.log('SUCCESS!');
						this.isSend = true
					},
					(error) => {
						console.log('FAILED...', error.text);
						this.isSend = false
					},
				);
		}
	}
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Contact Form
			</p>
			<form class="font-general-regular space-y-7" ref="form" @submit.prevent="sendMail">
				<FormInput label="Full Name" inputIdentifier="name" name="name" />
				<FormInput label="Email" inputIdentifier="email" inputType="email" name="email" />
				<FormInput label="Subject" inputIdentifier="subject" name="subject" />
				<FormTextarea label="Message" textareaIdentifier="message" name="message" />

				<div>
					<Button title="Send Message"
						class="px-4 py-2.5  text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit" aria-label="Send Message" />
				</div>
			</form>

			<div v-if="isSend"
				class="leading-loose max-w-xl mt-7 p-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-left">
				<p class="dark:text-primary-light m-2 flex items-center">
					<!-- <i data-feather="alert-circle" class="w-6 h-6 text-ternary-dark dark:text-ternary-light mr-2"></i> -->
					Contract form data has already been sent!!!
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>