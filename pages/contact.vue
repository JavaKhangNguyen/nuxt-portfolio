<template>
    <div class="content-vh">
        <div class="content">
            <a-typography-title style="font-weight: bold; font-size: 40px;">
                Nguyen Phuc Khang -
                <span style="color: #09C09B;">{{ content.role}}</span>
            </a-typography-title>
            <a-typography-paragraph>
                Please feel free to reach out to me at using your preferred ways included below: 
            </a-typography-paragraph>
            
            <a :href="'tel:+84' + content.phone">
                <a-button type="text">
                    <PhoneOutlined :style="{ color: '#09C09B' }"/> 0913324868
                </a-button>
            </a>

            <br />
                
            <a :href="'mailto:' + content.email">
                <a-button type="text">
                    <mail-outlined :style="{ color: '#09C09B' }"/> khang2073@gmail.com
                </a-button>
            </a>
            <a-divider></a-divider>
            
            <a :href="content.social_links.facebook" target="_blank">
                <a-button type="text">
                    <facebook-outlined :style="{ color: '#1877F2' }"/> Nguyễn Phúc Khang
                </a-button>
            </a>

            <br />

            <a :href="content.social_links.linkedin" target="_blank">
                <a-button type="text">
                    <linkedin-outlined :style="{ color: '#0077B5' }"/> Nguyễn Phúc Khang
                </a-button>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import content from '~/static/content.json';

useHead({
    title: "Contact",
})
</script>

<style scoped>
.ant-typography {
    font-size: 16px;
}

.ant-btn {
    font-size: 16px;
}

.anticon {
    color: #1677FF;
}

.content {
    width: 100%;
}

/* lg */
@media (min-width: 1024px) {
    .content {
        width: 80%;
    }
}
</style>