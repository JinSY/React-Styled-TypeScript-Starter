import 'core-js/stable'
import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './app'

ReactDOM.render(<App />, document.getElementById('app') as HTMLElement)
