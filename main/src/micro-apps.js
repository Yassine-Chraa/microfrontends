const microApps = [
  {
    name: "microapp1", // app name registered
    entry: "//localhost:3001",
    container: "#subapp-viewport",
    activeRule: "/microapp1",
    props: {
      Routerbase: "/microapp2",
    },
  },
  {
    name: "microapp2",
    entry: "//localhost:3002",
    container: "#subapp-viewport",
    activeRule: "/microapp2",
    props: {
      Routerbase: "/microapp2",
    },
  },
];

export default microApps;
