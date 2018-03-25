import * as React from 'react'
import * as css from './styles.scss'

interface T {
    value: number;
    category: string;
    name: string;
    stuffing: string;
    weight: string;
    portion: number;
    bonus: any;
    selected?: boolean;
    disabled?: boolean;
    className?: string;
    selectedText?: string;
    disabledText?: string;
    handleChange: (value: number) => void | boolean;
}

interface S {
    selected: boolean;
    disabled: boolean;
}

export default class Card extends React.Component<T, S> {
    static defaultProps = {
        selected: false,
        disabled: false,
        className: ''
    }

    state = {
        selected: this.props.selected || false,
        disabled: this.props.disabled || false
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({
                ...this.state, selected: nextProps.selected
            })
        }
    }

    renderCategory () {
        const { category } = this.props

        return (
            <div className={css.category}>{category}</div>
        )
    }

    renderName () {
        const { name } = this.props

        return (
            <div className={css.name}>{name}</div>
        )
    }

    renderStuffing () {
        const { stuffing } = this.props

        return (
            <div className={css.stuffing}>{stuffing}</div>
        )
    }

    renderPortion () {
        const { portion } = this.props

        return (
            <div className={css.portion}>
                <strong className={css.portion__count}>{portion}</strong> порций
            </div>
        )
    }

    renderBonus () {
        const result: any = []
        const { bonus } = this.props

        if (bonus.count) {
            result.push(
                <div key="bonus" className={css.bonus}>
                    <strong className={css.bonus__count}>{bonus.count}</strong> {bonus.value}
                </div>
            )
        } else {
            result.push(
                <div key="bonus" className={css.bonus}>
                    {bonus}
                </div>
            )
        }

        return result
    }

    renderWeight () {
        const { weight } = this.props

        return (
            <div className={css.weight}>
                <span className={css.weight__center}>
                    <span className={css.weight__value}>{weight}</span>
                    <span className={css.weight__unit}>кг</span>
                </span>
            </div>
        )
    }

    handleChange = (e) => {
        this.props.handleChange(e.nativeEvent.target.value)
    }

    render () {
        const cn: any = []
        const { value, className, selectedText, disabledText } = this.props
        const { selected, disabled } = this.state

        cn.push(css.card)

        if (selected) {
            cn.push(css.card_selected)
        }

        if (disabled) {
            cn.push(css.card_disabled)
        }

        if (className) {
            cn.push(className)
        }

        const image = require('./assets/photo.png')

        let manual: any = ''

        if (selected) {
            manual = (
                <div className={css.manual}>
                    {selectedText}
                </div>
            )
        } else if (disabled) {
            manual = (
                <div className={[css.manual, css.manual_disabled].join(' ')}>
                    {disabledText}
                </div>
            )
        } else {
            manual = (
                <div className={[css.manual, css.manual_dotted].join(' ')}>
                    Чего сидишь? Порадуй котэ, <button
                        className={css.add_cart}
                        onClick={this.handleChange}>купи</button>
                </div>
            )
        }

        return (
            <div className={cn.join(' ')}>
                <label className={css.label}>
                    <input
                        type="checkbox"
                        name={'cat'}
                        value={value}
                        className={css.checkbox}
                        onChange={this.handleChange}
                    />

                    <div className={css.content}>
                        { this.renderCategory() }

                        { this.renderName() }

                        { this.renderStuffing() }

                        { this.renderPortion() }

                        { this.renderBonus() }

                        { this.renderWeight() }

                        <img src={image} className={css.image} alt=""/>
                    </div>

                    <svg role="img" className={css.card__mask}><use xlinkHref="#mask"/></svg>
                </label>

                {manual}
            </div>
        )
    }
}
