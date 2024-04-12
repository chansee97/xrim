<script setup lang="ts">

</script>

<template>
  <main class="wh-full bg-#fff flex flex-col">
    <TitleBar />
    <div class="flex flex-1">
      <SlideBar />
      <div class="flex-1">
        <router-view v-slot="{ Component }">
          <transition
            name="fade-slide"
            mode="out-in"
          >
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </main>
</template>
