<template>
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8 lg:py-20
      bg-gray-100
    "
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p
          class="
            inline-block
            px-3
            py-px
            mb-4
            text-xs
            font-semibold
            tracking-wider
            text-teal-900
            uppercase
            rounded-full
            bg-teal-accent-400
          "
        >
          Our Pricing
        </p>
      </div>
      <h2
        class="
          max-w-lg
          mb-6
          font-sans
          text-3xl
          font-bold
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
                id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
              width="52"
              height="24"
            ></rect>
          </svg>
          <span class="relative">Transparent</span>
        </span>
        pricing. Pay as you grow.
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
    <div
      class="
        grid
        max-w-md
        gap-10
        row-gap-5
        lg:max-w-screen-lg
        sm:row-gap-10
        lg:grid-cols-3
        xl:max-w-screen-lg
        sm:mx-auto
      "
    >
      <!-- package #1 -->
      <div
        class="
          max-w-sm
          mx-auto
          overflow-hidden
          bg-white
          rounded-lg
          shadow-lg
          dark:bg-gray-800
        "
      >
        <div
          class="
            pt-44
            object-cover object-center
            w-full
            h-56
            bg-resort14 bg-cover
          "
        >
          <div
            class="pt-2 flex items-center px-6 py-3 bg-gray-900 bg-opacity-60"
          >
            <img
              class="w-6 h-6 text-white fill-current"
              src="https://img.icons8.com/ios-glyphs/100/ffffff/beach-volleyball.png"
            />
            <h1 class="mx-3 text-lg font-semibold text-white">
              Summer Delight
            </h1>
          </div>
        </div>

        <div class="px-6 py-4">
          <div class="flex mt-2">
            <div class="mr-1 text-5xl font-bold">$88</div>
            <div class="text-gray-700">/ person</div>
          </div>
          <p class="py-2 text-gray-700 dark:text-gray-400">
            Enjoy this Summer with our special package inclusive of Dinner &
            Return speedboat transfers.
          </p>

          <div>
            <p class="mb-2 font-bold tracking-wide">Offers</p>
            <ul class="space-y-2">
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Daily dinner</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">10% off on selected Spa</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Tropical Fruit basket</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Daily buffet</p>
              </li>
            </ul>
          </div>
          <a
            href="/"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              h-12
              px-6
              mt-6
              font-medium
              tracking-wide
              text-white
              transition
              duration-200
              bg-green-600
              rounded
              shadow-md
              hover:bg-green-700
              focus:shadow-outline focus:outline-none
            "
          >
            Book Now
          </a>
        </div>
      </div>

      <!-- package #2 -->
      <div
        class="
          max-w-sm
          mx-auto
          overflow-hidden
          bg-white
          rounded-lg
          shadow-lg
          dark:bg-gray-800
        "
      >
        <div
          class="
            pt-44
            object-cover object-center
            w-full
            h-56
            bg-resort16 bg-cover
          "
        >
          <div
            class="pt-2 flex items-center px-6 py-3 bg-gray-900 bg-opacity-60"
          >
            <img
              class="w-6 h-6 text-white fill-current"
              src="https://img.icons8.com/ios-glyphs/100/ffffff/beach-umbrella.png"
            />
            <h1 class="mx-3 text-lg font-semibold text-white">
              Flexible offer
            </h1>
          </div>
        </div>

        <div class="px-6 py-4">
          <div class="flex mt-2">
            <div class="mr-1 text-5xl font-bold">$115</div>
            <div class="text-gray-700">/ person</div>
          </div>
          <p class="py-2 text-gray-700 dark:text-gray-400">
            Enjoy this Summer with our special package inclusive of Dinner &
            Return speedboat transfers.
          </p>

          <div>
            <p class="mb-2 font-bold tracking-wide">Offers</p>
            <ul class="space-y-2">
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Daily dinner</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">10% off on selected Spa</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Tropical Fruit basket</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Daily buffet</p>
              </li>
            </ul>
          </div>
          <a
            href="/"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              h-12
              px-6
              mt-6
              font-medium
              tracking-wide
              text-white
              transition
              duration-200
              bg-green-600
              rounded
              shadow-md
              hover:bg-green-700
              focus:shadow-outline focus:outline-none
            "
          >
            Book Now
          </a>
        </div>
      </div>

      <!-- package #3 -->
      <div
        class="
          max-w-sm
          mx-auto
          overflow-hidden
          bg-white
          rounded-lg
          shadow-lg
          dark:bg-gray-800
        "
      >
        <div
          class="
            pt-44
            object-cover object-center
            w-full
            h-56
            bg-resort15 bg-cover
          "
        >
          <div
            class="pt-2 flex items-center px-6 py-3 bg-gray-900 bg-opacity-60"
          >
            <img
              class="w-6 h-6 text-white fill-current"
              src="https://img.icons8.com/ios-glyphs/100/ffffff/date--v1.png"
            />

            <h1 class="mx-3 text-lg font-semibold text-white">Blissful</h1>
          </div>
        </div>

        <div class="px-6 py-4">
          <div class="flex mt-2">
            <div class="mr-1 text-5xl font-bold">$210</div>
            <div class="text-gray-700">/ person</div>
          </div>
          <p class="py-2 text-gray-700 dark:text-gray-400">
            Enjoy this Summer with our special package inclusive of Dinner &
            Return speedboat transfers.
          </p>

          <div>
            <p class="mb-2 font-bold tracking-wide">Offers</p>
            <ul class="space-y-2">
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Daily dinner</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">10% off on selected Spa</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Tropical Fruit basket</p>
              </li>
              <li class="flex items-center">
                <div class="mr-2">
                  <svg
                    class="w-4 h-4 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    ></polyline>
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    ></circle>
                  </svg>
                </div>
                <p class="font-medium text-gray-800">Daily buffet</p>
              </li>
            </ul>
          </div>
          <a
            href="/"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              h-12
              px-6
              mt-6
              font-medium
              tracking-wide
              text-white
              transition
              duration-200
              bg-green-600
              rounded
              shadow-md
              hover:bg-green-700
              focus:shadow-outline focus:outline-none
            "
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Packages",
};
</script>
