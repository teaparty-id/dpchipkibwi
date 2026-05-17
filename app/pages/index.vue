<template>
  <div>
    <!-- HERO / CAROUSEL -->
    <section class="relative">
      <UCarousel
        v-slot="{ item }"
        loop
        :autoplay="{ delay: 4000 }"
        :items="items"
        :ui="{
          item: 'basis-1/1 ps-0',
          container: 'ms-0',
        }"
      >
        <div class="relative w-full h-126 lg:h-166">
          <img :src="item" class="w-full h-full object-cover" />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/50 flex items-center">
            <UContainer>
              <div class="text-white max-w-xl">
                <h1 class="text-xl md:text-5xl font-bold mb-4">
                  HIPKI Banyuwangi
                </h1>
                <p class="text-sm md:text-xl mb-6">
                  Dewan Pimpinan Cabang Himpunan Penyelenggara Pelatihan dan
                  Kursus Indonesia (HIPKI) Banyuwangi
                </p>

                <div class="flex gap-3">
                  <UButton size="lg" to="/anggota" color="warning"
                    >Lihat Anggota</UButton
                  >
                  <UButton
                    variant="outline"
                    size="lg"
                    to="/profil"
                    color="warning"
                  >
                    Tentang Kami
                  </UButton>
                </div>
              </div>
            </UContainer>
          </div>
        </div>
      </UCarousel>
    </section>

    <!-- STATISTIK -->
    <UContainer class="py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h2 class="text-3xl font-bold">30+</h2>
          <p>Anggota Aktif</p>
        </div>
        <div>
          <h2 class="text-3xl font-bold">100+</h2>
          <p>Program Pelatihan</p>
        </div>
        <div>
          <h2 class="text-3xl font-bold">1000+</h2>
          <p>Peserta</p>
        </div>
        <div>
          <h2 class="text-3xl font-bold">10+</h2>
          <p>Tahun Pengalaman</p>
        </div>
      </div>
    </UContainer>

    <!-- TENTANG -->
    <UContainer>
      <UPageSection
        title="Tentang HIPKI Banyuwangi"
        description="Dewan Pimpinan Cabang (DPC) HIPKI Banyuwangi merupakan organisasi yang menaungi lembaga kursus dan pelatihan di wilayah Banyuwangi. HIPKI berperan dalam meningkatkan kualitas sumber daya manusia melalui pendidikan non-formal, serta mendukung pengembangan kompetensi tenaga kerja yang siap bersaing di dunia industri."
        orientation="horizontal"
      >
        <img
          src="https://picsum.photos/600/400"
          alt="HIPKI Banyuwangi"
          class="w-full rounded-lg"
          loading="lazy"
        />
      </UPageSection>
    </UContainer>

    <section class="py-16">
      <UContainer>
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold">Layanan & Informasi</h2>
          <p class="text-gray-600 text-sm">
            Akses berbagai informasi dan layanan HIPKI Banyuwangi
          </p>
        </div>

        <div
          class="flex w-full justify-center md:justify-between flex-wrap gap-5"
        >
          <div>
            <NuxtLink to="#">
              <div class="card bg-base-100 w-64 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="#">
              <div class="card bg-base-100 w-64 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="#">
              <div class="card bg-base-100 w-64 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="#">
              <div class="card bg-base-100 w-64 shadow-sm">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- BLOG / BERITA -->
    <section class="py-16">
      <UContainer>
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold">Our Blog</h2>
          <p class="text-gray-600 text-sm">
            Berita Terkini DPC HIPKI Banyuwangi
          </p>
        </div>
        <UBlogPosts :posts="posts" />
      </UContainer>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <UContainer class="text-center">
        <h2 class="text-2xl font-bold mb-4">
          Bergabung Bersama HIPKI Banyuwangi
        </h2>
        <p class="mb-6">
          Tingkatkan kredibilitas dan jaringan lembaga Anda bersama organisasi
          resmi HIPKI
        </p>

        <NuxtLink to="#">
          <UButton size="lg" color="info"> Daftar Sebagai Anggota </UButton>
        </NuxtLink>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { BlogPostProps } from "@nuxt/ui";
import type { PageFeatureProps, ButtonProps } from "@nuxt/ui";

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
];

const posts = ref<BlogPostProps[]>([
  {
    title: "Nuxt Icon v1",
    description: "Discover Nuxt Icon v1!",
    image: "https://nuxt.com/assets/blog/nuxt-icon/cover.png",
    date: "2024-11-25",
  },
  {
    title: "Nuxt 3.14",
    description: "Nuxt 3.14 is out!",
    image: "https://nuxt.com/assets/blog/v3.14.png",
    date: "2024-11-04",
  },
  {
    title: "Nuxt 3.13",
    description: "Nuxt 3.13 is out!",
    image: "https://nuxt.com/assets/blog/v3.13.png",
    date: "2024-08-22",
  },
]);

const features = ref<PageFeatureProps[]>([
  {
    title: "Icons",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
  },
  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
  },
]);
</script>
