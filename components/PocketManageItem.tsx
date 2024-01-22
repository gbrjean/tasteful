import { EditIcon } from "@public/assets/icons/EditIcon";
import { Button } from "./Button";
import { TrashIcon } from "@public/assets/icons/TrashIcon";
import { useRef, useState } from "react";
import { CheckIcon } from "@public/assets/icons/CheckIcon";
import { deletePocketList, editPocketList } from "@lib/actions/user.actions";

type Props = {
  pocketName: string;
  session: string;
  pathname: string;
}

const PocketManageItem = ({pocketName, session, pathname} : Props) => {

  const [enableEdit, setEnableEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handlePocketListEdit = async (name: string) => {
    if(inputRef.current?.value){
      try {
        await editPocketList(name, inputRef.current.value, session, pathname)
        setEnableEdit(false)
        inputRef.current.value = ''
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handlePocketListDelete = async (name: string) => {
    if(window.confirm('Are you sure you want to delete the list?')) {
      try {
        await deletePocketList(name, session, pathname)
      } catch (error) {
        console.log(error)
      }
    } else return
  }

  return (
    <div id="create-pocket-list">
      { !enableEdit ? (
        <span>{pocketName}</span>
      ) : (
        <div id="create-pocket-list-edit">
          <input type="text" placeholder="Write a name..." ref={inputRef} />
          <Button onClick={() => handlePocketListEdit(pocketName)} type="icon" text={<CheckIcon />} />
        </div>
      )}

      <div id="create-pocket-list-actions">
        <Button onClick={() => setEnableEdit(prev => !prev)} type="icon" text={<EditIcon />} />
        <Button onClick={() => handlePocketListDelete(pocketName)} type="icon" text={<TrashIcon />} />
      </div>

    </div>
  )
}

export default PocketManageItem