import { Route } from 'wouter';
import './App.css';
import { ShadowGenerator } from './pages/ShadowGenerator';
import { GradientBgGenerator } from './pages/GradientBgGenerator';
import { Index } from './pages/Index';

export default function App() {
  return (
    <>
      <Route path='/'>
        <Index />
      </Route>
      <Route path='/shadow'>
        <ShadowGenerator />
      </Route>
      <Route path='/gradient'>
        <GradientBgGenerator />
      </Route>
    </>
  );
}
