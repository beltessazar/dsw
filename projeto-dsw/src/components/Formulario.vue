<template>
  <div>
      <div class="mt-2">Nome: {{""}}</div>
      <b-form-input v-model="nome" placeholder="Entre com seu nome"></b-form-input>

      <div class="mt-1">Data de Nascimento: {{""}}</div>
      <b-form-input type="date" v-model="data" placeholder="Data de nascimento"></b-form-input>

      <div class="mt-3">Nacionalidade: {{""}}</div>
      <b-form-input v-model="nacionalidade" placeholder="Nacionalidade"></b-form-input>

      <div class="mt-2">Endereço: {{""}}</div>
      <b-form-input v-model="nome" endereco=""></b-form-input>

      <div class="mt-1">Bairro: {{""}}</div>
      <b-form-input type="date" v-model="bairro" placeholder=""></b-form-input>

      <div class="mt-3">Cidade: {{""}}</div>
      <b-form-input v-model="cidade" placeholder=""></b-form-input>

      <div class="mt-3">Telefone: {{""}}</div>
      <b-form-input type="" v-model="telefone" placeholder=""></b-form-input>

    <b-button variant="danger">Limpar</b-button>
    <b-button variant="success">Salvar</b-button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        nome: '',
        data: '',
        nacionalidade: '',
      }
    }
  }
</script>

<style>
#fluid{
  widows: 80%;
}
</style>