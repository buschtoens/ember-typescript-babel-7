import Route from '@ember/routing/route';

interface ApplicationRouteModel {
  color: string;
}

export default class ApplicationRoute extends Route {
  model(): ApplicationRouteModel {
    return {
      color: 'green'
    };
  }
}
