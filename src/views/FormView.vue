<template>
  <div class="form-view">
    <div class="form-view__personal-info">
      <span class="form-view__title">Персональные данные</span>
      <InputComponent :inputName="'Имя'" :inputValue="user.name" @input="updateName" />
      <InputComponent :inputName="'Возраст'" :inputValue="user.age" @input="updateAge" />
    </div>
  </div>
</template>

<script>
import InputComponent from '../components/InputComponent.vue';

export default {
  name: 'FormView',
  components: {
    InputComponent,
  },

  data() {
    return {
      user: {
        name: 'Петр',
        age: 99,
        children: {
          1: {
            id: 1,
            name: 'Петр',
            age: 10,
          },
          2: {
            id: 2,
            name: 'Петр',
            age: 14,
          },
        }
      }
    }
  },

  methods: {
    updateName(value) {
      this.user.name = value;
    },

    updateAge(value) {
      this.user.age = Number(value);
    },

  }

}
</script>

<style lang="scss" scoped>
.form-view {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  width: 45%;

  &__title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  &__input-container {
    margin-top: 20px;
  }

}
</style>