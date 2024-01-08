<template>
    <div>
        <Link href="/listing">Listings</Link>&nbsp;
        <Link href="/listing/create">New Listing</Link>
        <div v-if="typeof page.props !== 'undefined' && typeof page.props.flash !== 'undefined' && page.props.flash.success" class="success">
            {{ page.props.flash.success }}
        </div>
    </div>
    <slot>Default</slot>
</template>
<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
const page = usePage()
</script>
<style scoped>
    .success {
        background-color: green;
        color: white;
    }
</style>
