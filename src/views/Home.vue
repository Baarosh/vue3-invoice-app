<template>
  <section class="section1 flex row a-start j-start">
    <div class="left flex a-center j-start">
      <h3>There are 5 invoices in your inventory.</h3>
    </div>
    <div class="right flex a-center j-end">
      <p>Filter by:</p>
      <!-- <p>Country</p>
      <p>Status</p> -->

      <select id="country-filter">
        <option value="country" selected>*Country*</option>
        <option value="france">France</option>
        <option value="poland">Poland</option>
        <option value="spain">Spain</option>
      </select>

      <select id="status-filter">
        <option value="status" selected>*Status*</option>
        <option value="draft">Draft</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
      </select>
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
      color: $white;
      font-size: 18px;
      margin-left: 100px;
      white-space: nowrap;
      font-weight: 200;
      letter-spacing: 0px;
    }

    select {
      background-color: $dark-blue3;
      margin-left: 50px;
      width: 100%;
      max-width: 130px;
      color: $white;
      border: none;
      padding: 3px 0px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
        rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
      font-weight: 200;
      letter-spacing: 0px;
      option {
        font-weight: 200;
        letter-spacing: 0px;
      }
    }
  }
}
</style>
