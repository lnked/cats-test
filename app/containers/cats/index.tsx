import * as React from 'react'
import * as css from './styles.scss'
import axios from 'axios'

import { Card, Title } from 'components'

interface S {
    list: any;
    selected: Array<string>;
}

export default class Cats extends React.Component<{}, S> {
    state = {
        list: [],
        selected: []
    }

    componentDidMount () {
        axios
            .get('https://lnked.github.io/cats-test/api/cats.json')
            .then((response) => {
                if (typeof (response.data) !== 'undefined') {
                    this.setState({ list: response.data })
                }
            })
            .catch((err) => {
                console.log('err: ', err)
            })
    }

    handleChange (choosed: string) {
        const { selected }: { selected: Array<string> } = this.state

        let selectedIds: Array<string> = selected.slice()

        if (selected.indexOf(choosed) > -1) {
            selectedIds = selectedIds.filter(id => id !== choosed)
        } else {
            selectedIds.push(choosed)
        }

        this.setState({
            ...this.state, selected: selectedIds
        })
    }

    render () {
        const { list, selected }: { list: any, selected: Array<string> } = this.state

        return (
            <div className={css.container}>
                <Title className={css.title}>Ты сегодня покормил кота?</Title>

                <div className={css.cats}>
                    {list.map((props, id) => (
                        <Card
                            {...props}
                            key={id}
                            value={id}
                            selected={selected.indexOf(id) > -1}
                            className={css.cats__item}
                            handleChange={this.handleChange.bind(this, id)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
