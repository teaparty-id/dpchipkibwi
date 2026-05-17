<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profil",
    children: [
      {
        label: "Tentang Kami",
        to: "/tentang-kami",
      },
      {
        label: "Struktur Organisasi",
        to: "/struktur-organisasi",
      },
    ],
  },
  {
    label: "Anggota",
    to: "/anggota",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
]);

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "DPC HIPKI Banyuwangi";
const description =
  "Website Resmi DPC (Dewan Pimpinan Cabang) HIPKI Banyuwangi";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <UApp>
    <UHeader mode="drawer">
      <template #left>
        <div class="flex items-center gap-3">
          <NuxtLink to="/">
            <NuxtImg src="img/logo/hipki.png" class="w-auto h-9 shrink-0" />
          </NuxtLink>
        </div>
      </template>

      <UNavigationMenu
        :items="items"
        color="neutral"
        content-orientation="vertical"
      />

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter class="bg-slate-900 text-gray-300">
      <!-- TOP -->
      <template #top>
        <UContainer class="py-12">
          <div class="grid md:grid-cols-4 gap-8">
            <!-- BRAND -->
            <div>
              <NuxtImg src="/img/logo/hipki.png" class="h-10 mb-4" />
              <p class="text-sm text-gray-400">
                DPC HIPKI Banyuwangi adalah organisasi yang menaungi lembaga
                pelatihan dan kursus untuk meningkatkan kualitas SDM melalui
                pendidikan non-formal.
              </p>
            </div>

            <!-- NAVIGASI -->
            <div>
              <h3 class="text-white font-semibold mb-4">Navigasi</h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <NuxtLink to="/" class="hover:text-white">Beranda</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/tentang" class="hover:text-white"
                    >Tentang HIPKI</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/anggota" class="hover:text-white"
                    >Anggota</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/artikel" class="hover:text-white"
                    >Artikel</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/kontak" class="hover:text-white"
                    >Kontak</NuxtLink
                  >
                </li>
              </ul>
            </div>

            <!-- ANGGOTA -->
            <div>
              <h3 class="text-white font-semibold mb-4">Untuk Anggota</h3>
              <ul class="space-y-2 text-sm">
                <li>
                  <NuxtLink to="/login" class="hover:text-white"
                    >Login Anggota</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/register" class="hover:text-white"
                    >Daftar Anggota</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/panduan" class="hover:text-white"
                    >Panduan</NuxtLink
                  >
                </li>
              </ul>
            </div>

            <!-- KONTAK -->
            <div>
              <h3 class="text-white font-semibold mb-4">Kontak</h3>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>Email: info@dpchipkibwi.or.id</li>
                <li>Telp: 08xxxxxxxxxx</li>
                <li>Banyuwangi, Jawa Timur</li>
              </ul>
            </div>
          </div>
        </UContainer>
      </template>

      <!-- BOTTOM -->
      <template #bottom>
        <div class="border-t border-white/10">
          <UContainer
            class="py-4 flex flex-col md:flex-row justify-between items-center gap-2"
          >
            <p class="text-xs text-gray-400 text-center md:text-left">
              © {{ new Date().getFullYear() }} DPC HIPKI Banyuwangi. All rights
              reserved.
            </p>

            <div class="flex gap-4 text-xs text-gray-400">
              <NuxtLink to="/privacy" class="hover:text-white"
                >Privacy Policy</NuxtLink
              >
              <NuxtLink to="/terms" class="hover:text-white">Terms</NuxtLink>
            </div>
          </UContainer>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
