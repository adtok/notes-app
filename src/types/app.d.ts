type Note = {
  id: string
  title: string
  body: string
  tags: Tag[]
}

type NoteData = {
  title: string
  body: string
  tags: Tag[]
}

type RawNote = {
  id: string
  title: string
  body: string
  tagIds: string[]
}

type Tag = {
  id: string
  label: string
}
