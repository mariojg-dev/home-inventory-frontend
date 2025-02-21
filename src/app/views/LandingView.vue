<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-100 to-gray-300"
  >
    <div class="flex space-x-8 items-center">
      <!-- Starting card -->
      <div
        :class="[
          'bg-white shadow-xl rounded-xl p-10 max-w-xl text-center transition-all',
          { '-translate-x-20': showLogin },
        ]"
        style="transition-duration: 1500ms"
      >
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Mindful Nest 🏡
        </h1>
        <p class="text-xl text-gray-700 leading-relaxed mb-8">
          Embarking on a more sustainable life begins with the gentle art of
          letting go—shedding what no longer serves you to create space for what
          truly matters.
        </p>
        <!-- Fade button when clicked -->
        <transition name="fade">
          <button
            v-if="!showLogin"
            @click="showLogin = true"
            class="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
          >
            Get Started
          </button>
        </transition>
      </div>

      <!-- Login card with slide transnition -->
      <transition name="slide-fade">
        <div
          v-if="showLogin"
          class="bg-white shadow-xl rounded-xl p-10 max-w-xl text-center"
        >
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Login</h2>
          <form @submit.prevent="handleLogin">
            <div class="mb-4">
              <input
                type="email"
                placeholder="Email"
                v-model="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
              <p v-if="errorEmail" class="text-red-500 text-sm mt-1">
                {{ errorEmail }}
              </p>
            </div>
            <div class="mb-6">
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
              <p v-if="errorPassword" class="text-red-500 text-sm mt-1">
                {{ errorPassword }}
              </p>
            </div>
            <button
              type="submit"
              class="w-full px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <p class="mt-4 text-gray-600">
            Don't have an account?
            <a href="#" class="text-green-500 hover:underline">Register</a>
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//Control login visbility
const showLogin = ref(false);

const email = ref("");
const password = ref("");
const errorEmail = ref("");
const errorPassword = ref("");

// Handle login
function handleLogin() {

  errorEmail.value = "";
  errorPassword.value = "";

  let valid = true;

  if (!email.value) {
    errorEmail.value = "Email is required";
    valid = false;
  } else if (!validateEmail(email.value)) {
    errorEmail.value = "Email is invalid";
    valid = false;
  }

  if (!password.value) {
    errorPassword.value = "Password is required";
    valid = false;
  }

  if (valid) {
    // TODO logic einbauen
    console.log("Logging in with", email.value, password.value);
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
</script>

<style scoped>
/* Fade transition Get Started button */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Slide Transiton login */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1500ms ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
