<template>
  <div class="card text-white bg-info mb-3 md-3">
    <div class="d-flex justify-content-center p-2">
      <img 
        v-bind:src="member.imagen"
        max-width="300px"
        height="300px"
        viewBox="0 0 16 16"
        class="bi bi-person-bounding-box"
        alt="foto-Kelly"
      />
    </div>

    <div class="card-body">
      <h5 class="card-title">{{member.nombre}}</h5>
      <p class="card-body text-white">{{member.descripcion}}</p>
      <p class="card-body text-white"><span>Codigo :</span>{{member.codigo}} </p>
      <p class="card-body text-white" ><span>Rol :</span>{{member.rol}}</p>
      <div class="d-flex container-fluid justify-content-center pb-2 mt-n2">
        <a href="#team" class="btn btn-primary">Contactar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<style scoped>
</style>
