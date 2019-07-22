<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </section>
    </Panel>
</template>

<script>
import Panel from "../component/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                title: "定期理财",
                sub: "理财首选",
                rate: "5.60%",
                text: "历史年化回报率",
            }, {
                title: "小白理财",
                sub: "理财首选",
                rate: "4.22%",
                text: "7日年化收益率",
            }, {
                title: "月月盈",
                sub: "养老保障",
                rate: "5%",
                text: "七日年化收益率",
            }, {
                title: "小白基金",
                sub: "天天赚钱",
                rate: "4.27%",
                text: "7日年化收益率",
            }],
        }
    },
}
</script>

<style lang="scss" module>

</style>
