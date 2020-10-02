<template>
    <div>
        <img src="../imagens/logo.png" alt="Logo do site">
        <h1>Sistema de Cadastro Vinde Meninos</h1>

      <b-button v-b-modal.form>Cadastro</b-button>

        <b-dropdown right text="Planilhas">
          <b-dropdown-item v-b-modal.planilhasC >Crianças</b-dropdown-item>
            <b-modal id="planilhasC" size="xl" title="Planilha Crianças">
              <div>
                <Planilhas></Planilhas>
              </div>
            </b-modal>
          <b-dropdown-item  v-b-modal.planilhasV>Voluntários</b-dropdown-item> 
          <b-modal id="planilhasV" size="xl" title="Planilha Voluntários">
              <div>
                <Planilhas></Planilhas>
              </div>
            </b-modal>
          <b-dropdown-item v-b-modal.planilhasE>Estagiários</b-dropdown-item>
          <b-modal id="planilhasE" size="xl" title="Planilha Estagiários">
              <div>
                <Planilhas></Planilhas>
              </div>
            </b-modal>
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

      <!-- Modals diversos -->
      <b-modal id="form"  title="Cadastro Vinde Meninos">
        <Formulario/>
      </b-modal>

    </div>  
</template>

<script>
import Formulario from  "@/components/Formulario.vue"
import Criancas from "@/views/Criancas.vue"
import Voluntarios from "@/views/Voluntarios.vue"
import Estagiarios from "@/views/Estagiarios.vue"
import Planilhas from "@/views/Planilhas.vue"

export default {
  name: 'Menu',
  components: {Formulario, Criancas, Voluntarios, Estagiarios, Planilhas},
  data(){
    return {
      userData:{
      id: "",
      nome: ""
      }
    }
  },
  methods:{
    getUserData(){
      this.$http.get("/api/user")
      .then(response => {
        this.userData = response.data;
      }).error(error => {
        console.log("Erro ou falta de permissão.");
        console.error(error);
        this.$router.push("/");
      });
    }
  },
  mounted(){
    this.getUserData();
  }
}

</script>

<style>
b-button{
  position: inline;
  margin: 5px;
}
b-modal{
  width: 100%;
}
</style>