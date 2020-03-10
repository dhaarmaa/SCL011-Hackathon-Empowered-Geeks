import React, { Fragment } from 'react';
import luz from '../img/luz.png'
import agua from '../img/agua.png'
import gas from '../img/gas.png'
import telefono from '../img/telefono.png'
import internet from '../img/internet.png'
import tvcable from '../img/tvcable.png'
const accountmenu=()=>{

  return(<Fragment>

<button>
  <img  src={luz} alt="luz"/>
</button>
<button>
  <img  src={agua} alt="agua"/>
</button>
<button>
  <img  src={gas} alt="gas"/>
</button>
<button>
  <img  src={telefono} alt="telefono"/>
</button>
<button>
  <img  src={internet} alt="internet"/>
</button>
<button>
  <img  src={tvcable} alt="tvcable"/>
</button>

  </Fragment>)
}
export default accountmenu;