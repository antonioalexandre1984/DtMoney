import { NewTransactionButton } from '../NewTransactionButton';
import { HeaderContainer, HeaderContent } from './styles';
import logo from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="dt money" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton type={'button'} />
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}