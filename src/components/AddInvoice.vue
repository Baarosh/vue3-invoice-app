<template>
  <section class="section3 flex column a-center j-center">
    <form class="flex column a-start j-start">
      <h2>Invoice</h2>
      <div class="flex row a-center j-start">
        <label for="invoiceId">Invoice Id</label>
        <input type="text" id="invoiceId" disabled value="#4325" />
      </div>
      <div class="flex row a-center j-start">
        <label for="date">Date</label>
        <input type="date" id="date" />
      </div>
      <div class="flex row a-center j-start">
        <label for="country">Country</label>
        <input type="text" id="country" />
      </div>
      <div class="flex row a-center j-start">
        <label for="zipCode">Zip Code</label>
        <input type="text" id="zipCode" />
      </div>
      <div class="flex row a-center j-start">
        <label for="total">Total</label>
        <input type="number" id="total" />
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.section3 {
  position: absolute;
  width: 700px;
  height: 700px;
  top: 150px;
  left: 40px;
  background: -webkit-linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  background: linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  border: 2px solid $white;
  border-radius: 5px;
  z-index: 99;

  form {
    height: 90%;
    width: 90%;
    border: 1px solid;
  }
}
</style>
