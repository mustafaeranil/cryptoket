<template>
  <div v-if="bids.length" class="hot-bids">
    <div class="hot-bids__grid">
      <CardNFT
        v-for="bid in filteredBids"
        :key="bid.id"
        :currency="currency"
        :name="bid.name"
        :price="bid.price"
        :favs="bid.fav"
        :image="bid.image"
      />
    </div>
    <AppButton
      v-if="bids.length > 8"
      buttonStyle="stroke"
      @click="expand = !expand"
    >
      {{ toggleButtonText }}
    </AppButton>
  </div>
</template>

<script>
import CardNFT from "./CardNFT.vue"
import AppButton from "./AppButton.vue"
export default {
  components: {
    CardNFT,
    AppButton
  },
  props: {
    bids: {
      type: Array,
      default: () => []
    },
    currency: {
      type: String,
      default: "ETH"
    }
  },
  data() {
    return {
      expand: false
    }
  },
  computed: {
    toggleButtonText() {
      return this.expand ? "Show Less" : "Load More"
    },
    filteredBids() {
      const bids = this.bids

      if (!this.expand) return this.bids.slice(0, 8)

      return bids
    }
  }
}
</script>

<style lang="postcss">
.hot-bids {
  @apply flex flex-col items-center;

  &__grid {
    @apply mb-10 grid w-full grid-cols-2 gap-2.5 lg:mb-14 lg:grid-cols-4 lg:gap-5;
  }
}
</style>
