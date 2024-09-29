<template>
    <NuxtLayout>
        <div class="content-vh" align="center">
            <div class="container">
                <a-typography-title style="font-weight: bold; font-size: 128px; color: #09C09B; margin: 0;">
                    404
                </a-typography-title>

                <a-typography-title style="font-weight: bold; margin: 0 0 10px 0;" :level="2">
                    PAGE NOT FOUND
                </a-typography-title>

                <a-typography-text style="font-size: 20px;">
                    It looks like you're lost. Let's get you back on track.
                </a-typography-text>

                <br />

                <NuxtLink to="/">
                    <a-button type="primary" :style="{margin: '20px 0', width: '100%', 
                        backgroundColor: '#09C09B', borderColor: '#09C09B'}">
                        Go Back Home
                    </a-button>
                </NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</template>
