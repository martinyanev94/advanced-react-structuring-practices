import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    }
  }
});

const app = new Vue({
  el: '#app',
  store,
  data() {
    return {
      newTask: ''
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTask);
      this.newTask = '';
    }
  },
  template: `
      <div>
          <h1>Task List</h1>
          <ul>
              <li v-for="task in tasks" :key="task">{{ task }}</li>
          </ul>
          <input v-model="newTask" placeholder="Enter new task"/>
          <button @click="addTask">Add Task</button>
      </div>
  `
});
