const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/calculator",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/CalculatorPage.vue") },
    ],
  },
  {
    path: "/bmi",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/BmiPage.vue") }],
  },
  {
    path: "/weather",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/WeatherPage.vue") }],
  },
  {
    path: "/todo",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ToDoPage.vue") }],
  },
  {
    path: "/converter",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/converterPage.vue") },
    ],
  },
  {
    path: "/aunthentication",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AunthenticationPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
