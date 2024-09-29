<template>
    <a-col>
        <a-card>
            <template #title>
                <a :href="props.link" target="_blank" class="title-link">{{ props.title }}</a>
            </template>
            <template #extra>
                <a :href="props.github" target="_blank"><github-outlined :style="{ color: '#24292E' }"/></a>
            </template>

            <p style="margin-bottom: 16px;">
                {{ props.description }}
            </p>

            <template v-for="skill in props.skills">
                <a-tag color="#09C09B">{{ skill }}</a-tag>
            </template>
        </a-card>
    </a-col>
</template>

<script setup lang="ts">
const props = defineProps<({
    title: string,
    description: string,
    skills: string[],
    link: string,
    github: string
})>();
</script>

<style scoped>
.title-link {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;
}

.title-link:hover {
    color: #09C09B;
}
</style>