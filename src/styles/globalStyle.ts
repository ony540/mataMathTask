import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import './font.css'

export const GlobalStyle = createGlobalStyle`
	${reset};

  html,body {
    font-family: "Noto Sans KR", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
		line-height: 1.6;
		font-size: ${p => p.theme.fontSize.sm};
		color: ${p => p.theme.color.black};
  }

	*{
		box-sizing: border-box;
	}

	:root{
		font-size: 10px;

		@media (max-width: 1480px) {
    font-size: 9px;
  }
		@media (max-width: 1330px) {
    font-size: 8px;
  }
	}

	::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    background: ${p => p.theme.color.gray600};
		border-radius: 8px;
  
}

::-webkit-scrollbar-track {
    background: transparent
}

	a{
		text-decoration: none;
		color: inherit;
	}

	button {
		border: 0;
		padding: 0;
		background: transparent;
		font: inherit;
		cursor: pointer;
	}

	img{
		width: 100%;
		vertical-align: middle;
	}

	svg{
		vertical-align: middle;
	}
  
	.a11y-hidden {
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
	}
`
