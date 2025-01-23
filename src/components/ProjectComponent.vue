<script setup>
const getOrientation = (path) => {
  var orientation
  var img = new Image()
  img.src = path
  if (img.naturalWidth > img.naturalHeight) {
    orientation = 'landscape'
  } else if (img.naturalWidth < img.naturalHeight) {
    orientation = 'portrait'
  } else {
    orientation = 'even'
  }

  return orientation
}

const projects = [
  {
    name: 'Meatengo',
    year: 2023,
    type: 'Dummy project',
    description: [
      'I built a multi-site grocery store dummy project called Meatengo that offers a wide range of daily necessities, including water, food, and snacks.\n',
      "This web-based application includes a cashier app, an admin panel, and a user's marketplace (marketplace implementation planned for the future).\n",
      'Meatengo is built using Vue 3 for the front-end and Laravel API for the back-end.'
    ],
    techStack: 'HTML, CSS, Vue 3, Laravel 10, mySQL, Tailwind CSS',
    githubLink: 'https://github.com/sabiannaya/meatengo',
    img: [
      {
        name: 'Meatengo Logo',
        path: './meatengo/meatengo logo.png',
        orientation: getOrientation('./meatengo/meatengo logo.png')
      },
      {
        name: 'Admin Panel',
        path: './meatengo/[admin] inventory management.png',
        orientation: getOrientation('./meatengo/[admin] inventory management.png')
      },
      {
        name: 'Cashier Panel',
        path: './meatengo/[cashier] dashboard.png',
        orientation: getOrientation('./meatengo/[cashier] dashboard.png')
      }
    ]
  },
  {
    name: 'Perpuskom',
    year: 2023,
    type: 'Final-year project (dummy)',
    description: [
      "I contributed to the development of a digital library application called 'Perpuskom' as a final-year project assignment, working as a full-stack developer.\n",
      'Our team of 4 members, consisting of developers and designers, worked together to create this project.\n',
      'My main objective was to implement the back-end system to store all book credentials and develop some front-end pages based on the provided UI/UX designs.'
    ],
    techStack: 'Flutter, Dart, SQLite',
    githubLink: 'https://github.com/sabiannaya/Perpuskom',
    img: [
      {
        name: 'Splash Screen',
        path: './perpuskom/splash screen.png',
        orientation: getOrientation('./perpuskom/splash screen.png')
      },
      {
        name: 'Book Detail',
        path: './perpuskom/book detail.png',
        orientation: getOrientation('./perpuskom/book detail.png')
      },
      {
        name: 'Welcome Screen',
        path: './perpuskom/welcome screen.png',
        orientation: getOrientation('./perpuskom/welcome screen.png')
      }
    ]
  },
  {
    name: 'Smart English',
    year: 2023,
    type: 'Final-year project (dummy)',
    description: [
      "I contributed to the development of an English tutoring website application called 'Smart English' as a final-year assignment, working as a front-end developer.\n",
      'Our team of 7 members, including front-end and back-end developers, as well as designers, worked together on this project.\n',
      'My main responsibility was to implement all front-end pages based on the provided UI/UX designs.'
    ],
    techStack: 'CodeIgniter 4, Bootstrap, JS (ES6), CSS, HTML',
    githubLink: 'https://github.com/sabiannaya/smart-english-copy.git',
    img: [
      {
        name: 'Welcome Screen',
        path: './smart english/Desktop.png',
        orientation: getOrientation('./smart english/Desktop.png')
      },
      {
        name: 'Login Page',
        path: './smart english/login.png',
        orientation: getOrientation('./smart english/login.png')
      }
    ]
  },
  {
    name: 'Bangunan Xpress',
    year: '2024-2025',
    type: 'Freelance',
    description: [
      'BangunanXpress is an e-commerce platform designed to modernize and streamline the operations of a building materials store. \n',
      'Transitioning from a catalog-based website, the platform introduces both a customer-facing interface and a dynamic content management system (CMS) that supports inventory management, promotions, transaction capabilities, etc., providing a comprehensive solution for the client’s needs.\n',
      'As part of the development team, my primary role was to partially design and fully implement the CMS. Together, we ensured seamless integration and deployment between the CMS and the customer-facing platform.'
    ],
    techStack: 'HTML, CSS, Laravel 10, mySQL, Tailwind CSS, Docker, Nginx',
    githubLink: null,
    websiteLink: 'https://bangunanxpress.com',
    img: [
      {
        name: 'Dashboard',
        path: './BX CMS/BX_Dashboard.png',
        orientation: getOrientation('./BX CMS/BX_Dashboard.png')
      },
      {
        name: 'Customer List',
        path: './BX CMS/BX_Customer List.png',
        orientation: getOrientation('./BX CMS/BX_Customer List.png')
      },
      {
        name: 'Customer Detail',
        path: './BX CMS/BX_Customer Detail.png',
        orientation: getOrientation('./BX CMS/BX_Customer Detail.png')
      },
      {
        name: 'Product List',
        path: './BX CMS/BX_Product List.png',
        orientation: getOrientation('./BX CMS/BX_Product List.png')
      },
      {
        name: 'Product Basic Details',
        path: './BX CMS/BX_Product Basic Details.png',
        orientation: getOrientation('./BX CMS/BX_Product Basic Details.png')
      },
      {
        name: 'Product Type Details',
        path: './BX CMS/BX_Product Type Details.png',
        orientation: getOrientation('./BX CMS/BX_Product Type Details.png')
      },
      {
        name: 'Transaction List',
        path: './BX CMS/BX_Transaction List.png',
        orientation: getOrientation('./BX CMS/BX_Transaction List.png')
      },
      {
        name: 'Transaction Details',
        path: './BX CMS/BX_Transaction Details.png',
        orientation: getOrientation('./BX CMS/BX_Transaction Details.png')
      },
      {
        name: 'Banner List',
        path: './BX CMS/BX_Banner List.png',
        orientation: getOrientation('./BX CMS/BX_Banner List.png')
      },
      {
        name: 'Banner Details',
        path: './BX CMS/BX_Banner Details.png',
        orientation: getOrientation('./BX CMS/BX_Banner Details.png')
      }
    ]
  }
]

