<template>
  <section class="section3 flex column a-center j-center">
    <form class="flex column a-start j-start">
      <h2>New Invoice</h2>
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
        <select id="country">
          <option value="Country" selected disabled>*Select country*</option>
          <option value="France">France</option>
          <option value="Poland">Poland</option>
          <option value="Spain">Spain</option>
        </select>
      </div>
      <div class="flex row a-center j-start">
        <label for="zipCode">Zip Code</label>
        <input type="text" id="zipCode" />
      </div>
      <div class="flex row a-center j-start">
        <label for="total">Total</label>
        <input type="number" id="total" />
      </div>
      <div class="buttons flex row a-center j-start">
        <button type="button" class="btn btn-cancel">Cancel</button>
        <button type="button" class="btn btn-draft">Save as draft</button>
        <button type="button" class="btn btn-create">Create invoice</button>
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
    h2 {
      font-size: 36px;
      color: $white;
      margin-bottom: 30px;
    }

    div {
      margin-bottom: 20px;
      label {
        color: $white;
        width: 100px;
      }

      input {
        width: 200px;
        padding: 2px 5px;
      }
      select {
        width: 200px;
        padding: 2px 5px;
      }
    }

    .buttons {
      margin-top: 230px;
      width: 100%;

      .btn {
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 16px;
        color: $white;
        transition: background-color 0.2s ease-out;
        &:hover {
          cursor: pointer;
        }
        white-space: nowrap;
      }

      .btn-cancel {
        background-color: $red;
        margin-right: 230px;
        &:hover {
          background-color: $red-hover;
        }
      }
      .btn-draft {
        background-color: $dark-gray;
        margin-right: 10px;
        &:hover {
          background-color: $dark-gray-hover;
        }
      }
      .btn-create {
        background-color: $blue;
        &:hover {
          background-color: $blue-hover;
        }
      }
    }
  }
}
</style>
