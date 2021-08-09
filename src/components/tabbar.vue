<template>
  <header class="body-font md:px-12 xl:px-16 tracking-wide">
    <div class="container flex flex-wrap p-5 flex-col md:flex-row items-center">
      <router-link :to="{ name: 'Home' }" tag="button">
        <a class="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
          <!-- <img
            width="60"
            src="https://img.icons8.com/clouds/100/000000/beach.png"
          /> -->
          <span class="ml-3 mb-1 font-black font-sans sm:text-xl lg:text-2xl"
            >Maldives Bookings</span
          >
        </a>
      </router-link>
      <nav
        class="
          md:ml-auto
          flex flex-wrap
          items-center
          text-base
          font-semibold
          justify-center
          text-gray-700
        "
      >
        <router-link :to="{ name: 'Home' }">
          <a
            class="
              p-2
              mx-2
              mt-2
              hover:bg-yellow-300
              rounded
              transition
              duration-300
              font-medium
              text-base
              ease-in-out
              transform
            "
            >Home</a
          >
        </router-link>
        <router-link :to="{ name: 'resorts' }">
          <a
            class="
              p-2
              mx-2
              mt-2
              hover:bg-yellow-300
              rounded
              transition
              duration-300
              font-medium
              text-base
              ease-in-out
              transform
            "
            >Resorts</a
          >
        </router-link>
        <router-link :to="{ name: 'guesthouses' }">
          <a
            class="
              p-2
              mx-2
              mt-2
              hover:bg-yellow-300
              rounded
              transition
              duration-300
              font-medium
              text-base
              ease-in-out
              transform
            "
            >Guesthouses</a
          >
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <a
            class="
              p-2
              mx-2
              mt-2
              hover:bg-yellow-300
              rounded
              transition
              duration-300
              font-medium
              text-base
              ease-in-out
              transform
            "
            >Contact</a
          >
        </router-link>
        <router-link :to="{ name: 'about' }">
          <a
            class="
              p-2
              mx-2
              mt-2
              hover:bg-yellow-300
              rounded
              transition
              duration-300
              font-medium
              text-base
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
              font-bold
              transition
              duration-300
              ease-in-out
              transform
              py-1
              px-3
              focus:outline-none
              hover:bg-yellow-400
              rounded
              text-base
              md:mt-0
              p-2
              bg-gray-200
              tracking-wide
            "
          >
            Sign In
          </button>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>
