<template>
  <TabBar class="fixed w-full bg-white z-10"></TabBar>
  <div>
    <h2
      class="
        pt-12
        px-10
        md:px-16
        text-3xl
        font-black font-heading
        dark:text-white
        sm:text-4xl
      "
    >
      <span class="block">Arena Beach Resort</span>
    </h2>
    <div class="flex px-10 md:px-16 mt-3 text-gray-500 tracking-wide">
      <div
        class="
          flex
          bg-gray-100
          hover:bg-yellow-100
          cursor-pointer
          p-1
          rounded-md
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p class="pr-2">Kaafu Atoll</p>
      </div>
      <p
        class="
          ml-2
          px-2
          py-1
          bg-gray-100
          hover:bg-yellow-100
          cursor-pointer
          rounded-md
        "
      >
        Luxury Resort
      </p>
    </div>
    <div class="md:px-16 px-8 mb-10 w-full grid md:grid-cols-2 my-10">
      <div class="pl-0 items-center h-full grid gap-4 md:grid-cols-2">
        <div class="bg-center bg-cover bg-resort15 w-full h-full rounded">
          <img class="rounded object-cover h-96" />
        </div>
        <div>
          <div class="bg-resort10 bg-center bg-cover rounded h-56 mb-5"></div>
          <div class="bg-resort1 bg-center bg-cover rounded h-56"></div>
        </div>
      </div>
      <!-- texts -->
      <div class="w-full md:ml-8">
        <p class="mt-8 my-5 text-md text-gray-500">
          Offering a barbecue and children's playground, Olhumathi View Inn is
          located in Ukulhas. The guest house has a fitness centre and a private
          beach area. Free private parking is available on site.
        </p>
        <!-- <div class="lg:mt-0 lg:flex-shrink-0">
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
          ></div>
        </div> -->
        <div>
          <!-- tabs1 -->
          <TabsWrapper>
            <Tab title="About" class="text-gray-500 py-5"
              >Each room is equipped with a flat-screen TV. Some rooms include a
              seating area for your convenience. The rooms are fitted with a
              private bathroom fitted with a bath or shower. Extras include
              bathrobes, slippers, and free toiletries. Olhumathi View Inn
              features free WiFi throughout the property. You will find shops on
              the property. Olhumathi restaurant serves local and international
              cuisines as well as special dietary meals upon guest request. Room
              service is also available.
            </Tab>
            <Tab title="How to get here" class="text-gray-500 py-5"
              >North Male Atoll consists of two separate atolls: North Male
              Atoll and South Male Atoll, with over 100 islands of inhabited
              islands and resort islands. The resort is located at the
              Kodhipparu island in the North Male Atoll, just a mere 20 minutes
              speedboat ride from the Velana International airport. <br /><br />
              North Male Atoll consists of two separate atolls: North Male Atoll
              and South Male Atoll, with over 100 islands of inhabited islands
              and resort islands.
            </Tab>
            <Tab title="Contact" class="text-gray-500 py-5">
              Arena Beach Resort <br />
              Republic of Maldives <br /><br />
              +960 6454555 <br />
              +960 5874156 <br />
              info@maldivesbooking.com
              <br />
              <br />
              <div class="flex items-center mt-4 space-x-4 sm:mt-0">
                <a
                  href="/"
                  class="
                    text-gray-500
                    transition-colors
                    duration-300
                    hover:text-teal-accent-400
                  "
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/"
                  class="
                    text-gray-500
                    transition-colors
                    duration-300
                    hover:text-teal-accent-400
                  "
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                    <circle cx="15" cy="15" r="4"></circle>
                    <path
                      d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/"
                  class="
                    text-gray-500
                    transition-colors
                    duration-300
                    hover:text-teal-accent-400
                  "
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                  </svg>
                </a>
              </div>
            </Tab>
          </TabsWrapper>
        </div>
      </div>
    </div>
  </div>
  <Packages></Packages>
</template>

<script>
import TabBar from "../components/tabbar.vue";
import TabsWrapper from "../components/tabsWrapper.vue";
import Tab from "../components/tab.vue";
import Packages from "../components/packages.vue";

export default {
  name: "ResortDetails",
  components: {
    TabBar,
    TabsWrapper,
    Tab,
    Packages,
  },
};
</script>
