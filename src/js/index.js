const { createApp } = Vue;

createApp({
  data() {
    return {
      dischi: [],
    };
  },
  methods: {
    getDischi() {
      axios.get("server.php").then((response) => {
        this.dischi = response.data;
      });
    },
  },
  created() {
    this.getDischi();
  },
}).mount("#app");
