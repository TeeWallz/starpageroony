<template>
  <q-page padding>
    <div class="row wrap justify-start items-start content-start"
          style="height: 500px;">
        <div class="col-3 full-height">
            <LinksTable :state="state" :setJsonInEditor="setJsonInEditor" />
            <button @click="printJsonInEditor()">Show JSON</button>
        </div>
        <div class="col-9 full-height">
            <JsonEditorVue
              v-model="ass" class="custom-editor" />
        </div>
    </div>
  </q-page>
</template>
<style lang="scss" scoped>
.custom-editor {
    height: 100%;
}
</style>

<script setup>
import { reactive, ref } from 'vue'
import JsonEditorVue from 'json-editor-vue'
import LinksTable from 'src/components/link/LinksTable.vue'

const ass = ref({ wee: 1 })
const state = reactive({ jsonInEditor: {} })
// const setJsonInEditor = (newData) => { state.jsonInEditor = JSON.stringify(newData) }
const setJsonInEditor = (newData) => { ass.value = newData }
const printJsonInEditor = () => {
  console.log(ass)
}

</script>
