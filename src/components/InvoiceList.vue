<template>
  <section class="section2 flex column a-start j-start">
    <ul class="flex column a-start j-start">
      <li class="li-header flex row">
        <p @click="setSorting('invoiceId')">
          Invoice Id
          <transition name="fade">
            <span
              class="p-sort"
              :class="{
                'span-turned': sortingAttribute === 'invoiceId' && sortingOrder === 'dsc',
              }"
              v-if="sortingAttribute === 'invoiceId'"
            >
              <svg
                class="svg-sortinvoice"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow 1">
                  <g id="a0">
                    <path
                      id="Vector"
                      d="M396.6 160L416 180.7L256 352L96 180.7L115.3 160L256 310.5L396.6 160Z"
                      fill="#858585"
                    />
                  </g>
                </g>
              </svg> </span
          ></transition>
          <span class="p-line"></span>
        </p>
        <p @click="setSorting('date')">
          Date
          <transition name="fade">
            <span
              class="p-sort"
              :class="{ 'span-turned': sortingAttribute === 'date' && sortingOrder === 'dsc' }"
              v-if="sortingAttribute === 'date'"
            >
              <svg
                class="svg-sortinvoice"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow 1">
                  <g id="a0">
                    <path
                      id="Vector"
                      d="M396.6 160L416 180.7L256 352L96 180.7L115.3 160L256 310.5L396.6 160Z"
                      fill="#858585"
                    />
                  </g>
                </g>
              </svg> </span
          ></transition>
        </p>
        <p @click="setSorting('country')">
          Country
          <transition name="fade">
            <span
              class="p-sort"
              :class="{ 'span-turned': sortingAttribute === 'country' && sortingOrder === 'dsc' }"
              v-if="sortingAttribute === 'country'"
            >
              <svg
                class="svg-sortinvoice"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow 1">
                  <g id="a0">
                    <path
                      id="Vector"
                      d="M396.6 160L416 180.7L256 352L96 180.7L115.3 160L256 310.5L396.6 160Z"
                      fill="#858585"
                    />
                  </g>
                </g>
              </svg> </span
          ></transition>
        </p>
        <p @click="setSorting('zipCode')">
          Zip Code
          <transition name="fade">
            <span
              class="p-sort"
              :class="{ 'span-turned': sortingAttribute === 'zipCode' && sortingOrder === 'dsc' }"
              v-if="sortingAttribute === 'zipCode'"
            >
              <svg
                class="svg-sortinvoice"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow 1">
                  <g id="a0">
                    <path
                      id="Vector"
                      d="M396.6 160L416 180.7L256 352L96 180.7L115.3 160L256 310.5L396.6 160Z"
                      fill="#858585"
                    />
                  </g>
                </g>
              </svg> </span
          ></transition>
        </p>
        <p @click="setSorting('total')">
          Total
          <transition name="fade">
            <span
              class="p-sort"
              :class="{ 'span-turned': sortingAttribute === 'total' && sortingOrder === 'dsc' }"
              v-if="sortingAttribute === 'total'"
            >
              <svg
                class="svg-sortinvoice"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow 1">
                  <g id="a0">
                    <path
                      id="Vector"
                      d="M396.6 160L416 180.7L256 352L96 180.7L115.3 160L256 310.5L396.6 160Z"
                      fill="#858585"
                    />
                  </g>
                </g>
              </svg> </span
          ></transition>
        </p>
        <p @click="setSorting('status')">
          Status
          <transition name="fade">
            <span
              class="p-sort"
              :class="{ 'span-turned': sortingAttribute === 'status' && sortingOrder === 'dsc' }"
              v-if="sortingAttribute === 'status'"
            >
              <svg
                class="svg-sortinvoice"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow 1">
                  <g id="a0">
                    <path
                      id="Vector"
                      d="M396.6 160L416 180.7L256 352L96 180.7L115.3 160L256 310.5L396.6 160Z"
                      fill="#858585"
                    />
                  </g>
                </g>
              </svg> </span
          ></transition>
        </p>
        <svg
          @click="TOGGLE_MODAL_ON"
          class="svg-addinvoice"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="a0">
            <g id="a3">
              <path
                id="Vector"
                d="M15 28C11.26 28 7.74499 26.544 5.10099 23.899C0.778991 19.578 -0.247006 13.025 2.54699 7.595C2.79999 7.104 3.40199 6.911 3.89399 7.163C4.38499 7.415 4.57899 8.018 4.32599 8.51C1.93099 13.165 2.80999 18.781 6.51499 22.485C8.78099 24.752 11.794 26 15 26C18.205 26 21.219 24.752 23.485 22.485C25.751 20.218 27 17.205 27 14C27 10.794 25.752 7.781 23.485 5.515C21.218 3.249 18.206 2 15 2C11.794 2 8.78099 3.249 6.51499 5.515C6.12399 5.906 5.49199 5.906 5.10099 5.515C4.70999 5.124 4.70999 4.492 5.10099 4.101C7.74499 1.457 11.26 0 15 0C18.74 0 22.256 1.457 24.899 4.101C27.544 6.745 29 10.26 29 14C29 17.739 27.544 21.255 24.899 23.899C22.256 26.544 18.74 28 15 28Z"
                fill="#11EF5C"
              />
            </g>
            <g id="a2">
              <path
                id="Vector 2"
                d="M15 20C14.448 20 14 19.553 14 19V9C14 8.448 14.448 8 15 8C15.552 8 16 8.448 16 9V19C16 19.553 15.552 20 15 20Z"
                fill="#11EF5C"
              />
            </g>
            <g id="a1">
              <path
                id="Vector 3"
                d="M20 15H10C9.448 15 9 14.552 9 14C9 13.448 9.448 13 10 13H20C20.553 13 21 13.448 21 14C21 14.552 20.553 15 20 15Z"
                fill="#11EF5C"
              />
            </g>
          </g>
        </svg>
      </li>
      <li
        v-for="invoice in INVOICES_FILTERED"
        :key="invoice.invoiceId"
        class="li-cell flex row"
        @click="pushToDetails(invoice.invoiceId)"
      >
        <p>#{{ invoice.invoiceId }}</p>
        <p>{{ invoice.date }}</p>
        <p>{{ invoice.country }}</p>
        <p>{{ invoice.zipCode }}</p>
        <p>$ {{ invoice.total }}</p>
        <p>
          <span
            class="p-dot"
            :class="{
              orange: invoice.status === 'Pending',
              green: invoice.status === 'Paid',
              gray: invoice.status === 'Draft',
            }"
          ></span
          >{{ invoice.status }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'InvoiceList',
  components: {},
  data() {
    return {
      sortingAttribute: 'date',
      sortingOrder: 'asc',
    };
  },
  computed: {
    INVOICES_FILTERED() {
      return this.$store.getters.INVOICES_FILTERED;
    },
  },
  methods: {
    TOGGLE_MODAL_ON() {
      this.$store.dispatch('TOGGLE_MODAL_ON');
    },
    setSorting(attribute) {
      if (this.sortingAttribute !== attribute) {
        this.sortingAttribute = attribute;
        this.$store.dispatch('SET_SORTING_ATTRIBUTE', this.sortingAttribute);
        this.sortingOrder = 'asc';
        this.$store.dispatch('SET_SORTING_ORDER', this.sortingOrder);
      } else if (this.sortingOrder === 'asc') {
        this.sortingOrder = 'dsc';
        this.$store.dispatch('SET_SORTING_ORDER', this.sortingOrder);
      } else {
        this.sortingOrder = 'asc';
        this.$store.dispatch('SET_SORTING_ORDER', this.sortingOrder);
      }
    },
    pushToDetails(invoiceId) {
      this.$router.push({ name: 'InvoiceDetails', params: { id: invoiceId } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.section2 {
  margin-top: 40px;
  margin-left: 150px;
  width: 75%;
  height: 580px;

  ul {
    padding-top: 10px;
    padding-right: 10px;
    width: 100%;
    list-style: none;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: $dark-blue;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: $dark-gray;
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

    .li-cell {
      padding-top: 20px;
      padding-bottom: 20px;
      border-radius: 10px;
      background-color: $blue;
      margin-bottom: 10px;
      cursor: pointer;
      p {
        position: relative;

        .p-dot {
          position: absolute;
          left: -15px;
          top: 8px;
          border-radius: 50%;
          width: 8px;
          height: 8px;
        }
        .orange {
          background-color: $orange;
        }
        .gray {
          background-color: $gray;
        }
        .green {
          background-color: $green;
        }
      }
    }

    .li-header {
      padding-bottom: 10px;
      margin-bottom: 20px;
      position: relative;

      .p-line {
        position: absolute;
        left: -20px;
        bottom: 0;
        width: 103%;
        min-width: 850px;
        border-bottom: 3px solid $gray;
      }

      .svg-addinvoice {
        position: absolute;
        right: 0;
        height: 100%;
        width: auto;
        top: -5px;

        #a0 path {
          transition: fill 0.2s ease-out;
        }

        &:hover {
          cursor: pointer;
          #a0 path {
            fill: $green-hover;
          }
        }
      }

      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.1s;
      }

      .fade-enter-from,
      .fade-leave-to {
        opacity: 0;
      }

      .fade-enter-to,
      .fade-leave-from {
        opacity: 1;
      }

      p {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-flow: row nowrap;
      }

      span {
        display: inline-block;
        color: $dark-gray;
        transition: transform 0.2s ease-in-out;
      }

      .span-turned {
        transform-origin: center;
        transform: rotate(180deg);
      }

      .p-sort {
        height: 25px;
      }

      .svg-sortinvoice {
        width: auto;
        height: 100%;
      }
    }
  }
}
</style>
