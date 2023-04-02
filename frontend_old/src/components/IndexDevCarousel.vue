<template>
  <div class="q-pa-md">
    <div class="column">
      <div class="row">
        <div class="col">
          <div
            class="q-mx-auto cursor-pointer"
            style="width: fit-content"
            v-on:click="Increment"
          >
            <q-chip square>
              <q-avatar color="red" text-color="white">{{ count }}</q-avatar>
              Add here
            </q-chip>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
</template>

<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
const Increment = () => {
  count.value++;
  console.log(count.value);
};

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>
