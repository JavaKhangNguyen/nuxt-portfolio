<template>
    <a-col>
        <a-card :title="props.title">
            <template #extra>
                <a :href="github" target="_blank"><github-outlined :style="{ color: '#24292E' }"/></a>
                <a :href="link" target="_blank" style="margin-left: 10px;"><global-outlined :style="{ color: '#09C09B' }"/></a>
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