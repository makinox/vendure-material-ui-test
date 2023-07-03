import { HeaderStyles } from './Header.styles';

export function Header() {
  return (
    <HeaderStyles>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div>
        <button>$ 0</button>
      </div>
    </HeaderStyles>
  );
}
