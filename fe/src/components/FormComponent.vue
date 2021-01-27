<template>
  <v-form>
    <v-checkbox
      required
      v-model="formSchema.loveCat"
      label="Вы любите котиков?"
    ></v-checkbox>
    <v-text-field
      required
      v-model="formSchema.name"
      label="Имя"
      placeholder="Имя"
    ></v-text-field>
    <v-text-field
      v-model="formSchema.lastName"
      label="Фамилия"
      placeholder="Фамилия"
    ></v-text-field>
    <v-text-field
      v-model="formSchema.date"
      type="date"
      label="Дата рождения"
    ></v-text-field>
    <v-text-field
      v-model="formSchema.mail"
      label="E-mail"
      placeholder="E-mail"
    ></v-text-field>
    <v-text-field
      v-model="formSchema.password"
      type="password"
      label="Пароль"
    ></v-text-field>
    <v-file-input
      label="Фотка котика"
      truncate-length="15"
    ></v-file-input>
    <v-btn
      @click="submit"
    >Сохранить</v-btn>
  </v-form>
</template>

<script>
import { axiosMixin } from '../mixins/axios'

export default {
  name: 'FormComponent',
  mixins: [axiosMixin],
  props: {
    mail: String
  },
  data: () => ({
    apiPostUrl: 'http://localhost:3000/api/',
    apiGetUrl: 'http://localhost:3000/api/result',
    apiPutUrl: 'http://localhost:3000/api/',
    formSchema: {
      loveCat: false,
      name: null,
      lastName: null,
      date: null,
      mail: null,
      password: null,
      img: null
    },
    createdFromStore: null
  }),
  methods: {
    async submit() {
      const body = {
        loveCat: this.formSchema.loveCat,
        name: this.formSchema.name,
        lastName: this.formSchema.lastName,
        date: this.formSchema.date,
        mail: this.formSchema.mail,
        password: this.formSchema.password,
        img: this.formSchema.img
      }
      let result = null
      if (this.mail) {
        result = await this.http.put(this.apiPutUrl, body)
      } else {
        result = await this.http.post(this.apiUrl, body)
      }
      if (result.status === 200 || result.status === 201) {
        this.$store.commit('CLEAR_FORM_STATE')
        this.formSchema = {
          loveCat: false,
          name: null,
          lastName: null,
          date: null,
          mail: null,
          password: null,
          img: null
        }
        this.$router.push({ name: 'List' })
        this.$store.commit('SET_TOOLTIP_SUCCESS', 'Данные добавлены успешно')
      }
      console.log(result)
    },
    createFromStore() {
      const formState = this.$store.getters.formState
      this.formSchema = { ...formState }
      this.createdFromStore = true
    }
  },
  watch: {
    'formSchema.loveCat': function(nv, ov) {
      this.$store.commit('SET_LOVE_CAT', nv)
    },
    'formSchema.name': function(nv, ov) {
      this.$store.commit('SET_NAME', nv)
    },
    'formSchema.lastName': function(nv, ov) {
      this.$store.commit('SET_LAST_NAME', nv)
    },
    'formSchema.date': function(nv, ov) {
      this.$store.commit('SET_DATE', nv)
    },
    'formSchema.mail': function(nv, ov) {
      this.$store.commit('SET_MAIL', nv)
    }
  },
  async mounted() {
    if (this.mail) {
      const { data } = await this.http.get(this.apiGetUrl, { params: { mail: this.mail } })
      this.formSchema = { ...data, password: null }
    } else {
      this.createFromStore()
    }
  }
}
</script>
