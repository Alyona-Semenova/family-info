<template>
  <div class="preview-view">
    <div class="preview-view__personal-info">
      <div class="preview-view__title">Персональные данные</div>
      <div v-if="user.name && user.age" class="preview-view__name"> {{ getFullNameAndAge(user.name, user.age)}} </div>
      <div v-else-if="!user.name || !user.age" class="preview-view__name"> Нет данных </div>
    </div>

    <div class="preview-view__kids-info kids-info">
      <div class="preview-view__title">Дети</div>
        <div class="kids-info__list"> 
          <div class="kids-info__item" v-for="(kid, index) in user.children" :key="index">{{ getFullNameAndAge(kid.name, kid.age)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewView',

  computed: {
    user() {
      return this.$store.state.user;
    }
  },


  methods: {
    /**
     * Функция получения полного имени и возраста
     * @param {string} name - имя
     * @param {number} age - возраст
     * @returns {string} - полное имя и возраст
     */
    getFullNameAndAge(name, age) {
      return `${name}, ${age} ${this.getAgeString(age)}`;
    },

    /**
     * Функция получения строки возраста
     * @param {number} age - возраст
     * @returns {string} - строка возраста
     */
    getAgeString(age) {
      const lastDigit = age % 10;
      const lastTwoDigits = age % 100;

      if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return "лет"; 
      } else if (lastDigit === 1) {
        return "год"; 
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        return "года";
      } else {
        return "лет";
      }
    },

  }
}
</script>

<style lang="scss" scoped>
.preview-view{
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  &__title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 20px;
  }

  &__name {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  .kids-info {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 20px;

    }

    &__item {
      display: flex;
      align-items: center;
      width: fit-content;
      height: 24px;
      padding: 10px 20px;
      background-color: #F1F1F1;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      border-radius: 5px;

    }
  }
  
}
</style>