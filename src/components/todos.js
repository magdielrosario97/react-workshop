import React from "react";

class Todos extends React.Component {
   render() {
      return this.props.todos.map((todo) => {
         return (
            <div
               className="todoItem"
               key={todo.id}
               onClick={() => {
                  console.log(todo.id);
               }}
            >
               {todo.title}
            </div>
         );
      });
   }
}

export default Todos;
