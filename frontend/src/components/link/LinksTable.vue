<template>
    <div>
        <q-table
            title="Links"
            :rows="links"
            :columns="columns"
            v-model:pagination="pagination"
            row-key="id"
            height="100%"
            >
        </q-table>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useLinksStore } from 'src/stores/links'
import notifyError from 'src/lib/notifyError'

const linksStore = useLinksStore()
const loadingLinks = ref(false)
const links = ref([])
const page = ref(1)
const perPage = ref(10)
const pagination = ref({
  page: 1,
  rowsPerPage: 10,
  totalRowsNumber: 0
})

const columns = [
  {
    name: 'id',
    field: 'id',
    label: 'Id'
  },
  {
    name: 'name',
    field: 'name',
    label: 'Link Set Name'
  },
  {
    name: 'actions',
    label: 'Actions'
  }
]

async function fetchLinks () {
  loadingLinks.value = true
  try {
    const result = await linksStore.fetchLinks(page.value, perPage.value)
    links.value = result.items
    pagination.value.totalRowsNumber = result.totalItems
    console.log(links.value)
  } catch (e) {
    notifyError(e)
  } finally {
    loadingLinks.value = false
  }
}

onMounted(() => {
  fetchLinks()
})
</script>
