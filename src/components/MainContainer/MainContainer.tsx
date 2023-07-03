import { MainContainerStyles } from './MainContainer.styles';

interface MainContainerProps {
  children: JSX.Element | Array<JSX.Element>;
}

export function MainContainer({ children }: MainContainerProps) {
  return <MainContainerStyles>{children}</MainContainerStyles>;
}
