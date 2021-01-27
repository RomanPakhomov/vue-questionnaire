<template>
  <div>
    <div v-for="(item, key) in list" :key="key">
      <ListItemComponent
        :userName="item.name"
        :lastName="item.lastName"
        :mail="item.mail"
        :filled="item.filled"
      ></ListItemComponent>
    </div>
  </div>
</template>

<script>
import { axiosMixin } from '../mixins/axios'
import ListItemComponent from './ListItemComponent.vue'

export default {
  components: { ListItemComponent },
  name: 'ListComponent',
  mixins: [axiosMixin],
  data: () => ({
    apiUrl: '',
    list: []
  }),
  methods: {
    checkItem(item) {
      return Boolean(item.name && item.lastName && item.date && item.img && item.mail)
    }
  },
  async mounted() {
    const res = await this.http.get(this.apiUrl)
    this.list = res.data.map(item => ({ ...item, filled: this.checkItem(item) }))
  }
}
</script>
