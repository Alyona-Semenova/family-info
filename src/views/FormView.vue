<template>
  <div class="form-view">
    <div class="form-view__personal-info">
      <div class="form-view__title">Персональные данные</div>
      <div class="form-view__content">
        <InputComponent  
          :type="'text'"  
          :inputName="'Имя'" 
          :inputValue="userInfo.name" 
          @input="updateName" />
        <InputComponent 
          :type="'number'"  
          :inputName="'Возраст'" 
          :inputValue="userInfo.age" 
          @input="updateAge" />
      </div>
    </div>

    <div class="form-view__kids-info">
      <div class="form-view__title form-view__title_with-button">Дети (макс.5) 
        <button v-if="Object.values(userInfo.children).length < 5" 
          class="kids-info__add-kid" @click="addChild"> 
          <img src="@/assets/plus.svg" alt="add-kid"/> Добавить ребенка</button>
      </div>
      <div class="kids-info__rows">
        <template v-if="Object.values(userInfo.children).length">
          <div class="kids-info__row" v-for="(child, index) in userInfo.children" :key="index"> 
            <InputComponent 
              :type="'text'" 
              :inputName="'Имя'" 
              :inputValue="child.name" 
              @input="updateKidName($event, index)" />
            <InputComponent 
              :type="'number'" 
              :inputName="'Возраст'" 
              :inputValue="child.age" 
              @input="updateKidAge($event, index)" />
            <div class="kids-info__delete-row" @click="removeChild(index)"> Удалить </div>
          </div>
        </template>
        <template v-else>
          <div class="kids-info__row_empty"> <i>Пусто</i> </div>
        </template>
    </div>
    </div>

    <div class="form-view__save-info">
      <button class="form-view__save-button" @click="save">Сохранить</button>
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
      userInfo: {},
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
    }
  },

  created() {
    this.userInfo  = JSON.parse(JSON.stringify(this.user));
  },


  methods: {
    /**
     * Обновление имени пользователя
     * @param {string} value - новое значение имени
     */
    updateName(value) {
      this.userInfo.name = value;
    },

    /**
     * Обновление возраста пользователя
     * @param {string} value - новое значение возраста
     */
    updateAge(value) {
      this.userInfo.age = Number(value);
    },
    
    /**
     * Обновление имени ребенка
     * @param {string} value - новое значение имени ребенка
     * @param {number} index - ключ
     */
    updateKidName(value, index) {
      this.userInfo.children[index].name = value;
    },

    /**
     * Обновление возраста ребенка
     * @param {string} value - новое значение возраста ребенка
     * @param {number} index - ключ
     */
     updateKidAge(value, index) {
      const parsedValue = Number(value);
      if (!isNaN(parsedValue)) {
        this.userInfo.children[index].age = parsedValue;
      } else {
        this.userInfo.children[index].age = ''; // Сбрасываем значение, если оно не числовое
      }
    },
    
    /**
     * Добавление нового ребенка
     */
    addChild() {
      if (Object.values(this.userInfo.children).length >= 5) {
        alert ('Максимальное количество детей - 5');
        return;
      } 

      const children = this.userInfo.children || {};
      const lastChildId = Math.max(0, ...Object.keys(children).map(Number)); 
      let newChild = {
          id: lastChildId ? lastChildId + 1 : 1,
          name: '',
          age: '',
      };

      this.$set(this.userInfo.children, newChild.id, newChild);
    },

    /**
     * Удаление ребенка
     */
    removeChild(childId) {
      this.$delete(this.userInfo.children, childId);
    },

    /**
     * Сохранение данных
     */
    save() {
      if (!this.areFieldsValid()) {
        alert('Пожалуйста, заполните все поля.');
        return;
      }
      this.$store.commit('UPDATE_USER', this.userInfo);
      alert('Успешно сохранено!');
    },



     /**
     * Проверка заполненности полей
     */
     areFieldsValid() {
      if (!this.userInfo.name || !this.userInfo.age) {
        return false; 
      }
      for (let child of Object.values(this.userInfo.children)) {
        if (!child.name || !child.age) {
          return false; 
        }
      }
      return true; 
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
  display: flex;
  flex-direction: column;
  gap: 44px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  &__title {
    margin-bottom: 20px;

    &_with-button {
      display: flex;
    align-items: center;
    justify-content: space-between;

    }
  }

  .kids-info {

    &__rows {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__row {
      display: flex;
      align-items: center;
      gap: 18px;

      &_empty {
        display: flex;
        align-items: center;
        justify-content: center;
        color: lightgray;

      }

      & > * {
        flex: 5;
      }
    }
    
    &__delete-row {
      flex: 1;
      font-size: 14px;
      color: #01A7FD;
      cursor: pointer;
    }

    &__add-kid {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      width: 204px;
      height: 44px;
      font-size: 14px;
      line-height: 24px;
      padding: 0;
      border: none;
      color: #01A7FD;
      background-color: transparent;
      border: 2px solid #01A7FD;
      border-radius: 100px;
      cursor: pointer;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

  }

  &__input-container {
    margin-top: 20px;
  }

  &__save-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 118px;
    height: 44px;
    font-size: 14px;
    line-height: 24px;
    padding: 0;
    border: none;
    color: #fff;
    background-color: #01A7FD;
    border: 2px solid #01A7FD;
    border-radius: 100px;
    cursor: pointer;
  }

}
</style>