import * as React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import {
    Cats,
    About,
    NoMatch
} from 'containers'

const routes: any = [
    {
        exact: true,
        path: '/cats-test',
        component: Cats
    }, {
        path: '/cats-test/about',
        component: About
    }, {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]

export default class App extends React.Component<{}, {}> {
    render () {
        return (
            <Router>
                <CoreLayout>
                    <Switch>

                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route {...rest} key={key} render={(props: any) =>
                                <Component {...props} className={`fade fade-${status}`} />
                            } />
                        ))}

                    </Switch>
                </CoreLayout>
            </Router>
        )
    }
}
