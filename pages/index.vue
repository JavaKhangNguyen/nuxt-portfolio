<template>
  <div class="content-vh">
    <a-flex gap="50" horizontal justify="center" align="center">
      <div class="profile-info">
        <!-- Info -->
        <a-typography-title :level="1" style="margin: 0 0 10px 0; font-weight: bold;">
          {{ content.name }}
        </a-typography-title>
        <a-typography-title :level="2" style="margin: 0">
          <span style="color: #09C09B; font-weight: bold;">{{ content.role}}</span>
        </a-typography-title>
        <a-typography-paragraph align="justify" style="font-size: 16px; color: #71717a;">
          {{ content.description }}
        </a-typography-paragraph>

        <!-- Buttons -->
        <a-flex gap="8" style="margin-top: 25px;">
          <a-button class="custom-button" type="default" :style="{ borderColor: '#09C09B' }">
            <DownloadOutlined :style="{ color: '#09C09B' }"/>
            <a href="/CV_NPKhang.pdf" download="" :style="{ color: '#09C09B' }"> Download CV</a>
          </a-button>
          <NuxtLink to="/projects">
            <a-button class="custom-button" type="default" :style="{ borderColor: '#09C09B' }">
              <span style="color:#09C09B">
                <book-outlined /> My Projects
              </span>
            </a-button>
          </NuxtLink>
          <NuxtLink to="/about" class="more-about-me-link">
            <a-button type="link" class="custom-link-button"> More About Me
              <RightOutlined class="right-icon"/>
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
import { RightOutlined, DownloadOutlined } from '@ant-design/icons-vue';

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

.custom-button {
  transition: all 0.3s ease;
}

.custom-button:hover {
  background-color: #09C09B !important;
}

.custom-button:hover span,
.custom-button:hover a {
  color: #fff !important;
}

.custom-link-button {
  color: black; /* Default color */
  transition: color 0.3s ease; /* Smooth transition */
}

.right-icon {
  color: black; /* Default color for icon */
  transition: color 0.3s ease; /* Smooth transition */
}

.more-about-me-link:hover .custom-link-button,
.more-about-me-link:hover .right-icon {
  color: #09C09B; /* Hover color */
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