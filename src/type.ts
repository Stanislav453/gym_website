
export type sectionHeaderProps = {
  hightText: string,
  secondHightText?: string
}

export type imgModalProps = {
  id:  number 
  setModalState:  React.Dispatch<React.SetStateAction<{
    isOpen: boolean;
    id: number;
}>>

}

export type imgProps = {
    src: string
  }
  
export type HeaderButtonProps = {
    variant: string
    children: React.ReactNode
}