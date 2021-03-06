import React from "react";
import "./App.css";
import Split from "./composition/Split";
import Tooltip from "./composition/Tooltip";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RoultteGun";
import RoultteGun from './state-drills/RoultteGun';
import Tabs from './state/Tabs';


let tabsProps = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
  },
];
let firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">
    ipsum
  </Tooltip>
);
let secondTooltip = (
  <Tooltip color="#126BCC" message="another tooltip message">
    officiis
  </Tooltip>
);


function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis={2}>
        This is the content for the left 'Split'. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Incidunt ex velit suscipit facere
        officia?
        <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus
        id soluta aspernatur.
      </Split>
      <TheDate />
      <Counter count={123} />
      <HelloWorld />
      <Bomb />
      <RouletteGun />
      <Tabs tabs={tabsProps} />
    </main>
  );
}

export default App;
