import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading(){
      return <div>加载中……</div>
  }
});

export default () =><LoadableComponent/>
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }