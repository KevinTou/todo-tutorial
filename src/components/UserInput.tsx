import React, { useState, FunctionComponent, ChangeEventHandler, FormEventHandler } from 'react'

const UserInput: FunctionComponent = () => {
  const [userInput, setUserInput] = useState<string>('')

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput(e.target.value);
  }

  const validateUserInput: (text: string) => Boolean = (text) => {
    return Boolean(text);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if(!validateUserInput(userInput)) return;
    // TODO: Create a new todo and add it to the list
    
    // Clear user input afterwards
    setUserInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userInput">Todo: </label>
      <input id="userInput" type="text" onChange={handleChange} value={userInput} />
      <input type="submit" title="Submit" />
    </form>
  )
}

export default UserInput
