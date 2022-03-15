import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useImmerReducer } from 'use-immer';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import { IMyCard } from './interfaces/interfaces';
import Navbar from './components/Navbar';
import "./styles/style.css";
import Cards from './components/Cards';


function Main() {

  const initialState: Array<IMyCard> = [
    {
      "cardId": 1647350987920,
      "cardName": "In Progress",
      "cardItems": ["Javascript", "Java", "C++"]
    },
    {
      "cardId": 1647351020671,
      "cardName": "Testing",
      "cardItems": ["OpenWeatherMap UI", "API", "AWS configuration"]
    },
    {
      "cardId": 1647351031387,
      "cardName": "Done",
      "cardItems": ["Make frontend UI", "Unite testing", "buying hosting"]
    }
  ]

  function ourReducer(draft, action) {

    switch (action.type) {
      case "CardAdd":
        const newCard = {
          "cardId": new Date().getTime(),
          "cardName": "New Card",
          "cardItems": []
        }
        draft.push(newCard)
        return;

      case "CardEdit":
        const { editedCardName, cardIdNo } = action.value;
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].cardId === cardIdNo) {
            draft[i].cardName = editedCardName;
            return;
          }
        }
        return;

      case "CardDelete":
        console.log(action.value.id)
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].cardId === action.value.id) {
            draft.splice(i, 1)
            break
          }
        }
        return;

      case "ItemAdd":
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].cardId === action.value.cardId) {
            draft[i].cardItems.push(action.value.item);
            return;
          }
        }
        return;

      case "ItemEdit":
        let { editedText, itemIndex, cardId } = action.value;
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].cardId === cardId) {
            draft[i].cardItems[itemIndex] = editedText;
            return;
          }
        }
        return;

      case "ItemDelete":
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].cardId === action.value.cardId) {
            let newItems = draft[i].cardItems.filter((item, index) => index !== action.value.itemIndex)
            draft[i].cardItems = newItems;
            return;
          }
        }
        return;

      case "ItemDrag":
        const { draggedItem, destinationCardId, srcCardId } = action.value
        console.log("DraggedItem = " + draggedItem)
        console.log("DraggedOverCardId = " + destinationCardId);
        console.log("srcCardId = " + srcCardId);

        // adding the dragged item to the desired card
        for (let i = 0; i < draft.length; i++) {
          if (srcCardId === draft[i].cardId) {
            continue;
          }
          if (draft[i].cardId === destinationCardId) {
            draft[i].cardItems.push(draggedItem);
            break;
          }
        }

        // removing the dragged item from the src card
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].cardId === srcCardId) {
            let newItems = draft[i].cardItems.filter(item => item !== draggedItem)
            draft[i].cardItems = newItems;
            return;
          }
        }
        return;

      default:
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {

  }, [state])


  return (
    <React.StrictMode>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Navbar />
          <Cards />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </React.StrictMode>
  )
}



ReactDOM.render(<Main />, document.getElementById('root'));

