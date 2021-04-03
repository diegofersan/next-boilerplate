import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('sould render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #f2f2f2;
        color: #313131;
        width: 100%;
        height: 100%;
        text-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 3rem;
      }

      .c3 {
        width: min(10rem,100%);
        position: relative;
        bottom: -20rem;
      }

      .c1 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .c2 {
        font-size: 1.2rem;
      }

      <main
        class="c0"
      >
        <h1
          class="c1"
        >
          Boilerplate
        </h1>
        <p
          class="c2"
        >
          Typescript, ReactJS, NextJS e Styled Components
        </p>
        <img
          alt="Está escrito Keepress"
          class="c3"
          src="/img/logo.png"
        />
      </main>
    `)
  })

  it('sould render colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#f2f2f2' })
  })
})
