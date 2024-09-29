<template>
  <div class="content-vh">
    <a-flex gap="50" horizontal justify="center" align="center">
      <div class="profile-info">
        <!-- Info -->
        <a-typography-title :level="1" style="margin: 0 0 10px 0; font-weight: bold;">
          {{ content.name }}
        </a-typography-title>
        <a-typography-title :level="1" style="margin: 0">
          <span style="color: #09C09B;">{{ content.role}}</span>
        </a-typography-title>
        <a-typography-paragraph align="justify" style="font-size: 16px; color: #71717a;">
          {{ content.description }}
        </a-typography-paragraph>

        <!-- Buttons -->
        <a-flex gap="8" style="margin-top: 25px;">
          <a-button type="primary" :style="{ backgroundColor: '#09C09B', borderColor: '#09C09B' }"><a href="/CV_NPKhang.pdf" download="">Download CV</a></a-button>
          <NuxtLink to="/projects" >
            <a-button type="primary" :style="{ backgroundColor: '#09C09B', borderColor: '#09C09B' }">My Projects</a-button>
          </NuxtLink>
          <NuxtLink to="/about">
            <a-button type="text" :style="{ color: '#09C09B' }"> More About Me
              <RightOutlined :style="{ color: '#09C09B' }"/>
            </a-button>
          </NuxtLink>
        </a-flex>
      </div>

      <!-- Large screen profile image -->
      <div class="profile-image">
        <a-image style="border-radius: 15px;" :width="300" rotate="45" :src="content.index_image" 
        alt="Nguyen Phuc Khang" />
      </div>
    </a-flex>
  </div>
</template>

<script setup>
import content from '~/static/content.json';
import { RightOutlined } from '@ant-design/icons-vue';

</script>

<style scoped>
.profile-image {
  display: none;
  rotate: 4deg;
}

.sm-profile-image {
  border-radius: 100%;
  margin-bottom: 18px;
}

:deep(.ant-image-mask) {
  border-radius: 15px;
}

.content-vh {
  padding-top: 85px !important;
}


/* lg */
@media (min-width: 768px) {
  .profile-info {
    width: 60%;
  }

  .profile-image {
    display: block;
  }

  .sm-profile-image {
    display: none;
  }

  .content-vh {
    padding-top: 0 !important;
  }
}
</style>
