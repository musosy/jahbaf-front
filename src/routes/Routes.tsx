import NeedsAuthGuard from 'components/AuthGuards/NeedsAuthGuard.component';
import WithoutAuthGuard from 'components/AuthGuards/WithoutAuthGuard.component';
import { Route, Switch } from 'react-router-dom';
import { RouteType, routes, NeedsAuth } from './routes.list';

export const Routes = () => {
    return (
        <Switch>
            {
                routes.map((route: RouteType) => (
                    <Route path={route.path} key={route.path} exact={route.exact || false}>
                        {route.needsAuth === NeedsAuth.YES &&
                            <NeedsAuthGuard>
                                <route.component {...route.props} />
                            </NeedsAuthGuard>}
                        {route.needsAuth === NeedsAuth.NO &&
                            <WithoutAuthGuard>
                                <route.component {...route.props} />
                            </WithoutAuthGuard>}
                        {route.needsAuth === NeedsAuth.DONT_MATTER &&
                            <route.component {...route.props} />
                        }
                    </Route>
                ))
            }
        </Switch>
    );
};
