<template>
  <v-card elevation="2" class="item">
    <v-card-title>{{ userName }} {{ lastName }}</v-card-title>
    <v-card-subtitle
      class="item-subtitle"
      :class="{ success: filled, failed: !filled }">
      {{ filled ? 'Форма заполнена' : 'Форма не заполнена' }}
    </v-card-subtitle>
    <v-card-actions class="item-actions">
      <router-link
        :to="`/form/?login=${mail}`"
      >
        <v-btn
          outlined
          text
        >Редактировать
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ListItemComponent',
  props: {
    userName: String,
    lastName: String,
    filled: Boolean,
    mail: String
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 20px;

  .item-subtitle {
    text-align: left;
  }

  .failed {
    color: #f36666 !important;
  }

  .success {
    color: #42b983 !important;
  }

  .item-actions {
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
  }
}
</style>
