import * as React from 'react'
import * as css from './styles.scss'

interface Location {
    pathname: string;
}

export interface P {
    location: Location;
}

export default function NoMatch ({ location }: P) {
    document.title = '404 Not Found'

    return (
        <div className={css.error}>
            <div className={css.content}>
                <h1 className={css.title}>Ошибка (4xx)</h1>
                <p className={css.description}>
                    Не удалось найти страницу <code>{location.pathname}</code>.
                </p>
            </div>
        </div>
    )
}
