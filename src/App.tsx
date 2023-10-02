import { Route } from 'wouter';
import './App.css';
import { ShadowGenerator } from './pages/ShadowGenerator';
import { GradientBgGenerator } from './pages/GradientBgGenerator';

export default function App() {
  return (
    <>
      <Route path='/'>
        <ShadowGenerator />
      </Route>
      <Route path='/gradient'>
        <GradientBgGenerator />
      </Route>
    </>
  );
}
