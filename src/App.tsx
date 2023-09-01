import { Route } from 'wouter';
import './App.css';
import { ShadowGenerator } from './components/ShadowGenerator';
import { GradientBgGenerator } from './components/GradientBgGenerator';

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
