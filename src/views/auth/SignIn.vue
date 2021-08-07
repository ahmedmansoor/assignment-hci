<template>
  <TabBar></TabBar>
  <section id="SignIn" class="flex flex-col items-center h-screen md:flex-row">
    <div class="hidden w-full h-screen bg-people bg-cover lg:block md:w-2/3">
      <img alt="" class="object-cover w-full h-full" />
    </div>
    <div
      class="
        flex
        items-center
        justify-center
        w-full
        h-screen
        px-16
        bg-white
        md:max-w-md
        lg:max-w-full
        md:mx-auto md:w-1/2
        xl:w-1/3
      "
    >
      <div class="w-full h-100">
        <h1
          class="
            mb-5
            mt-3
            sm:text-3xl
            text-2xl
            font-black
            text-black
            tracking-ringtighter
            font-sans
          "
        >
          Sign In
        </h1>
        <p class="mb-6 text-gray-900">Enter your credentials to continue.</p>
        <hr class="mb-5 border-gray-300" />
        <form class="mt-6" action="#" method="POST">
          <div>
            <label
              class="block text-sm font-medium leading-relaxed text-gray-700"
              >Email Address</label
            >
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email "
              class="
                w-full
                px-4
                py-2
                mt-2
                text-base text-black
                transition
                duration-500
                ease-in-out
                transform
                border-2
                rounded
                bg-gray-100
                focus:border-gray-500 focus:bg-white focus:outline-none
              "
            />
          </div>
          <div class="mt-4">
            <label
              class="block text-sm font-medium leading-relaxed text-gray-700"
              >Password</label
            >
            <input
              type="password"
              placeholder="Your Password"
              class="
                w-full
                px-4
                py-2
                mt-2
                text-base text-black
                transition
                duration-500
                ease-in-out
                transform
                border-2
                rounded
                bg-gray-100
                focus:border-gray-500 focus:bg-white focus:outline-none
              "
            />
          </div>
          <div class="mt-2 text-right">
            <a
              href="#"
              class="
                text-sm
                font-semibold
                leading-relaxed
                text-gray-700
                hover:text-black
                focus:text-blue-700
              "
              >Forgot Password?</a
            >
          </div>
          <button
            type="submit"
            class="
              block
              w-full
              px-3
              py-2
              mt-6
              tracking-wider
              font-semibold
              rounded
              shadow-md
              text-white
              bg-green-500
              hover:bg-green-600
              border-green-600 border-2
              focus:shadow-outline focus:outline-none focus:ring-2
              ring-offset-current ring-offset-2
              transition
              duration-300
              ease-in-out
              transform
            "
          >
            Sign In
          </button>
        </form>
        <hr class="w-full my-6 border-gray-300" />
        <div class="flex justify-enter">
          <button
            type="button"
            class="
              inline-flex
              w-full
              px-3
              py-3
              font-semibold
              text-black
              transition
              duration-300
              ease-in-out
              transform
              bg-white
              border
              rounded-lg
              border-gray-300
              hover:bg-gray-800 hover:text-white
              focus:outline-none focus:shadow-outline focus:ring-2
              ring-offset-current ring-offset-2
            "
          >
            <div class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  ></path>
                </defs>
                <clipPath id="b">
                  <use xlink:href="#a" overflow="visible"></use>
                </clipPath>
                <path
                  clip-path="url(#b)"
                  fill="#FBBC05"
                  d="M0 37V11l17 13z"
                ></path>
                <path
                  clip-path="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                ></path>
                <path
                  clip-path="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                ></path>
                <path
                  clip-path="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                ></path>
              </svg>
              <span class="ml-4"> Sign in with Google </span>
            </div>
          </button>
          <button
            type="button"
            class="
              inline-flex
              px-3
              py-3
              ml-8
              font-semibold
              text-blue-500
              hover:text-white
              transition
              duration-300
              ease-in-out
              transform
              bg-white
              border
              rounded-lg
              border-gray-300
              focus:outline-none focus:shadow-outline focus:ring-2
              ring-offset-current ring-offset-2
              hover:bg-blue-500
              focus:bg-gray-100
            "
          >
            <div class="flex items-center justify-center">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <p class="mt-8 text-center">
          Need an account?
          <router-link :to="{ name: 'signup' }">
            <a href="#" class="font-semibold text-blue-500 hover:text-blue-700"
              >Sign Up</a
            >
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import TabBar from "../../components/tabbar.vue";

export default {
  name: "SignUp",
  components: {
    TabBar,
  },
};
</script>
