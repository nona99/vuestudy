<template>
    <div>
        second page
        <router-link to="/">first page</router-link>
    </div>
</template>

<script>
export default {
  name: 'secondPage',
  mounted() {
    document.title = "second page"
  }
}
</script>
