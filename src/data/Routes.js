const Routes = [
  {
    label: "jeux vidéo",
    path: "/games",
    subRoutes: [
      { label: "Dernières sorties", path: "/games/last_releases" },
      { label: "Jeux d'action", path: "/games/genres/action" },
      { label: "Jeux en multijoueurs", path: "/games/genres/rpg" },
    ],
  },
  { label: "dlc", path: "/dlc" },
  { label: "produits dérivés", path: "/derived-products" },
  { label: "promotions", path: "/promotions" },
  { label: "eshop +", path: "/eshop-plus" },
];

export default Routes;
