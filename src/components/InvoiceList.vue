<template>
  <section class="section2 flex column a-start j-start">
    <ul class="flex column a-start j-start">
      <li class="header flex row">
        <p>Invoice Id<span class="line"></span></p>
        <p>Date</p>
        <p>Country</p>
        <p>Zip Code</p>
        <p>Total</p>
        <p>Status</p>

        <!-- <img src="../assets/add_invoice.svg" alt="" /> -->
      </li>
      <li class="cell flex row">
        <p>#54203</p>
        <p>24.05.2021</p>
        <p>France</p>
        <p>55-334</p>
        <p>$ 643,34</p>
        <p>Pending</p>
      </li>
      <li class="cell flex row">
        <p>#54203</p>
        <p>24.05.2021</p>
        <p>France</p>
        <p>55-334</p>
        <p>$ 643,34</p>
        <p>Pending</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.section2 {
  margin-top: 50px;
  margin-left: 150px;
  width: 75%;

  ul {
    width: 100%;
    list-style: none;
  }

  li {
    width: 100%;
    padding-left: 20px;

    p {
      flex: 1 0 100px;
      margin-left: 50px;
      color: $white;
      font-size: 16px;
    }

    p:first-child {
      margin-left: 0;
    }
  }

  .cell {
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    background-color: $blue;
    margin-bottom: 10px;
  }

  .header {
    padding-bottom: 10px;
    margin-bottom: 20px;
    position: relative;

    .line {
      position: absolute;
      left: -20px;
      bottom: 0;
      width: 103%;
      min-width: 850px;
      border-bottom: 3px solid $gray;
    }
  }
}
</style>
