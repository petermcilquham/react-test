import "./App.css";
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import Like from "./components/Like.tsx";
import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import { Cart } from "./components/Cart.tsx";
import Form from "./components/Form.tsx";
import ExpenseList from "./expense-tracker/components/ExpenseList.tsx";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./expense-tracker/components/ExpenseForm.tsx";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [buttonText, setButtonText] = useState("Show alert");
  //object state
  const [person, setPerson] = useState({
    firstName: "peter",
    lastName: "schmidt",
  });
  //array state
  const [tags, setTags] = useState(["happy", "cheerful"]);
  //array of objects state
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);
  const handleClick = () => {
    //update element in object
    setPerson({ ...person, lastName: "mcilquham" }); // "...person" copies everything from person, and then we update 'lastName'
    //add to array
    setTags([...tags, "exciting"]); //copy all elements in tags, add 'exciting'
    //remove from array
    setTags(tags.filter((tag) => tag != "happy")); //filter out tag if it equals to 'happy' ie. return everything else
    //update (change happy to happiness)
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag))); //return 'happiness' if tag equals 'happy', otherwise return tag
    //update objects in array of objects
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))); //update 'fixed' value in object of the first element in array
  };
  const items = [
    "Copenhagen",
    "London",
    "Oslo",
    "Paris",
    "Berlin",
    "Stockholm",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      {/* <Form /> */}
      {/* 
       <Button
        onClick={() => {
          setShowAlert(!showAlert);
          showAlert ? setButtonText("Show alert") : setButtonText("Hide alert");
        }}
      >
        {buttonText}
      </Button>
      {showAlert && (
        <Alert>
          Alert <span>AlertSpan</span>
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="List of cities"
        onSelectItem={handleSelectItem}
      /> 
      <Like />
      */}
    </>
  );
}

export default App;
