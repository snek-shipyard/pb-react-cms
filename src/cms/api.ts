import {BifrostBridge} from 'bridge'
import BridgeDrop, {references} from 'drop'

BridgeDrop.bridge = new BifrostBridge({
  httpUrl: 'http://localhost:8000/graphql/'
})

// Session must be started after replacing the bridge
// await BridgeDrop.bridge.session.begin()

export const BridgeSession = BridgeDrop.bridge.session
export const DropAPI = BridgeDrop.buildIn
export const DropAPIReferences: any = references
