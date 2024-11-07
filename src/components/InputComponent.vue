<template>
    <div class="input-container">
        <label :class="{ active: isFocused || inputValue.length }" class="placeholder">{{ inputName }}</label>
        <input type="text" 
            :value="inputValue"
            @input="changeValue" 
            @focus="isFocused = true"
            @blur="isFocused = inputValue.length > 0" 
            required />
    </div>
</template>


<script>
export default {
    name: 'InputComponent',

    props: {
        inputName: {
            type: String,
            default: 'Поле'
        },
        inputValue: {
            default: ''
        }
    },

    data() {
        return {
            isFocused: false,
        }
    },
    methods: {
        checkInput() {
            if (!this.inputValue) {
                this.isFocused = false;
            }
        },

        changeValue(input) {
            this.$emit('input', input.target.value);
        },
    },
}

</script>

<style lang="scss" scoped>
.input-container {
    margin-top: 20px;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    gap: 2px;

    .placeholder {
        background-color: #fff;
        color: #1111117A;
        transition: 0.2s ease all;
        pointer-events: none;
        font-size: 13px;
        font-weight: 400;
        line-height: 15.85px;
    }

    input {
        border: none;
        outline: none;
        flex: 1;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
    }

}
</style>