const githubIconClass = 'fab fa-github-square fa-2xl'
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="w-[95vw] sm:w-[75vw] sm:min-h-[75vh] border-[1px]">
      <span
        class="text-lg sm:text-2xl font-semibold bg-teal-500 text-teal-50 absolute sm:right-[15vw] -translate-y-10 p-5 rounded-md"
      >
        <p>Projects I've built/contributed to</p>
      </span>
      <section class="px-5 py-10 sm:p-10" v-for="(item, index) in projects" :key="index">
        <div class="">
          <div class="flex flex-cols pb-5 gap-2 md:gap-5 divide-x divide-teal-100">
            <h1 class="w-[70vw] md:w-fit text-teal-200 text-3xl lg:text-4xl flex flex-row">
              <span class="text-teal-500 font-semibold">{{ `${index + 1}.` }}</span>
              <p>&nbsp; {{ item.name }}</p>
            </h1>
            <span class="ps-2 md:ps-5 text-teal-100">
              <h2>{{ item.year }}</h2>
              <h2>{{ item.type }}</h2>
            </span>
          </div>
          <div class="grid sm:grid-cols-2 gap-5 divide divide-lime-100">
            <section class="border-white" @click="$emit('show-image-modal', item.img)">
              <span class="group flex items-center justify-center">
                <img :src="item.img[0].path" />
                <span
                  class="opacity-0 absolute text-gray-500 bg-white text-2xl p-2 rounded-md group-hover:opacity-80 transition-opacity duration-300"
                >
                  <div class="flex flex-row items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                      />
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                      />
                    </svg>
                  </div>
                  Click to View More Images
                </span>
              </span>
            </section>
            <section class="flex flex-col justify-between">
              <section>
                <div v-for="(desc, index) in item.description" :key="index" class="pb-3 lg:pb-5">
                  <p class="text-teal-300 lg:text-xl text-justify">{{ desc }}</p>
                </div>
              </section>
              <section class="flex flex-col items-center md:grid md:grid-cols-2 text-teal-50 sm:pt-0">
                <p
                  class="pr-5 border-b pb-2 md:pb-0 md:pr-5 md:border-r border-lime-100 sm:pr-0 sm:border-0"
                >
                  {{ item.techStack }}
                </p>
                <span v-if="item.githubLink">
                  <a
                    class="flex flex-row pt-2 md:pt-0 gap-5 items-center justify-end hover:text-teal-500 sm:ps-0"
                    :href="item.githubLink"
                    target="_blank"
                  >
                    <p>See code on GitHub</p>
                    <i :class="githubIconClass"></i>
                  </a>
                </span>
                <span v-else-if="item.websiteLink">
                  <a
                    :href="item.websiteLink"
                    target="_blank"
                    class="flex flex-row pt-2 md:pt-0 gap-5 items-center justify-end hover:text-teal-500 sm:ps-0"
                  >
                    <p>Visit website</p>
                    <i class="fas fa-external-link-square-alt fa-2xl"></i>
                  </a>
                </span>
                <span v-else>
                  <p
                    class="flex flex-row pt-2 md:pt-0 gap-5 items-center justify-end text-gray-400 sm:ps-0"
                  >
                    Private code
                  </p>
                </span>
              </section>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
