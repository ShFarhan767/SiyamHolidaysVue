<template>
    <div class="custom-date-input">
      <input
        v-model="selectedDate"
        type="text"
        class="form-control"
        id="inputCheckOut"
        placeholder="Check Out"
        readonly
        @focus="showDatePicker"
      />
      <input
        v-model="selectedDate"
        type="date"
        class="hidden-input"
        ref="hiddenInput"
        @change="updateVisibleInput"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: ''
      };
    },
    methods: {
      showDatePicker() {
        this.$refs.hiddenInput.click();
      },
      updateVisibleInput() {
        // Update the visible input when a date is selected
        this.$refs.hiddenInput.blur();
      }
    }
  };
  </script>
  
  <style>
  .custom-date-input {
    position: relative;
  }
  
  .hidden-input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  
  .form-control {
    /* Style the text input to look like a regular input */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    margin-top: 100px;
  }
  </style>
  