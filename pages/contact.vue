<template>
    <div class="content-vh">
        <div class="content">
            <a-typography-title style="font-weight: bold; font-size: 40px;">
                Nguyen Phuc Khang - <span style="color: #09C09B;">{{ content.role}}</span>
            </a-typography-title>
            <a-typography-paragraph style="font-size: 16px; color: #71717a;">
                Please feel free to reach out to me at using your preferred ways included below: 
            </a-typography-paragraph>
            
            <a :href="'tel:+84' + content.phone" class="social-link">
                <a-button type="link" class="custom-link-button" :style="{ color: 'black' }">
                    <PhoneOutlined class="right-icon"/> 0913324868
                </a-button>
            </a>

            <br />
                
            <a :href="'mailto:' + content.email" class="social-link">
                <a-button type="link" class="custom-link-button" :style="{ color: 'black' }">
                    <mail-outlined class="right-icon"/> khang2073@gmail.com
                </a-button>
            </a>
            <a-divider></a-divider>
            
            <a :href="content.social_links.facebook" target="_blank" class="social-link">
                <a-button type="link" class="custom-link-button" :style="{ color: '#1877F2' }">
                    <facebook-outlined :style="{ color: '#1877F2' }"/> Nguyễn Phúc Khang
                </a-button>
            </a>

            <br />

            <a :href="content.social_links.linkedin" target="_blank" class="social-link">
                <a-button type="link" class="custom-link-button" :style="{ color: '#0077B5' }">
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

.social-link:hover .custom-link-button, .social-link:hover .right-icon  {
  color: #09C09B !important; 
}

.right-icon {
  color: black; /* Default color for icon */
  transition: color 0.3s ease; /* Smooth transition */
}



/* lg */
@media (min-width: 1024px) {
    .content {
        width: 80%;
    }
}
</style>