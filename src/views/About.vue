<template>
  <TabBar></TabBar>
  <section id="About" class="flex flex-col items-center h-screen md:flex-row">
    <div
      class="
        hidden
        w-full
        h-screen
        bg-sun bg-center bg-cover
        lg:block
        md:w-1/3
        lg:w-2/3
      "
    >
      <img alt="" class="object-cover w-full h-full" />
    </div>
    <div
      class="
        flex
        items-center
        justify-center
        w-full
        h-screen
        px-20
        bg-white
        md:max-w-md
        lg:max-w-full
        md:mx-auto md:w-1/2
      "
    >
      <div class="w-full h-100">
        <h1
          class="
            mt-8
            mb-5
            sm:text-3xl
            text-2xl
            font-black
            text-black
            tracking-ringtighter
            title-font
            font-sans
          "
        >
          About Us
        </h1>
        <p class="mb-6 text-gray-900">
          The Maldives Marketing & Public Relations Corporation (MMPRC) is the
          national tourism office of the Maldives responsible for carrying out
          promotional activities to become the most preferred island destination
          of the world under the theme of the Maldives...the Sunny Side of Life;
          whilst adhering to its mission to promote quality and sustainable
          growth in the local tourism industry to deliver long term economic,
          social and cultural benefits to the country.
        </p>
        <div
          class="
            px-4
            py-16
            mx-auto
            sm:max-w-xl
            md:max-w-full
            lg:max-w-screen-xl
            md:px-24
            lg:px-8
          "
        >
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 tracking-wide">
            <div class="text-center content-center">
              <div
                class="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  mx-auto
                  mb-3
                  rounded-full
                  bg-teal-accent-400
                  sm:w-12 sm:h-12
                "
              >
                <img
                  src="https://img.icons8.com/fluency/96/000000/sunbathe.png"
                />
              </div>
              <h6 class="text-2xl font-semibold text-deep-purple-accent-400">
                300
              </h6>
              <p class="mb-2 font-bold text-md">Resorts</p>
            </div>
            <div class="text-center">
              <div
                class="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  mx-auto
                  mb-3
                  rounded-full
                  bg-teal-accent-400
                  sm:w-12 sm:h-12
                "
              >
                <img
                  src="https://img.icons8.com/fluency/96/000000/bungalow.png"
                />
              </div>
              <h6 class="text-2xl font-semibold text-deep-purple-accent-400">
                660
              </h6>
              <p class="mb-2 font-bold text-md">Guesthouses</p>
            </div>
            <div class="text-center">
              <div
                class="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  mx-auto
                  mb-3
                  rounded-full
                  bg-teal-accent-400
                  sm:w-12 sm:h-12
                "
              >
                <img
                  src="https://img.icons8.com/fluency/96/000000/5-star-hotel.png"
                />
              </div>
              <h6 class="text-2xl font-semibold text-deep-purple-accent-400">
                120
              </h6>
              <p class="mb-2 font-bold text-md">Hotels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabBar from "../components/tabbar.vue";

export default {
  name: "About",
  components: {
    TabBar,
  },
};
</script>
