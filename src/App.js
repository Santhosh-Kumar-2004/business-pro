// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import NotFound from "@/pages/not-found";
// import Home from "@/pages/Home";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// function Router() {
//   return (
//     // <Switch>
//     //   <Route path="/" component={Home}/>
//     //   {/* <Route component={NotFound} /> */}
//     // </Switch>
//   );
// }

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
    // <QueryClientProvider client={queryClient}>
    //   {/* <TooltipProvider>
    //     <Toaster />
    //     <Router />
    //   </TooltipProvider> */}
    // </QueryClientProvider>
  );
}

export default App;
