<template>
  <header class="body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <router-link :to="{ name: 'Home' }" tag="button">
        <a
          class="
            flex
            title-font
            font-medium
            items-center
            text-gray-900
            mb-4
            md:mb-0
          "
        >
          <img
            width="60"
            src="https://img.icons8.com/clouds/100/000000/beach.png"
          />
          <span class="ml-3 font-bold text-2xl">Maldives Bookings</span>
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
          <a class="mr-5">Home</a>
        </router-link>
        <router-link :to="{ name: 'resorts' }">
          <a class="mr-5 hover:text-gray-400">Resorts</a>
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <a class="mr-5 hover:text-gray-400">Contact</a>
        </router-link>
        <router-link :to="{ name: 'about' }">
          <a class="mr-5 hover:text-gray-400">About</a>
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
              py-1
              px-3
              focus:outline-none
              bg-yellow-300
              border-yellow-500 border-2
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
// import SignIn from "../views/SignIn.vue";
export default {
  name: "TabBar",
  components: {},
};
</script>
