import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import JuntaPermanente from "@/pages/JuntaPermanente";
import Pleno from "@/pages/Pleno";
import Normativas from "@/pages/Normativas";
import Actas from "@/pages/Actas";
import TransparenciaPage from "@/pages/Transparencia";
import ServiciosPage from "@/pages/Servicios";
import NoticiasPage from "@/pages/Noticias";
import CasaEstudiantat from "@/pages/CasaEstudiantat";
import Paellas2026 from "@/pages/Paellas2026";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/junta-permanente" component={JuntaPermanente} />
      <Route path="/pleno" component={Pleno} />
      <Route path="/normativas" component={Normativas} />
      <Route path="/actas" component={Actas} />
      <Route path="/transparencia" component={TransparenciaPage} />
      <Route path="/servicios" component={ServiciosPage} />
      <Route path="/noticias" component={NoticiasPage} />
      <Route path="/casa" component={CasaEstudiantat} />
      <Route path="/paellas" component={Paellas2026} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
