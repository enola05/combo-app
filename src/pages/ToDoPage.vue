<template>
    <!-- <div>Todo</div> -->
    <div class="container">
      <div class="inline-block">
        <q-input class="inline-block" v-model="state.new_todo"></q-input>
        <q-btn @click="addToList()">ADD</q-btn>
      </div>
  
      <div class="item-block">
        <div
          class="inline-block item"
          v-for="todo in state.todo_list"
          v-bind:key="todo"
        >
          <q-item-label class="float-left inline-block">{{ todo }}</q-item-label>
          <q-btn class="float-right" @click="removeItem(todo)">Remove</q-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  const state = reactive({
    new_todo: "",
    todo_list: [],
  });
  function addToList() {
    state.todo_list.push(state.new_todo);
    state.new_todo = "";
  }
  function removeItem(todo) {
    const index = state.todo_list.indexOf(todo);
    state.todo_list.splice(index, 1);
  }
  </script>
  
  <style>
  .item-block {
    margin: 20px;
    height: 60vh;
    width: 50vh;
    /* background-color: bisque; */
    border-color: black;
    border: solid;
  }
  .item {
    /* margin: 10px; */
    margin-top: 10px;
    width: 30vw;
    height: 5vh;
  }
  .container {
    height: 50vh;
    width: 50vw;
    /* background-color: bisque; */
    margin: 20vh;
    text-align: center;
  }
  </style>
  