const { createApp } = Vue;

createApp({
  data() {
    return {
      dischi: [],
      infoDisco: null,
      activeId: null,
    };
  },
  methods: {
    getDischi() {
      axios.get("server.php").then((response) => {
        this.dischi = response.data;
      });
    },
    getInfo(id) {
      if (this.infoDisco !== null && this.activeId === id) {
        this.infoDisco = null;
      } else {
        this.activeId = id;
        axios.get("server.php", { params: { id: id } }).then((response) => {
          this.infoDisco = {
            name: response.data.name,
            author: response.data.author,
            year: response.data.year,
          };
        });
      }
    },
  },
  created() {
    this.getDischi();
  },
}).mount("#app");
