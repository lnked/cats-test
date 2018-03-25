import * as React from 'react'
import * as css from './styles.scss'
import axios from 'axios'

interface S {
    list: any;
}

export default class About extends React.Component<{}, S> {
    state = {
        list: []
    }

    componentDidMount () {
        axios
            .get('https://lnked.github.io/cats-test/api/answers.json')
            .then((response) => {
                if (typeof (response.data) !== 'undefined') {
                    this.setState({ list: response.data })
                }
            })
            .catch((err) => {
                console.log('err: ', err)
            })
    }

    render () {
        const { list }: any = this.state

        console.log(list)

        /* eslint-disable */

        return (
            <div className={css.container}>
                <div className={css.qq}>
                    {list.map((props, id) => (
                        <div className={css.qq__node} key={id}>
                            <div className={css.qq__title}>{props.q}:</div>
                            {props.remind.map((remind, remindId) => (
                                <div key={remindId} className={css.qq__item}>
                                    <div className={css.qq__remind}>{remind.q}</div>
                                    <div className={css.qq__answer} dangerouslySetInnerHTML={{ __html: remind.a }} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
