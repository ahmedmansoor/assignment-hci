<template>
  <TabBar></TabBar>
  <div>
    <h2
      class="
        py-12
        px-16
        text-3xl
        font-extrabold
        text-black
        dark:text-white
        sm:text-4xl
      "
    >
      <span class="block">Arena Beach Resort</span>
    </h2>
    <div class="px-16 mb-10 w-full grid grid-flow-col grid-cols-2">
      <div class="p-6 pl-0 items-center h-full grid gap-4 grid-cols-2">
        <div class="bg-center bg-cover bg-black w-full h-full rounded">
          <img class="rounded object-cover h-96" />
        </div>
        <div>
          <div class="bg-green-500 bg-center bg-cover rounded">
            <img class="ml-16 mb-5 h-48 w-full" />
          </div>
          <div class="bg-yellow-500 bg-center bg-cover rounded">
            <img class="h-48 w-full" />
          </div>
        </div>
      </div>
      <!-- texts -->
      <div class="w-full">
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
              service is also available.</Tab
            >
            <Tab title="How to get here">How to get here</Tab>
            <Tab title="Contact">Contact</Tab>
          </TabsWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "../components/tabbar.vue";
import TabsWrapper from "../components/tabsWrapper.vue";
import Tab from "../components/tab.vue";

export default {
  name: "ResortDetails",
  components: {
    TabBar,
    TabsWrapper,
    Tab,
  },
};
</script>
