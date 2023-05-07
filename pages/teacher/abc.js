import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  /** Different arrays for different dropdowns */
  const firstsem = [
    "Basic Electrical Engineering",
    "Basic Electrical Engineering (Lab)",
    "Engineering Drawing",
    "Mathematics 1",
    "Semiconductor Physics",
    "Semiconductor Physics (Lab)"
  ];
  const secondsem = [
    "Basic Electrical Engineering",
    "Basic Electrical Engineering (Lab)",
    "Engineering Drawing",
    "Mathematics 1",
    "Semiconductor Physics",
    "Semiconductor Physics (Lab)"
  ];

  const thirdsem = [
    "Basic Electrical Engineering",
    "Basic Electrical Engineering (Lab)",
    "Engineering Drawing",
    "Mathematics 1",
    "Semiconductor Physics",
    "Semiconductor Physics (Lab)"
  ];

  const fourthsem = [
    "Basic Electrical Engineering",
    "Basic Electrical Engineering (Lab)",
    "Engineering Drawing",
    "Mathematics 1",
    "Semiconductor Physics",
    "Semiconductor Physics (Lab)"
  ];

  const fifthsem = [
    "Basic Electrical Engineering",
    "Basic Electrical Engineering (Lab)",
    "Engineering Drawing",
    "Mathematics 1",
    "Semiconductor Physics",
    "Semiconductor Physics (Lab)"
  ];

  const sixthsem = [
    "Basic Electrical Engineering",
    "Basic Electrical Engineering (Lab)",
    "Engineering Drawing",
    "Mathematics 1",
    "Semiconductor Physics",
    "Semiconductor Physics (Lab)"
  ];
  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options =<option className="bg-zinc-400 " >-- SELECT SEMESTER --</option >
  ;

  /** Setting Type variable according to dropdown */
  if (selected === "First Semester") {
    type = firstsem;
  } else if (selected === "Fourth Year") {
    type = language;
  } else if (selected === "Data Structure") {
    type = dataStructure;
  }

  /** If "Type" is null or undefined then options will be null,
  * otherwise it will create a options iterable based on our array
  */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (

    // <form>
    <div>
      {/* <div>
        {/** Bind changeSelectOptionHandler to onChange method of select.
  * This method will trigger every time different
  * option is selected.
  
        <select onChange={changeSelectOptionHandler}>
          <option>Choose...</option>
          <option>Algorithm</option>
          <option>Language</option>
          <option>Data Structure</option>
        </select>
      </div> */}
      {/* <div className=" m-auto w-[70%] shadow-md  shadow-zinc-900 h-full"> */}
                    <div>
                    <select onChange={changeSelectOptionHandler} name="select1" id="select1" className=" outline cursor-pointer outline-1 w-full outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900">
                        <option className="bg-zinc-400 " >-- SELECT SEMESTER --</option >
                        <option className="bg-zinc-400 " >First Semester</option >
                        <option className="bg-zinc-400 " >Second Semester</option >
                        <option className="bg-zinc-400 " >Third Semester</option >
                        <option className="bg-zinc-400 " >Fourth Semester</option >
                        <option className="bg-zinc-400 " >Fifth Semester</option >
                        <option className="bg-zinc-400 " >Sixth Semester</option >
                        <option className="bg-zinc-400 " >Seventh Semester</option >
                        <option className="bg-zinc-400 " >Eighth Semester</option >
                    </select></div>
      <div>
        <select className=" outline cursor-pointer outline-1 w-full outline-gray-300 bg-zinc-600 text-white p-2 text-xl rounded-2xl text-center overflow-auto scrollbar-thin scrollbar-thumb-zinc-900">
          {
            /** This is where we have used our options variable */
            options
          }
        </select>
      </div>
      </div>
    // </form>

  );
};

export default App;