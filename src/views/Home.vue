<template>
  <section class="home flex row a-start j-start">
    <div class="home__left flex a-center j-start">
      <h3 class="home__left_h3">
        There are
        <span>{{ getInvoicesFiltered.length }}</span> invoices in your inventory.
        <span class="home__left_h3_span" v-if="filterCountry !== 'Country' || filterStatus !== 'Status'"
          >Filters applied.</span
        >
      </h3>
    </div>
    <div class="home__right flex a-center j-end">
      <p>Filter by:</p>
      <select id="filter-country" v-model="filterCountry" @change="setFilterCountry(filterCountry)">
        <option value="Country" selected>*Country*</option>
        <option value="France">France</option>
        <option value="Poland">Poland</option>
        <option value="Spain">Spain</option>
      </select>
      <select id="filter-status" v-model="filterStatus" @change="setFilterStatus(filterStatus)">
        <option value="Status" selected>*Status*</option>
        <option value="Draft">Draft</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  </section>
  <invoice-list></invoice-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import InvoiceList from '../components/InvoiceList.vue';

export default {
  name: 'Home',
  components: {
    InvoiceList,
  },
  data() {
    return {
      filterCountry: 'Country',
      filterStatus: 'Status',
    };
  },
  computed: {
    ...mapGetters(['getInvoicesFiltered']),
  },
  methods: {
    ...mapActions(['setFilterCountry', 'setFilterStatus']),
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.home {
  width: 70%;
  margin-top: 50px;
  margin-left: 170px;

  .home__left {
    flex: 1 0 auto;

    h3 {
      color: $white;
      font-size: 20px;
      font-weight: normal;
      position: relative;
      span {
        color: $green;
        font-size: 20px;
        font-weight: normal;
      }

      .home__left_h3_span {
        position: absolute;
        top: 100%;
        left: 0;
      }
    }
  }

  .home__right {
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
