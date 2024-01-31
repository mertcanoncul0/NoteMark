import { createEmptyNoteAtom, deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { ClipboardPen, Trash2 } from 'lucide-react'
import { ComponentProps } from 'react'
import { ActionButton } from './button'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const deleteNote = useSetAtom(deleteNoteAtom)

  return (
    <div {...props}>
      <ActionButton title="Create Note" onClick={async () => await createEmptyNote()}>
        <ClipboardPen className="w-4 h-4 text-zinc-300" />
      </ActionButton>
      <ActionButton title="Delete Selected Note" onClick={async () => await deleteNote()}>
        <Trash2 className="w-4 h-4 text-zinc-300" />
      </ActionButton>
    </div>
  )
}
