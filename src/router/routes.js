const Home = () => import("@/views/HomeView");

const route = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [],
  },
  
];
export default route;
