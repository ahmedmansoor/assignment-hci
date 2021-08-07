<template>
  <section
    class="text-gray-800 bg-emptybeach bg-cover bg-top bg-no-repeat container"
  >
    <TabBar></TabBar>
    <!-- <div class="bg-white bg-opacity-5"> -->
    <div class="container flex flex-col px-10 py-20 mx-auto lg:items-center">
      <div
        class="
          flex flex-col
          w-full
          mx-auto
          mb-12
          text-left
          lg:w-2/3 lg:text-center
        "
      >
        <h1
          class="
            mb-6
            text-2xl
            font-semibold
            tracking-tight
            sm:text-5xl
            title-font
            font-heading
          "
        >
          Find Deals for Any Season
        </h1>
        <p
          class="
            mx-auto
            text-base
            font-medium
            leading-relaxed
            text-gray-600
            lg:w-2/3
          "
        >
          Book the best hotels & resorts in Maldives. Choose from 308 available
          Maldives accommodation & save up to 60% on hotel booking online.
        </p>
      </div>
      <p class="font-bold text-2xl text-gray-800">
        Search for available resorts
      </p>
      <div
        class="
          p-5
          flex flex-col
          w-full
          px-0
          md:px-8
          mx-auto
          lg:w-2/3
          sm:flex-row
          justify-center
          self-center
        "
      >
        <div class="bg-white">
          <DatePicker v-model="range" mode="dateTime" :masks="masks" is-range>
            <template v-slot="{ inputValue, inputEvents, isDragging }">
              <div
                class="
                  flex flex-col
                  sm:flex-row
                  items-center
                  justify-items-center justify-between
                  p-3
                "
              >
                <div class="relative flex-grow">
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
                      border
                      rounded
                      w-full
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
                <div class="relative flex-grow">
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
                      border
                      rounded
                      w-full
                    "
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                  />
                </div>
                <button
                  class="
                    mt-3
                    sm:mt-0
                    ml-4
                    flex
                    justify-center
                    self-center
                    items-center
                    h-9
                    px-6
                    py-2
                    w-60
                    sm:max-w-max
                    text-gray-700
                    font-semibold
                    transition
                    duration-300
                    ease-in-out
                    transform
                    rounded
                    bg-yellow-300
                    border-yellow-500 border-2
                    hover:bg-yellow-400
                    focus:shadow-outline focus:outline-none focus:ring-2
                    ring-offset-current ring-offset-2
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
        start: new Date(2021, 7, 6),
        end: new Date(2021, 7, 18),
      },
      masks: {
        input: "YYYY-MM-DD h:mm A",
      },
    };
  },
};
</script>
