<template>
  <section class="text-gray-800">
    <TabBar class="fixed w-full bg-white z-50"></TabBar>
    <div
      class="
        flex flex-col
        py-16
        lg:py-10
        mx-auto
        lg:items-center
        bg-shoe bg-cover bg-center
      "
    >
      <div
        class="py-10 flex flex-col px-10 sm:px-16 w-full md:mx-auto text-center"
      >
        <h1
          class="
            pt-10
            mb-6
            text-5xl
            font-black
            tracking-tight
            title-font
            font-sans
          "
        >
          Find Deals for Any Season
        </h1>
        <p
          class="
            mx-auto
            sm:px-10
            font-semibold
            leading-relaxed
            text-gray-500
            lg:w-2/3
          "
        >
          Book the best hotels & resorts in Maldives. Choose from 308 available
          Maldives accommodation & save up to 60% on hotel booking online.
        </p>
      </div>
      <div
        class="
          p-5
          flex flex-col
          w-full
          md:flex-row
          justify-center
          self-center
          rounded-lg
        "
      >
        <div class="rounded-lg overflow-hidden shadow-lg mx-10">
          <p
            class="
              font-medium
              text-lg
              px-3
              py-1
              text-center
              tracking-wide
              bg-gray-800
              text-gray-100
              bg-opacity-70
            "
          >
            Search for available resorts
          </p>
          <DatePicker v-model="range" mode="date" :masks="masks" is-range>
            <template v-slot="{ inputValue, inputEvents, isDragging }">
              <div
                class="
                  flex flex-col
                  md:flex-row
                  items-center
                  justify-items-center justify-between
                  p-3
                  pt-3
                  w-full
                  bg-white
                "
              >
                <div class="relative flex-grow w-full md:w-auto">
                  <svg
                    class="
                      text-gray-600
                      w-4
                      h-full
                      mx-2
                      absolute
                      pointer-events-none
                    "
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <input
                    class="
                      flex-grow
                      pl-4
                      text-center
                      py-1
                      bg-gray-100
                      border-2
                      rounded
                      h-10
                      w-full
                      tracking-wide
                      cursor-pointer
                    "
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                  />
                </div>
                <span class="flex-shrink-0 m-2">
                  <svg
                    class="w-4 h-4 stroke-current text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <div class="relative flex-grow w-full md:w-auto">
                  <svg
                    class="
                      text-gray-600
                      w-4
                      h-full
                      mx-2
                      absolute
                      pointer-events-none
                    "
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <input
                    class="
                      flex-grow
                      pl-4
                      text-center
                      py-1
                      bg-gray-100
                      border-2
                      rounded
                      w-full
                      h-10
                      tracking-wide
                      cursor-pointer
                    "
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                  />
                </div>
                <button
                  class="
                    mt-5
                    md:mt-0 md:ml-4
                    flex
                    justify-center
                    self-center
                    items-center
                    h-10
                    px-6
                    font-semibold
                    transition
                    duration-300
                    ease-in-out
                    transform
                    rounded
                    text-gray-700
                    bg-yellow-300
                    border-yellow-400 border-2
                    hover:bg-yellow-400
                    focus:shadow-outline focus:outline-none focus:ring-2
                    ring-offset-current ring-offset-2
                    w-full
                    md:w-auto
                  "
                >
                  Search
                </button>
              </div>
            </template>
          </DatePicker>
        </div>
      </div>
    </div>
  </section>
  <recommendations />
</template>

<script>
import { DatePicker } from "v-calendar";
import Recommendations from "../components/recommend.vue";
import TabBar from "../components/tabbar.vue";

export default {
  name: "Home",
  components: {
    TabBar,
    DatePicker,
    Recommendations,
  },
  data() {
    return {
      range: {
        start: new Date(2021, 7, 20),
        end: new Date(2021, 7, 30),
      },
      masks: {
        input: "DD-MM-YYYY",
      },
    };
  },
};
</script>
