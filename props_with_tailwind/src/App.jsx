

 import React from "react";
import Cart from "./component/Cart";

import student1 from "./images/image1.png";
import student2 from "./images/image2.jpg";
import student3 from "./images/image3.jpg";
import student4 from "./images/image4.png";

function App() {
  return (
    <div className='flex flex-wrap gap-4 justify-evenly items-center min-h-screen bg-green-100 p-8'>
      

      <Cart image={student1}
        name="Senthil"
        roll="101"
        section="CSE-A"
      />

      <Cart image={student2}
        name="Rahul"
        roll="102"
        section="CSE-B"
      />

      <Cart image={student3}
        name="kanhaiya"
        roll="103"
        section="CSE-C"
      />

      <Cart image={student4}
        name="Aman"
        roll="104"
        section="CSE-D"
      />
       <Cart image={student1}
        name="Senthil"
        roll="101"
        section="CSE-A"
      />

      <Cart image={student2}
        name="Rahul"
        roll="102"
        section="CSE-B"
      />

      <Cart image={student3}
        name="kanhaiya"
        roll="103"
        section="CSE-C"
      />

      <Cart image={student4}
        name="Aman"
        roll="104"
        section="CSE-D"
        />
        <Cart image={student3}
        name="kanhaiya"
        roll="103"
        section="CSE-C"
      />

      <Cart image={student4}
        name="Aman"
        roll="104"
        section="CSE-D"
        />
    </div>
  );
}

export default App;