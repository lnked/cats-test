import * as React from 'react'
import * as css from './styles.scss'

import { NavLink } from 'react-router-dom'

import { SvgFixer } from 'utils'

interface T {
    children?: string | React.ReactChild | React.ReactNode | any[];
}

interface S {
    title: string;
}

export default class CoreLayout extends React.Component<T, S> {
    state = {
        title: 'Cats start page'
    }

    componentWillMount () {
        document.title = this.state.title
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        const { children } = this.props

        return (
            <div className={css.layout}>
                <div className={css.header}>
                    <NavLink to="/cats-test/about" className={css.button} activeClassName={css.active}>
                        Ответы на вопросы
                    </NavLink>

                    <NavLink to="https://github.com/lnked/cats-test" target="_blank" className={css.button}>
                        Код проекта
                    </NavLink>
                </div>

                <section className={css.main}>
                    { children }
                </section>
            </div>
        )
    }
}
