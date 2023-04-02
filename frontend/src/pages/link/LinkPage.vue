<template>
  <q-page padding>
    <div class="row wrap justify-start items-start content-start" style="height: 500px;">
        <div class="col-3 full-height">
            <LinksTable />
        </div>
        <div class="col-9 full-height">
            <JsonEditorVue v-model="value" v-bind="{/* local config */}" class="custom-editor"/>
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
import JsonEditorVue from 'json-editor-vue'
import LinksTable from 'src/components/link/LinksTable.vue'
</script>
