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
        lg:ml-4
        text-center
        min-w-max
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
          z-10
          mt-1
          bg-white
          shadow-lg
          max-h-56
          w-full
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
      { id: 1, name: "Include All Atolls", unavailable: false },
      { id: 2, name: "HA - North Thiladhunmathi", unavailable: false },
      { id: 3, name: "HDh - South Thiladhunmathi ", unavailable: false },
      { id: 4, name: "Sh - North Miladhunmadulu", unavailable: false },
      { id: 5, name: "N - South Miladhunmadulu", unavailable: false },
      { id: 6, name: "R - North Maalhosmadulu", unavailable: false },
      { id: 7, name: "B - South Maalhosmadulu", unavailable: false },
      { id: 8, name: "Lh - Faadhippolhu", unavailable: false },
      { id: 9, name: "K - Kaafu Atoll", unavailable: false },
      { id: 10, name: "AA - North Ari Atoll", unavailable: false },
      { id: 11, name: "ADh - South Ari Atoll ", unavailable: false },
      { id: 12, name: "V - Felidhu Atoll", unavailable: false },
      { id: 13, name: "M - Mulakatholhu ", unavailable: false },
      { id: 14, name: "F - North Nilandhe Atoll", unavailable: false },
      { id: 15, name: "D - South Nilandhe Atoll", unavailable: false },
      { id: 16, name: "Th - Kolhumadulu", unavailable: false },
      { id: 17, name: "L - Hadhdhunmathi", unavailable: false },
      { id: 18, name: "GA - North Huvadhu Atoll", unavailable: false },
      { id: 19, name: "GDh - South Huvadhu Atoll", unavailable: false },
      { id: 20, name: "Gn - Fuvahmulah", unavailable: false },
      { id: 21, name: "S - Addu Atoll", unavailable: false },
    ];
    const selectedEscape = ref(escapesList[0]);

    return {
      escapesList,
      selectedEscape,
    };
  },
};
</script>
