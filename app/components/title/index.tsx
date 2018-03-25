import * as React from 'react'
import * as css from './styles.scss'

interface T {
    label: string;
    className: string;
    children: string | React.ReactChild | React.ReactNode | any[];
}

export default class Title extends React.Component<T, {}> {
    static defaultProps = {
        className: ''
    }

    render () {
        const cn: any = []
        const { label, children, className } = this.props

        cn.push(css.title)

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                {label || children}
            </div>
        )
    }
}
