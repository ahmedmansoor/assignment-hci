<template>
  <header class="body-font md:px-12 xl:px-16 tracking-wide shadow-md">
    <div class="hidden lg:block">
      <div
        class="container flex flex-wrap p-4 flex-col md:flex-row items-center"
      >
        <router-link :to="{ name: 'Home' }" tag="button">
          <a class="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="font-black sm:text-xl lg:text-2xl font-heading"
              >Maldives Bookings</span
            >
          </a>
        </router-link>
        <nav
          @click="active"
          class="
            md:ml-auto
            flex flex-wrap
            items-center
            font-semibold
            justify-center
            tracking-wider
            text-gray-700
          "
        >
          <router-link tag="li" :to="{ name: 'Home' }" class="mx-1">
            <a
              class="
                p-1.5
                px-2
                mt-2
                hover:bg-gray-100
                rounded
                transition
                duration-300
                font-medium
                ease-in-out
                transform
              "
              >Home</a
            >
          </router-link>
          <router-link tag="li" :to="{ name: 'resorts' }" class="mx-1">
            <a
              class="
                p-1.5
                px-2
                mt-2
                hover:bg-gray-100
                rounded
                transition
                duration-300
                font-medium
                ease-in-out
                transform
              "
              >Resorts</a
            >
          </router-link>
          <router-link tag="li" :to="{ name: 'guesthouses' }" class="mx-1">
            <a
              class="
                p-1.5
                px-2
                mt-2
                hover:bg-gray-100
                rounded
                transition
                duration-300
                font-medium
                ease-in-out
                transform
              "
              >Guesthouses</a
            >
          </router-link>
          <router-link tag="li" :to="{ name: 'contact' }" class="mx-1">
            <a
              class="
                p-1.5
                px-2
                mt-2
                hover:bg-gray-100
                rounded
                transition
                duration-300
                font-medium
                ease-in-out
                transform
              "
              >Contact</a
            >
          </router-link>
          <router-link tag="li" :to="{ name: 'about' }" class="mx-1">
            <a
              class="
                p-1.5
                px-2
                mt-2
                hover:bg-gray-100
                rounded
                transition
                duration-300
                font-medium
                ease-in-out
                transform
              "
              >About</a
            >
          </router-link>
          <router-link :to="{ name: 'signin' }" tag="button">
            <button
              class="
                inline-flex
                items-center
                font-semibold
                transition
                duration-300
                ease-in-out
                transform
                px-3
                h-8
                rounded
                md:mt-0
                hover:bg-gray-200
                bg-gray-200 bg-opacity-40
                tracking-wider
              "
            >
              Sign In
            </button>
          </router-link>
        </nav>
      </div>
    </div>
    <!-- mobile -->
    <Popover>
      <div class="relative py-3 px-4 sm:px-6 lg:px-8 lg:hidden">
        <nav
          class="
            lg:hidden
            relative
            flex
            items-center
            justify-between
            sm:h-10
            lg:justify-start
          "
          aria-label="Global"
        >
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full lg:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <span
                  class="ml-3 mb-1 font-black font-heading text-2xl lg:hidden"
                  >Maldives Bookings</span
                >
              </a>
              <div class="-mr-2 flex items-center lg:hidden">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-gray-400
                  "
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="
            absolute
            top-0
            inset-x-0
            p-2
            transition
            transform
            origin-top-right
            lg:hidden
            z-50
          "
        >
          <div
            class="
              shadow-md
              bg-white
              ring-1 ring-black ring-opacity-5
              overflow-hidden
              grid grid-cols-1 grid-flow-row
              md:mx-10
              rounded-md
            "
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <span class="mb-1 font-black font-heading text-2xl"
                  >Maldives Bookings</span
                >
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-gray-400
                  "
                >
                  <span class="sr-only">Close main menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <router-link :to="{ name: 'Home' }">
              <a
                class="
                  p-2
                  hover:bg-yellow-100 hover:text-yellow-600
                  transition
                  duration-300
                  font-medium
                  ease-in-out
                  transform
                  block
                  w-full
                  px-5
                  py-2
                  text-center
                "
                >Home</a
              >
            </router-link>
            <router-link :to="{ name: 'resorts' }">
              <a
                class="
                  p-2
                  hover:bg-yellow-100 hover:text-yellow-600
                  transition
                  duration-300
                  font-medium
                  ease-in-out
                  transform
                  block
                  w-full
                  px-5
                  py-2
                  text-center
                "
                >Resorts</a
              >
            </router-link>
            <router-link :to="{ name: 'guesthouses' }">
              <a
                class="
                  p-2
                  hover:bg-yellow-100 hover:text-yellow-600
                  transition
                  duration-300
                  font-medium
                  ease-in-out
                  transform
                  block
                  w-full
                  px-5
                  py-2
                  text-center
                "
                >Guesthouses</a
              >
            </router-link>
            <router-link :to="{ name: 'contact' }">
              <a
                class="
                  p-2
                  hover:bg-yellow-100 hover:text-yellow-600
                  transition
                  duration-300
                  font-medium
                  ease-in-out
                  transform
                  block
                  w-full
                  px-5
                  py-2
                  text-center
                "
                >Contact</a
              >
            </router-link>
            <router-link :to="{ name: 'about' }">
              <a
                class="
                  p-2
                  hover:bg-yellow-100 hover:text-yellow-600
                  transition
                  duration-300
                  font-medium
                  ease-in-out
                  transform
                  block
                  w-full
                  px-5
                  py-2
                  text-center
                "
                >About</a
              >
            </router-link>
            <router-link :to="{ name: 'signin' }" tag="button">
              <button
                class="
                  self-center
                  items-center
                  font-bold
                  transition
                  duration-300
                  ease-in-out
                  transform
                  focus:outline-none
                  hover:bg-gray-200
                  tracking-wide
                  block
                  w-full
                  text-center
                  p-2
                  px-5
                  py-2
                  border border-gray-200
                "
              >
                Sign In
              </button>
            </router-link>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "TabBar",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
};
</script>

<style>
nav .active {
  cursor: pointer;
  --tw-text-opacity: 1;
  color: rgba(180, 83, 9, var(--tw-text-opacity));
  --tw-bg-opacity: 1;
  background-color: rgba(254, 243, 199, var(--tw-bg-opacity));
  font-weight: bold;
  font-size: 1rem;
  line-height: 2rem;
  border-radius: 0.25rem;
}
</style>
l
