<template>
  <section class="section1 flex row a-start j-start">
    <div class="left flex a-start j-start">
      <h3>There are 5 invoices in your inventory.</h3>
    </div>
    <div class="right flex a-start j-end">
      <p>Filter by:</p>
      <p>Country</p>
      <p>Status</p>
    </div>
  </section>
  <invoice-list></invoice-list>
</template>

<script>
import InvoiceList from '../components/InvoiceList.vue';

export default {
  name: 'Home',
  components: {
    InvoiceList,
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.section1 {
  width: 70%;
  margin-top: 50px;
  margin-left: 170px;

  .left {
    flex: 1 0 auto;

    h3 {
      color: $white;
      font-size: 20px;
      font-weight: normal;
    }
  }

  .right {
    flex: 4 0 auto;

    p {
      color: $dark-gray;
      font-size: 20px;
      font-weight: normal;
      margin-left: 100px;
    }

    p:first-child {
      color: $white;
      font-size: 20px;
    }
  }
}
</style>
