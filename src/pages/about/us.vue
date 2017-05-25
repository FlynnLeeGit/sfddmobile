<template>
  <div>
    <tab-header :tabs='tabs' />
    <market>
      <market-item>
        <ul class="team">
          <li v-for='team in teamList'
              :key='team.src'
              class="team__item">
            <div class="team__img"></div>
          </li>
        </ul>
      </market-item>
    </market>
  </div>
</template>

<style src='./us.css' scoped></style>

<script>
import TabHeader from '@/components/TabHeader'
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
export default {
  components: {
    TabHeader,
    Market,
    MarketItem
  },
  data () {
    return {
      designList: [
        { src: '' },
        { src: '' },
        { src: '' },
        { src: '' },
        { src: '' }
      ],
      techList: [
        { src: '' }
      ],
      buildList: [
        { src: '' },
        { src: '' },
        { src: '' }
      ]
    }
  },
  computed: {
    tabs () {
      return [
        { to: '/about/us?team=design', name: '设计团队', exact: true },
        { to: '/about/us?team=tech', name: '技术团队', exact: true },
        { to: '/about/us?team=build', name: '施工团队', exact: true }
      ]
    },
    team () {
      return this.$route.query.team
    },
    teamList () {
      return this[this.team + 'List']
    }
  }
}
</script>
