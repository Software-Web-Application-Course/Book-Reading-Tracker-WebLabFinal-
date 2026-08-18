import{ useState } from "react";
const books = [
{id: 1, title:"Clean Code", author: "Robert C. Martin"},
{ id: 2, title:"Eloquent JavaScript", author:"MarijnHaverbeke"},
{id: 3, title:"Refactoring", author: "Martin Fowler"},
];
/*
Task 1:
*/
function StudentInfo(){
const studentId = "241-35-435";
//Task 1: Return the Student ID JSX here

return (
  <p>Student ID: {studentId} </p>
);

}
function Book({ title, author }) {
  return <li>{title} by {author}</li>;
}
/*
Task 2: Use .map() to render Book components
*/
function BookList({ books }) {
  return (
    <>
      {books.map((book) => (<Book key={book.id} title={book.title} author={book.author} />))}
    </>
  );
}

export default function App(){
const [completed, setCompleted] = useState(false);
return (
<main>
<h1>Book Reading Tracker</h1>
<StudentInfo />
<ul>
<BookList books={books} />
</ul>
<button onClick={() => setCompleted((completed) => !completed)}>
        SET
</button>
<p>Status: {completed ? "Completed" : "Reading in Progress"}</p>
</main>
);
}