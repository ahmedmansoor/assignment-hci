<template>
  <TabBar></TabBar>
  <section class="text-gray-600 body-font relative mx-5 sm:mx-16">
    <div class="container px-5 py-5 mx-auto mb-10">
      <div class="flex flex-col text-center w-full mb-12">
        <h2
          class="
            max-w-lg
            mb-6
            font-sans
            text-3xl
            font-black
            leading-none
            tracking-tight
            text-gray-900
            sm:text-4xl
            md:mx-auto
          "
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="
                absolute
                top-0
                left-0
                z-0
                hidden
                w-32
                -mt-8
                -ml-20
                text-blue-gray-100
                lg:w-32 lg:-ml-28 lg:-mt-10
                sm:block
              "
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span class="relative">Contact </span>
          </span>
          Us
        </h2>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Any question or remarks? Just write us a message.
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600"
                >Name</label
              >
              <input
                type="text"
                placeholder="Full Name"
                class="
                  w-full
                  rounded
                  bg-gray-100 bg-opacity-50
                  border-2 border-gray-300
                  focus:border-green-500 focus:bg-white focus:ring-green-200
                  text-gray-700
                  focus:ring-2
                  text-base
                  outline-none
                  py-1
                  px-3
                  h-10
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
                type="email"
                placeholder="Email Address"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border-2 border-gray-300
                  focus:border-green-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-green-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  h-10
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border-2 border-gray-300
                  focus:border-green-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-green-200
                  h-32
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  resize-none
                  leading-6
                  transition-colors
                  duration-200
                  ease-in-out
                "
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              class="
                flex
                mx-auto
                text-white
                bg-green-500
                border-0
                py-2
                px-8
                focus:outline-none
                hover:bg-green-600
                rounded
                text-lg
              "
            >
              Send
            </button>
          </div>
          <div
            class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
          >
            <a class="text-green-500">info@maldivesbookings.com</a>
            <p class="leading-normal my-5">
              Ministry of Tourism <br />The Republic of Maldives
            </p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
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
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabBar from "../components/tabbar.vue";

export default {
  name: "Contact",
  components: {
    TabBar,
  },
};
</script>
