<template>
  <FormComponent :mail="$route.query.login"></FormComponent>
</template>

<script>
import FormComponent from '../components/FormComponent.vue'

export default {
  name: 'Form',
  components: { FormComponent }
}
</script>
