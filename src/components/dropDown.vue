<template>
  <Listbox v-model="selectedEscape">
    <div
      class="
        z-20
        relative
        rounded-md
        shadow-sm
        py-1
        pt-1.5
        h-10
        min-w-max
        text-center
        justify-center
        items-center
        cursor-default
        bg-gray-50
        border-2 border-gray-300
        text-gray-700
      "
    >
      <ListboxButton class="px-20"
        >{{ selectedEscape.name }}
        <span
          class="
            ml-3
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            pointer-events-none
            tracking-wide
          "
        >
          <SelectorIcon
            class="h-5 w-5 bg-gray-50 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <ListboxOptions
        class="
          absolute
          z-20
          mt-1
          w-full
          bg-white
          shadow-lg
          max-h-56
          rounded-md
          py-1
          text-base
          ring-1 ring-black ring-opacity-5
          overflow-auto
          focus:outline-none
        "
      >
        <ListboxOption
          v-for="escape in escapesList"
          :key="escape"
          :value="escape"
          :disabled="escape.unavailable"
          class="hover:bg-yellow-100 hover:text-yellow-700 py-2"
        >
          {{ escape.name }}
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>

<script>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
  },

  setup() {
    const escapesList = [
      { id: 1, name: "All Inclusive", unavailable: false },
      { id: 2, name: "Honeymoon", unavailable: false },
      { id: 3, name: "Luxury", unavailable: false },
      { id: 4, name: "Budget", unavailable: false },
      { id: 5, name: "Family", unavailable: false },
      { id: 6, name: "Events", unavailable: false },
    ];
    const selectedEscape = ref(escapesList[0]);

    return {
      escapesList,
      selectedEscape,
    };
  },
};
</script>
