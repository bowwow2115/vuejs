<template>
  <li>
    <header><h1>{{ name }} {{ isFavorite ===  true ? '(Favorite)' : '' }}</h1></header>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite()">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend()">Delete Friend</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      validator: function(value) {
        return value === true || value === false;
      }
    },
  },
  emits: {
    'toggle-favorite': function(id) {
      if(id) {
        return true;
      } else {
        console.warn('id is missing');
        return false;
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete', this.id);
    },
  }
};
</script>

<style>

</style>
