<template>
  <TabBar></TabBar>
  <div
    class="
      max-w-xl
      mx-10
      md:mx-auto
      sm:text-center
      py-16
      pb-6
      lg:max-w-2xl
      mt-5
    "
  >
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
        <span class="relative">The most Embracing </span>
      </span>
      Guesthouses in the Maldives
      <div class="h-1 mt-2 w-60 bg-green-500"></div>
    </h2>

    <p class="text-base text-gray-700 md:text-lg">
      There is something for everyone in these local destinations.
    </p>
  </div>
  <div
    class="
      flex flex-col
      mt-8
      space-y-3
      lg:space-y-0 lg:flex-row
      justify-center
      mx-10
      sm:mx-20
    "
  >
    <!-- dropdowns -->
    <DropDown></DropDown>
    <Atolls></Atolls>

    <input
      type="text"
      class="
        w-full
        px-2
        py-1
        lg:ml-4
        h-10
        rounded-md
        focus:outline-none
        bg-gray-100 bg-opacity-50
        border-2 border-gray-300
        focus:border-green-500 focus:bg-white
        text-gray-700
        tracking-wide
      "
      placeholder="Search for Guesthouses"
    />

    <button
      class="
        px-4
        tracking-wider
        text-white
        capitalize
        lg:w-auto lg:mx-4
        block
        w-full
        h-10
        mt-6
        font-semibold
        rounded
        shadow-md
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
      Search
    </button>
  </div>

  <div
    class="
      px-4
      py-16
      sm:max-w-xl
      md:max-w-full md:px-24
      lg:px-8 lg:py-20
      mx-10
      lg:mx-16
    "
  >
    <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div
        class="
          overflow-hidden
          transition-shadow
          duration-300
          bg-white
          rounded
          shadow-sm
        "
      >
        <!-- card1 -->
        <div class="bg-resort1 bg-cover bg-center">
          <img class="object-cover w-full h-64" />
        </div>
        <div class="p-5 border border-t-0">
          <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
            <a
              class="
                transition-colors
                duration-300
                text-green-600
                hover:text-deep-purple-accent-700
              "
              aria-label="Category"
              >kaafu atoll</a
            >
          </p>
          <!-- rating -->
          <div class="mr-2 flex flex-row mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
          </div>
          <a
            aria-label="Category"
            class="
              inline-block
              mb-3
              text-lg
              font-black
              leading-5
              transition-colors
              duration-300
              hover:text-deep-purple-accent-700
            "
            >Velassaru Maldives</a
          >

          <div class="content-center justify-center self-center">
            <router-link :to="{ name: 'resortdetails' }">
              <a
                aria-label=""
                class="
                  inline-flex
                  items-center
                  font-semibold
                  transition-colors
                  hover:bg-gray-300
                  duration-300
                  p-2
                  bg-gray-200
                  rounded
                  ease-in-out
                  transform
                  tracking-wide
                  cursor-pointer
                  w-full
                  justify-center
                "
                >View Packages</a
              >
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="
          overflow-hidden
          transition-shadow
          duration-300
          bg-white
          rounded
          shadow-sm
        "
      >
        <!-- card2 -->
        <div class="bg-resort3 bg-cover bg-center">
          <img class="object-cover w-full h-64" />
        </div>
        <div class="p-5 border border-t-0">
          <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
            <a
              class="
                transition-colors
                duration-300
                text-green-600
                hover:text-deep-purple-accent-700
              "
              aria-label="Category"
              >thaa atoll</a
            >
          </p>
          <!-- rating -->
          <div class="mr-2 flex flex-row mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
          </div>
          <a
            aria-label="Category"
            class="
              inline-block
              mb-3
              text-lg
              font-black
              leading-5
              transition-colors
              duration-300
              hover:text-deep-purple-accent-700
            "
            >Centara Grand</a
          >

          <div class="content-center justify-center self-center">
            <a
              aria-label=""
              class="
                inline-flex
                items-center
                font-semibold
                transition-colors
                hover:bg-gray-300
                duration-300
                p-2
                bg-gray-200
                rounded
                ease-in-out
                transform
                tracking-wide
                cursor-pointer
                w-full
                justify-center
              "
              >View Packages</a
            >
          </div>
        </div>
      </div>
      <div
        class="
          overflow-hidden
          transition-shadow
          duration-300
          bg-white
          rounded
          shadow-sm
        "
      >
        <!-- card3 -->
        <div class="bg-resort4 bg-cover bg-center">
          <img class="object-cover w-full h-64" />
        </div>
        <div class="p-5 border border-t-0">
          <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
            <a
              class="
                transition-colors
                duration-300
                text-green-600
                hover:text-deep-purple-accent-700
              "
              aria-label="Category"
              >alifu atoll</a
            >
          </p>
          <!-- rating -->
          <div class="mr-2 flex flex-row mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
          </div>
          <a
            aria-label="Category"
            class="
              inline-block
              mb-3
              text-lg
              font-black
              leading-5
              transition-colors
              duration-300
              hover:text-deep-purple-accent-700
            "
            >Ayada Maldives</a
          >

          <div class="content-center justify-center self-center">
            <a
              aria-label=""
              class="
                inline-flex
                items-center
                font-semibold
                transition-colors
                hover:bg-gray-300
                duration-300
                p-2
                bg-gray-200
                rounded
                ease-in-out
                transform
                tracking-wide
                cursor-pointer
                w-full
                justify-center
              "
              >View Packages</a
            >
          </div>
        </div>
      </div>
      <div
        class="
          overflow-hidden
          transition-shadow
          duration-300
          bg-white
          rounded
          shadow-sm
        "
      >
        <!-- card4 -->
        <div class="bg-resort9 bg-cover bg-center">
          <img class="object-cover w-full h-64" />
        </div>
        <div class="p-5 border border-t-0">
          <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
            <a
              class="
                transition-colors
                duration-300
                text-green-600
                hover:text-deep-purple-accent-700
              "
              aria-label="Category"
              >thaa atoll</a
            >
          </p>
          <!-- rating -->
          <div class="mr-2 flex flex-row mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
          </div>
          <a
            aria-label="Category"
            class="
              inline-block
              mb-3
              text-lg
              font-black
              leading-5
              transition-colors
              duration-300
              hover:text-deep-purple-accent-700
            "
            >Club Med Kani</a
          >

          <div class="content-center justify-center self-center">
            <a
              aria-label=""
              class="
                inline-flex
                items-center
                font-semibold
                transition-colors
                hover:bg-gray-300
                duration-300
                p-2
                bg-gray-200
                rounded
                ease-in-out
                transform
                tracking-wide
                cursor-pointer
                w-full
                justify-center
              "
              >View Packages</a
            >
          </div>
        </div>
      </div>
      <div
        class="
          overflow-hidden
          transition-shadow
          duration-300
          bg-white
          rounded
          shadow-sm
        "
      >
        <!-- card5 -->
        <div class="bg-resort7 bg-cover bg-center">
          <img class="object-cover w-full h-64" />
        </div>
        <div class="p-5 border border-t-0">
          <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
            <a
              class="
                transition-colors
                duration-300
                text-green-600
                hover:text-deep-purple-accent-700
              "
              aria-label="Category"
              >laamu atoll</a
            >
          </p>
          <!-- rating -->
          <div class="mr-2 flex flex-row mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
          </div>
          <a
            aria-label="Category"
            class="
              inline-block
              mb-3
              text-lg
              font-black
              leading-5
              transition-colors
              duration-300
              hover:text-deep-purple-accent-700
            "
            >Anantara Dhigu</a
          >

          <div class="content-center justify-center self-center">
            <a
              aria-label=""
              class="
                inline-flex
                items-center
                font-semibold
                transition-colors
                hover:bg-gray-300
                duration-300
                p-2
                bg-gray-200
                rounded
                ease-in-out
                transform
                tracking-wide
                cursor-pointer
                w-full
                justify-center
              "
              >View Packages</a
            >
          </div>
        </div>
      </div>
      <div
        class="
          overflow-hidden
          transition-shadow
          duration-300
          bg-white
          rounded
          shadow-sm
        "
      >
        <!-- card6 -->
        <div class="bg-resort8 bg-cover bg-center">
          <img class="object-cover w-full h-64" />
        </div>
        <div class="p-5 border border-t-0">
          <p class="mb-2 text-xs font-semibold tracking-wide uppercase">
            <a
              class="
                transition-colors
                duration-300
                text-green-600
                hover:text-deep-purple-accent-700
              "
              aria-label="Category"
              >gaafu atoll</a
            >
          </p>
          <!-- rating -->
          <div class="mr-2 flex flex-row mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-800
                bg-yellow-200
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="
                w-4
                h-4
                text-gray-600
                transition-colors
                duration-300
                group-hover:text-deep-purple-accent-700
              "
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                fill="none"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
          </div>
          <a
            aria-label="Category"
            class="
              inline-block
              mb-3
              text-lg
              font-black
              leading-5
              transition-colors
              duration-300
              hover:text-deep-purple-accent-700
            "
            >Atmosphere Kanifushi</a
          >

          <div class="content-center justify-center self-center">
            <a
              aria-label=""
              class="
                inline-flex
                items-center
                font-semibold
                transition-colors
                hover:bg-gray-300
                duration-300
                p-2
                bg-gray-200
                rounded
                ease-in-out
                transform
                tracking-wide
                cursor-pointer
                w-full
                justify-center
              "
              >View Packages</a
            >
          </div>
        </div>
      </div>
      <div
        class="
          overflow-hidden
          transition-shadow
          duration-300
          bg-white
          rounded
          shadow-sm
        "
      ></div>
    </div>
  </div>
</template>

<script>
import TabBar from "../components/tabbar.vue";
import DropDown from "../components/dropDown.vue";
import Atolls from "../components/atolls.vue";

export default {
  name: "Guesthouses",
  components: {
    TabBar,
    DropDown,
    Atolls,
  },
};
</script>
