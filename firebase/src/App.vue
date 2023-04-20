<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <label>Tarefa: </label> <input type="text" v-model="tarefa"/><br>
    <label>Autor: </label> <input type="text" v-model="autor"/><br><br>
    <button @click="cadastrar">Cadastrar</button>

    <router-view/>
  </div>
</template>

<script>
import firebase from './services/firebaseConnection';

export default {
  name: 'App',
  data(){
    return{
      tarefa: '',
      autor: ''
    }
  },
  methods:{
    async cadastrar(){
      await firebase.firestore().collection('posts')
      .add({
        tarefa: this.tarefa,
        autor: this.autor
      })
      .then(()=>{
       this.autor = '';
       this.tarefa = '';
       console.log('CADASTRADO COM SUCESSO!'); 
      })
      .catch((error)=>{
        console.log('GEROU ALGUM ERRO: ' + error);
      })

    },
    async bucarPosts(){
      await firebase.firestore().collection('posts')
      .doc('123')
      .get()
      .then((snapshot)=>{
        this.tarefa = snapshot.data().tarefa;
        this.autor = snapshot.data().autor;
      })
      .catch((error)=>{
        console.log('ERROR AO BUSCAR: ' + error)
      })

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
