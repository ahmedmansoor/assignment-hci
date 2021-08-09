<template>
  <TabBar></TabBar>

  <div
    class="
      bg-white
      dark:bg-gray-800
      overflow-hidden
      relative
      lg:flex lg:items-center
    "
  >
    <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h2
        class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
      >
        <span class="block"> Mother hearth host your travel </span>
      </h2>
      <p class="text-md mt-4 text-gray-400">
        The state of Utah in the united states is home to lots of beautiful
        National parks, Bryce national canion park ranks as three of the most
        magnificient &amp; awe inspiring.
      </p>
      <div class="lg:mt-0 lg:flex-shrink-0">
        <div
          class="
            mt-12
            rounded-md
            shadow
            grid
            gap-2
            lg:grid-cols-1
            sm:max-w-sm sm:mx-auto
            lg:max-w-full
          "
        >
          <button
            type="button"
            class="
              py-2
              px-4
              bg-green-500
              hover:bg-green-700
              focus:ring-green-500 focus:ring-offset-green-200
              text-white
              w-full
              transition
              ease-in
              duration-200
              text-center text-base
              font-semibold
              shadow-md
              focus:outline-none focus:ring-2 focus:ring-offset-2
              rounded-lg
            "
          >
            Get started
          </button>
        </div>
      </div>
    </div>
    <div
      class="items-center p-8 lg:p-24 w-full h-full grid gap-4 lg:grid-cols-2"
    >
      <div class="bg-center bg-cover bg-black w-full h-full rounded">
        <img class="rounded object-cover h-96" />
      </div>
      <div>
        <div class="bg-green-500 bg-center bg-cover rounded">
          <img class="ml-16 mb-8 h-44 w-full" />
        </div>
        <div class="bg-yellow-500 bg-center bg-cover rounded">
          <img class="h-44 w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "../components/tabbar.vue";

export default {
  name: "ResortDetails",
  components: {
    TabBar,
  },
};
</script>
