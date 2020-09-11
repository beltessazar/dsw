<template>
    <div>
        <img src="../imagens/logo.png" alt="Logo do site">
        <h1>Sistema de Cadastro Vinde Meninos</h1>

      <b-button v-b-modal.form>Cadastro</b-button>
      <b-modal id="form" title="Cadastro Vinde Meninos">
        <Formulario/>
      </b-modal>

        <b-dropdown right text="Planilhas">
          <b-dropdown-item>Crianças</b-dropdown-item>
          <b-dropdown-item>Voluntários</b-dropdown-item>
          <b-dropdown-item>Estagiários</b-dropdown-item>
        </b-dropdown>

        <b-dropdown right text="Grupos">
          <b-dropdown-item v-b-modal.criancas>Crianças</b-dropdown-item>
          <b-modal id="criancas" title="Criancas">
            <div>
              <Criancas></Criancas>
            </div>
        </b-modal>
        <b-dropdown-item v-b-modal.estagiarios>Estagiarios</b-dropdown-item>
          <b-modal id="estagiarios" title="Estagiarios">
            <div>
              <Estagiarios></Estagiarios>
            </div>
        </b-modal>
        <b-dropdown-item v-b-modal.voluntarios>Voluntarios</b-dropdown-item>
          <b-modal id="voluntarios" title="Voluntarios">
            <div>
              <Voluntarios></Voluntarios>
            </div>
        </b-modal>

        </b-dropdown>
    </div>  
</template>

<script>
import Formulario from  "@/components/Formulario.vue"
import Criancas from "@/views/Criancas.vue"
import Voluntarios from "@/views/Voluntarios.vue"
import Estagiarios from "@/views/Estagiarios.vue"
export default {
  name: 'Menu',
  components: {Formulario, Criancas, Voluntarios, Estagiarios}
}

</script>

<style>
b-button{
  position: inline;
  margin: 5px;
}
</style>