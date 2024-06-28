import React from 'react';
import Astyle from "./style1.module.css";
import Bstyle from "./style2.module.css";

function Main_module() {
  return (
    <div>
      <h1 className={Astyle.box}>hello</h1>
      <h2 className={Bstyle.box}>hello box</h2>
    </div>
  )
}

export default Main_module
