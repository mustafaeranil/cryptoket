export default {
  state: {
    navLinks: [
      {
        id: 1,
        title: "Explore",
        url: "#"
      },
      {
        id: 2,
        title: "My Items",
        url: "#"
      },
      {
        id: 3,
        title: "Following",
        url: "#"
      }
    ],
    fastLinks: [
      {
        id: 1,
        title: "CryptoKet",
        childs: [
          {
            id: 1,
            title: "Explore",
            url: "#"
          },
          {
            id: 2,
            title: "How it Works",
            url: "#"
          },
          {
            id: 3,
            title: "Contact Us",
            url: "#"
          }
        ]
      },
      {
        id: 2,
        title: "Support",
        childs: [
          {
            id: 1,
            title: "Help Center",
            url: "#"
          },
          {
            id: 2,
            title: "Terms of Service",
            url: "#"
          },
          {
            id: 3,
            title: "Legal",
            url: "#"
          },
          {
            id: 4,
            title: "Privacy Policy",
            url: "#"
          }
        ]
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  namespaced: true
}
