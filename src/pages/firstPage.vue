<template>
    <div>
        first page 
        <router-link to="/secondPage">second page</router-link>
    </div>
</template>

<script>
export default {
  name: 'firstPage',
  mounted() {
    document.title = "first page"
  },
}
</script>
