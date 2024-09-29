<template>
    <div style="display: flex; gap: 12px;">
        <div style="width: 50px;">
            <img style="border-radius: 100%; width: 100%;" :src="props.image" />
        </div>
        <div style="align-self: center; width: 100%;">
            <a-typography-text strong>{{ props.organization }}</a-typography-text>

            <br />

            <div style="display: flex; justify-content: space-between;">
                <div style="width: 60%;">
                    <a-typography-text>
                        <span 
                            v-for="(line, index) in props.subtitle" 
                            :key="index" 
                            class="subtitle-line"
                        >
                            {{ line }}
                        </span>
                    </a-typography-text>
                </div>
                <a-typography-text style="color: gray; font-size: 12px; width: 40%;" align="right">{{ props.date }}</a-typography-text>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    organization: string;
    subtitle: string[];
    image: string;
    date: string;
}>();
</script>

<style scoped>
.subtitle-line {
    display: block;
}
</style>