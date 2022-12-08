import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [dialogIsOpen, setDialogIsOPen] = useState(false)
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="dt money" />
        <Dialog.Root onOpenChange={setDialogIsOPen} open={dialogIsOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal setDialogIsOpen={setDialogIsOPen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
