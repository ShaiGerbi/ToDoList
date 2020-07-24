export default {

  data() {
    return {
      page: null,
      loading: false,
    }
  },

  methods: {
    getData() {
      this.loading = true;
      this.$store.dispatch(`${this.page}/fetch`).then(() => {
        this.loading = false;
      });
    },
  },

  computed: {
    all() {
      return this.$store.getters[`${this.page}/all`];
    },
  },
}
