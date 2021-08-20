<template>
  <div class="tabs">
    <ul class="border-b flex justify-start cursor-pointer">
      <li
        v-for="title in tabTitles"
        :key="title"
        :class="{ selected: title == selectedTitle }"
        @click="selectedTitle = title"
        class="
          inline-block
          px-4
          py-2
          text-gray-700
          tracking-wide
          hover:text-black
        "
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>
<style scoped>
li.selected {
  border-color: rgba(251, 191, 36, var(--tw-border-opacity));
  border-bottom-width: 2px;
  display: inline-block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}
</style>
