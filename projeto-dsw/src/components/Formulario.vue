<template>
  <div>
    <b-form @submit="onSubmit">
      <div class="mt-1">Nome: {{nome}}</div>
      <b-form-input v-model="usuarioModel.nome" placeholder=""></b-form-input>

      <div class="mt-2">Data de Nascimento: {{data}}</div>
      <b-form-input type="date" v-model="usuarioModel.nome" placeholder="Data de nascimento"></b-form-input>

      <div class="mt-3">Nacionalidade: {{ nacionalidade }}</div>
      <b-form-input v-model="usuarioModel.nacionalidade" placeholder="Nacionalidade"></b-form-input>

      <div class="mt-4">Endereço: {{endereco}}</div>
      <b-form-input v-model="usuarioModel.endereco" ></b-form-input>

      <div class="mt-5">Bairro: {{bairro}}</div>
      <b-form-input v-model="usuarioModel.bairro" ></b-form-input>

      <div class="mt-6">Cidade: {{cidade}}</div>
      <b-form-input v-model="usuarioModel.cidade" placeholder=""></b-form-input>

      <div class="mt-7">Telefone: {{telefone}}</div>
      <b-form-input type="" v-model="usuarioModel.telefone" placeholder=""></b-form-input>

      <b-form-group label="Grupo">
      <b-form-radio v-model="selected" name="some-radios" value="Estagiário">Estagiário</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="Voluntário">Voluntário</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="Criança">Criança</b-form-radio>
      </b-form-group>
      
      <div class="mt-3">Grupo Selecionado: <strong>{{ usuarioModel.selected }}</strong></div>

    <b-button variant="danger">Limpar</b-button>
    <b-button type="submit" fvariant="success">Salvar</b-button>

    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Formulario',
    props:{
      usuarioEdit:{
        nome: String,
        nascimento: Date,
        endereco: String,
        bairro: String,
        cidade: String,
        telefone: String,
        selected: String
      },
      callback: Function
    },
    methods: {
      onSubmit(){
        this.callback(this.usuarioModel);
      },
      salvarUsuario(){
        this.usuarioModel.callback = () => {

        }
      }
    },
    data() {
      return {
        usuarioModel:{
          nome: 'Digite nome do usuário',
          data: new Date(),
          nacionalidade: '',
          endereco: '',
          bairro: '',
          cidade: '',
          telefone:'',
          foto:'',
          selected: '',
          callback: null
        }
      }
    },
    mounted(){
      if(this.usuarioEdit){
        this.usuarioModel.nome = this.usuarioEdit.nome;
        this.usuarioModel.data = new Date();
        this.usuarioModel.endereco = this.usuarioEdit.endereco;
        this.usuarioModel.bairro = this.usuarioEdit.bairro;
        this.usuarioModel.cidade = this.usuarioEdit.cidade;
        this.usuarioModel.telefone = this.usuarioEdit.telefone;
        this.usuarioModel.selected = this.usuarioEdit.selected;
      }
    }
  }
</script>

<style>
#fluid{
  widows: 80%;
}
</style>