<script>
export default {
  name: 'OrganizationsList',
  mounted() {
    console.log('OrganizationsList component mounted')
  }
}
</script>
<template>
  <ul>
    <li>Robotics Graduate Student Organization (RoboGrads)</li>
    <li>African Graduate Students Connect (AGSC)</li>
    <li>Treasurer of the Robotics Club at UCA</li>
    <li>Vice President of the Girls Who Code Loop at UCA</li>
    <li>President of the Society of Physics Students at UCA</li>
    <li>President of the National Society of Collegiate Students at UCA</li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>