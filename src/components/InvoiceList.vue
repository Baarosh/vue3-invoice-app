<template>
  <section class="section2 flex column a-start j-start">
    <ul class="flex column a-start j-start">
      <li class="li-header flex row">
        <p @click="setSorting('Invoice Id')">
          Invoice Id
          <transition name="fade">
            <span
              :class="{ 'span-turned': rotate === 'Invoice Id' }"
              v-if="sortingBy === 'Invoice Id'"
            >
              v</span
            ></transition
          >
          <span class="p-line"></span>
        </p>
        <p @click="setSorting('Date')">
          Date
          <transition name="fade">
            <span :class="{ 'span-turned': rotate === 'Date' }" v-if="sortingBy === 'Date'">
              v</span
            ></transition
          >
        </p>
        <p @click="setSorting('Country')">
          Country
          <transition name="fade">
            <span :class="{ 'span-turned': rotate === 'Country' }" v-if="sortingBy === 'Country'">
              v</span
            ></transition
          >
        </p>
        <p @click="setSorting('Zip Code')">
          Zip Code
          <transition name="fade">
            <span :class="{ 'span-turned': rotate === 'Zip Code' }" v-if="sortingBy === 'Zip Code'">
              v</span
            ></transition
          >
        </p>
        <p @click="setSorting('Total')">
          Total
          <transition name="fade">
            <span :class="{ 'span-turned': rotate === 'Total' }" v-if="sortingBy === 'Total'">
              v</span
            ></transition
          >
        </p>
        <p @click="setSorting('Status')">
          Status
          <transition name="fade">
            <span :class="{ 'span-turned': rotate === 'Status' }" v-if="sortingBy === 'Status'">
              v</span
            ></transition
          >
        </p>
        <svg
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
      <li class="li-cell flex row">
        <p>#54203</p>
        <p>24.05.2021</p>
        <p>France</p>
        <p>55-334</p>
        <p>$ 13,34</p>
        <p><span class="p-dot orange"></span>Pending</p>
      </li>
      <li class="li-cell flex row">
        <p>#74323</p>
        <p>15.06.2021</p>
        <p>Poland</p>
        <p>61-210</p>
        <p>$ 643,99</p>
        <p><span class="p-dot gray"></span>Draft</p>
      </li>
      <li class="li-cell flex row">
        <p>#89942</p>
        <p>01.12.2021</p>
        <p>Spain</p>
        <p>12-331</p>
        <p>$ 6435,59</p>
        <p><span class="p-dot green"></span>Paid</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'InvoiceList',
  data() {
    return {
      sortingBy: null,
      rotate: null,
    };
  },
  methods: {
    setSorting(attribute) {
      if (this.sortingBy !== attribute) {
        this.sortingBy = attribute;
        this.rotate = null;
      } else if (this.rotate !== attribute) {
        this.rotate = attribute;
      } else {
        this.rotate = null;
      }
    },
  },
};
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

      span {
        display: inline-block;
        color: $dark-gray;
        transition: transform 0.2s ease-in-out;
      }

      .span-turned {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
