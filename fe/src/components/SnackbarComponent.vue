<template>
  <div>
    <div class="text-center">
      <v-snackbar
        color="success"
        outlined
        absolute
        right
        top
        v-model="success"
        :timeout="timeout"
        class="success"
      >
        {{ success }}
      </v-snackbar>
    </div>
    <div class="text-center">
      <v-snackbar
        color="error"
        outlined
        absolute
        right
        top
        v-model="error"
        :timeout="timeout"
        class="error"
      >
        {{ error }}
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnackbarComponent',
  data: () => ({
    timeout: 200000
  }),
  computed: {
    success: {
      get() {
        return this.$store.getters.tooltipSuccess
      },
      set() {}
    },
    showSucces: {
      get() {
        return Boolean(this.$store.getters.tooltipSuccess)
      },
      set() {}
    },
    error: {
      get() {
        return this.$store.getters.tooltipError
      },
      set() {}
    },
    showError: {
      get() {
        return Boolean(this.$store.getters.tooltipError)
      },
      set() {}
    }
  }
}
</script>

<style lang="scss" scoped>
.success--text {
  .v-snack__content {
    border-color: #087b47;
    background-color: #eeffe7;
    color: #0e8800;
  }
}
.error--text {
  .v-snack__content {
    border-color: #7b0830;
    background-color: #ffe7e7;
    color: #880000;
  }
}
</style>
