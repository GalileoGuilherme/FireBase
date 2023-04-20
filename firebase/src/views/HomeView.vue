<template>
  <div class="home">
    
    <!-- <label>Tarefa: </label> <input type="text" v-model="tarefa"/><br>
    <label>Autor: </label> <input type="text" v-model="autor"/><br><br> -->
    <!-- <button @click="cadastrar">Cadastrar</button> -->
    
  </div>
</template>

<script>
// @ is an alias to /src

// import firebase from '../services/firebaseConnection';




export default {
  name: 'HomeView',
  components: {
    
  },
  // data(){
  //   return{
  //     tarefa: '',
  //     autor: '',
  //   }
  // },
  // methods:{
  //   async cadastrar(){
      
  //     await firebase.firestore().collection('posts')
  //     .doc('123')
  //     .set({
  //       tarefa: this.tarefa,
  //       autor: this.autor
  //     })
  //     .then(()=>{
  //       console.log('Cadastrado')
  //     } 
  //     )

  //   }
  // }
}
</script>
