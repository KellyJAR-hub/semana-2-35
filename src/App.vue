<template>
  <div id="app">
    <div class="container-fluid">
      <div class="card-deck">
        <div class="col 4-mb" v-for="(item, index) of team" :key="index">
          <team-card v-bind:member="item"></team-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from './components/TeamCard.vue';

export default {
  name: "App",
  components: {
    TeamCard
  },
  data() {
    return {
      title: "vivo dentro de VUE",
      team: [
        {
          codigo: 1,
          nombre: "Kelly Julieth Agudelo Rios",
          descripcion: "Estudiante Mision TIC 2022-UTP, edad 30 años, pasatiempo cocinar y hacer manualidades, vive en Medellin - Antioquia.",
          rol: "Desarrollador",
          imagen: "https://placeimg.com/192/192/people"
        },
        {
          codigo: 2,
          nombre: "Jesús María López Amaya",
          //poner los 5 aqui
          descripcion: "Estudiante Mision TIC 2022-UTP, edad 51 años, pasatiempo montar bicicleta, vive en Bogota - DC.",
          rol: "Desarrollador",
          imagen: "https://placeimg.com/192/192/people"
        },
        {
          codigo: 3,
          nombre: "José Ricardo Muñoz Mavisoy",
          //poner los 5 aqui
          descripcion: "Estudiante Mision TIC 2022-UTP, edad 50 años, pasatiempo montar bicicleta y leer, vive en Jamundi - Valle del cauca.",
          rol: "Desarrollador",
          imagen: "https://placeimg.com/192/192/people",
        },
        {
          codigo: 1,
          nombre: "Daniel Mauricio Velandia Velandia",
          //poner los 5 aqui
          descripcion: "Estudiante Mision TIC 2022-UTP, edad 24 años, pasatiempo leer y realizar senderismo, vive en Guatavita - Cundinamarca.",
          rol: "Desarrollador",
          imagen: "https://placeimg.com/192/192/people",
        },
      ],
    };
  },
};
</script>

