<template>
  <header class="body-font px-16 tracking-wide">
    <div class="container flex flex-wrap p-5 flex-col md:flex-row items-center">
      <router-link :to="{ name: 'Home' }" tag="button">
        <a class="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            width="60"
            src="https://img.icons8.com/clouds/100/000000/beach.png"
          />
          <span class="tracking-tight ml-3 font-black font-heading text-2xl"
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
              mr-5
              p-2
              hover:bg-yellow-300
              rounded
              transition
              duration-500
              ease-in-out
              transform
            "
            >Home</a
          >
        </router-link>
        <router-link :to="{ name: 'resorts' }">
          <a
            class="
              mr-5
              p-2
              hover:bg-yellow-300
              rounded
              transition
              duration-500
              ease-in-out
              transform
            "
            >Resorts</a
          >
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <a
            class="
              mr-5
              p-2
              hover:bg-yellow-300
              rounded
              transition
              duration-500
              ease-in-out
              transform
            "
            >Contact</a
          >
        </router-link>
        <router-link :to="{ name: 'about' }">
          <a
            class="
              mr-5
              p-2
              hover:bg-yellow-300
              rounded
              transition
              duration-500
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
              bg-yellow-300
              border-yellow-400 border-2
              hover:bg-yellow-400
              rounded
              text-base
              md:mt-0
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
