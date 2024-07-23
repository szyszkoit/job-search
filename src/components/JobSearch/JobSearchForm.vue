<template>
  <form
    class="border-gray-brand-3 flex h-12 w-full items-center rounded-3xl border border-solid"
    action=""
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute -top-10 left-0" for="">Role</label>
        <text-input v-model="role" placeholder="Software engineer" />
      </div>
      <span class="flex items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">
        in
      </span>
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute -top-10 left-0" for="">Where ?</label>
        <text-input v-model="location" placeholder="Los Angeles" />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>
<script>
import ActionButton from "../Shared/ActionButton.vue"
import TextInput from "../Shared/TextInput.vue"

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      role: "",
      location: ""
    }
  }
}
</script>
